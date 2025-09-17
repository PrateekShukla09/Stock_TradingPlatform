// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const SentimentWidget = () => {
//   const [holdings, setHoldings] = useState([]);
//   const [sentiments, setSentiments] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHoldingsAndSentiments = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const holdingsRes = await axios.get(
//           "http://localhost:3003/api/holdings"
//         );
//         const holdingsData = holdingsRes.data.holdings || [];
//         setHoldings(holdingsData);

//         const stockSymbols = holdingsData.map((h) => h.stockName);

//         const sentimentRes = await axios.get(
//           "http://localhost:3003/api/sentiment"
//         );
//         const sentimentData = sentimentRes.data;

//         const filteredSentiments = {};
//         stockSymbols.forEach((symbol) => {
//           if (sentimentData[symbol]) {
//             filteredSentiments[symbol] = sentimentData[symbol];
//           }
//         });

//         setSentiments(filteredSentiments);
//       } catch (err) {
//         console.error("Error fetching sentiments:", err);
//         setError("Failed to fetch sentiments. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHoldingsAndSentiments();
//   }, []);

//   if (loading) return <p className="text-gray-600">Loading sentiments...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-4"> Stock Sentiments</h2>
//       {Object.keys(sentiments).length === 0 ? (
//         <p className="text-gray-500">No sentiment data available.</p>
//       ) : (
//         <div className="grid gap-4 md:grid-cols-2">
//           {Object.values(sentiments).map((s) => (
//             <div
//               key={s.symbol}
//               className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//             >
//               <h3 className="text-lg font-semibold mb-2">{s.symbol}</h3>
//               {s.percent ? (
//                 <div className="flex gap-4 mb-2">
//                   <span className="text-green-600">
//                     👍 {s.percent.positive}%
//                   </span>
//                   <span className="text-yellow-600">
//                     😐 {s.percent.neutral}%
//                   </span>
//                   <span className="text-red-600">👎 {s.percent.negative}%</span>
//                 </div>

//               ) : (
//                 <p className="text-red-500">Sentiment data not available.</p>
//               )}
//               <p className="text-sm text-gray-500">
//                 Articles analyzed: {s.total}
//               </p>
//               <ul className="mt-2 space-y-1 text-sm text-gray-700 max-h-32 overflow-y-auto">
//                 {s.items?.slice(0, 3).map((art, idx) => (
//                   <li key={idx}>
//                     🔗{" "}
//                     <a
//                       href={art.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       {art.title}
//                     </a>{" "}
//                     ({art.label})
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SentimentWidget;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentWidget = () => {
  const [holdings, setHoldings] = useState([]);
  const [sentiments, setSentiments] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoldingsAndSentiments = async () => {
      try {
        setLoading(true);
        setError(null);

        const holdingsRes = await axios.get(
          "http://localhost:3003/api/holdings"
        );
        const holdingsData = holdingsRes.data.holdings || [];
        setHoldings(holdingsData);

        const stockSymbols = holdingsData.map((h) => h.stockName);

        const sentimentRes = await axios.get(
          "http://localhost:3003/api/sentiment"
        );
        const sentimentData = sentimentRes.data;

        const filteredSentiments = {};
        stockSymbols.forEach((symbol) => {
          if (sentimentData[symbol]) {
            filteredSentiments[symbol] = sentimentData[symbol];
          }
        });

        setSentiments(filteredSentiments);
      } catch (err) {
        console.error("Error fetching sentiments:", err);
        setError("Failed to fetch sentiments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldingsAndSentiments();
  }, []);

  if (loading) return <p className="text-gray-600">Loading sentiments...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Stock Sentiments</h2>
      {Object.keys(sentiments).length === 0 ? (
        <p className="text-gray-500">No sentiment data available.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.values(sentiments).map((s) => (
            <div
              key={s.symbol}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{s.symbol}</h3>

              {s.percent ? (
                <>
                  <div className="flex gap-4 mb-2">
                    <span className="text-green-600">
                      👍 {s.percent.positive}%
                    </span>
                    <span className="text-yellow-600">
                      😐 {s.percent.neutral}%
                    </span>
                    <span className="text-red-600">
                      👎 {s.percent.negative}%
                    </span>
                  </div>

                  <div className="max-w-xs">
                    <Pie
                      data={{
                        labels: ["Positive", "Neutral", "Negative"],
                        datasets: [
                          {
                            data: [
                              s.percent.positive,
                              s.percent.neutral,
                              s.percent.negative,
                            ],
                            backgroundColor: ["#16a34a", "#ca8a04", "#dc2626"],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            position: "bottom",
                          },
                        },
                        maintainAspectRatio: false,
                      }}
                      width={200} 
                      height={200}
                    />
                  </div>
                </>
              ) : (
                <p className="text-red-500">Sentiment data not available.</p>
              )}

              <p className="text-sm text-gray-500">
                Articles analyzed: {s.total}
              </p>

              <ul className="mt-2 space-y-1 text-sm text-gray-700 max-h-32 overflow-y-auto">
                {s.items?.slice(0, 3).map((art) => (
                  <li key={art.url}>
                    🔗{" "}
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {art.title}
                    </a>{" "}
                    ({art.label})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SentimentWidget;
