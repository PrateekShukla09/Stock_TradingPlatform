import os
import time
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from cachetools import TTLCache
from motor.motor_asyncio import AsyncIOMotorClient
import httpx

# ---------------- Load Environment ----------------
load_dotenv()
NEWSAPI_KEY = os.getenv("NEWSAPI_KEY")
MONGO_URL = os.getenv("MONGO_URL", "mongodb+srv://ZerodhaProject:Zerodha01@zerodhaclonecluster.pr4hpsd.mongodb.net/?retryWrites=true&w=majority&appName=ZerodhaCloneCluster")

# ---------------- Ensure VADER Lexicon ----------------
try:
    nltk.data.find("sentiment/vader_lexicon")
except LookupError:
    nltk.download("vader_lexicon")

# ---------------- FastAPI App ----------------
app = FastAPI(title="Sentiment Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://localhost:3001","http://localhost:3003",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sia = SentimentIntensityAnalyzer()
CACHE = TTLCache(maxsize=1000, ttl=600)

# ---------------- MongoDB Setup ----------------
client = AsyncIOMotorClient(MONGO_URL)
db = client["Zerodha"]                 # Database name from your URI
holdings_collection = db["holdings"]   # Collection name (make sure it matches your cluster)

# ---------------- Helpers ----------------
async def fetch_news_from_newsapi(q: str, limit: int = 10):
    if not NEWSAPI_KEY:
        raise RuntimeError("Missing NEWSAPI_KEY in environment")
    
    url = "https://newsapi.org/v2/everything"
    params = {
        "q": q,
        "pageSize": limit,
        "sortBy": "publishedAt",
        "language": "en",
        "apiKey": NEWSAPI_KEY,
    }

    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.get(url, params=params)

    if r.status_code != 200:
        raise HTTPException(status_code=502, detail="NewsAPI request failed")

    return r.json().get("articles", [])

def analyze_text_vader(text: str):
    s = sia.polarity_scores(text)["compound"]
    if s >= 0.05:
        label = "positive"
    elif s <= -0.05:
        label = "negative"
    else:
        label = "neutral"
    return {"score": s, "label": label}

# ---------------- API Endpoints ----------------
@app.get("/api/holdings")
async def get_holdings():
    holdings_cursor = holdings_collection.find({})
    holdings = await holdings_cursor.to_list(length=100)
    for h in holdings:
        if "_id" in h:
            h["_id"] = str(h["_id"])
    return {"holdings": holdings}

@app.get("/api/sentiment")
async def get_holdings_sentiment(limit: int = 8, refresh: bool = Query(False)):
    holdings_cursor = holdings_collection.find({})
    holdings = await holdings_cursor.to_list(length=100)
    for h in holdings:
        if "_id" in h:
            h["_id"] = str(h["_id"])
    symbols = [h["stockName"] for h in holdings if "stockName" in h]

    result = {}
    for symbol in symbols:
        key = f"{symbol}:{limit}"
        if not refresh and key in CACHE:
            result[symbol] = CACHE[key]
            continue

        try:
            articles = await fetch_news_from_newsapi(symbol, limit=limit)
        except Exception as e:
            result[symbol] = {"error": f"Failed to fetch news: {str(e)}"}
            continue

        items = []
        counts = {"positive": 0, "neutral": 0, "negative": 0}

        for art in articles:
            title = art.get("title", "") or ""
            desc = art.get("description") or ""
            text = f"{title}. {desc}"
            res = analyze_text_vader(text)
            counts[res["label"]] += 1
            items.append({
                "title": title,
                "description": desc,
                "url": art.get("url"),
                "source": art.get("source", {}).get("name"),
                "publishedAt": art.get("publishedAt"),
                "label": res["label"],
                "score": res["score"]
            })

        total = max(len(items), 1)
        percent = {k: round(v / total * 100, 1) for k, v in counts.items()}

        payload = {
            "symbol": symbol,
            "total": len(items),
            "counts": counts,
            "percent": percent,
            "items": items,
            "fetchedAt": int(time.time())
        }

        CACHE[key] = payload
        result[symbol] = payload

    return result
