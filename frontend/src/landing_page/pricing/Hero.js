import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row p-3">
        <div className="text-center mt-5 border-bottom">
          <h1 className="mb-4">Pricing</h1>
          <p className="text-muted mb-5">
            Free equity investments and flat{" "}
            <i class="fa fa-inr" aria-hidden="true"></i>20 traday and F&O trades
          </p>
        </div>
        <div className="col-4 mt-5 text-center">
          <img src="media/pricingequity.svg" alt="Equity" style={{width: "85%"}}/>
          <h2 className="fs-2 mb-4">Free Equity delivery</h2>
          <p className="text-muted" >
            All equity delivery investments (NSE,BSE), are absolutely free ---{" "}
            <i class="fa fa-inr" aria-hidden="true"></i> 0 brokerage.{" "}
          </p>
        </div>
        <div className="col-4 mt-5 text-center">
          <img src="media/intradayTrades.svg" alt="Equity" style={{width: "85%"}} />
          <h2 className="fs-2 mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 mt-5 text-center">
          <img src="media/pricingMF.svg" alt="Equity" style={{width: "85%"}} />
          <h2 className="fs-2 mb-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
