import React from "react";

function Team() {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <h2 className="text-center" style={{ fontSize: "30px" }}>
            People
        </h2>
      </div>
      <div className="row p-4">
        <div className="col-6 text-center text-muted">
            <img  className="mb-4" src="media/nithinKamath.jpg" alt="Owner" style={{width: "50%", borderRadius:"100%"}} />
            <h5>Nithin Kamath</h5>
            <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 text-muted fs-6 " style={{lineHeight: "2rem"}}>
          <p>
             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
             He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
             Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
