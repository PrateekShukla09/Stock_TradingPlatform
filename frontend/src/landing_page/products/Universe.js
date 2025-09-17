import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-3">
        <p className="mb-5" style={{ fontSize: "17px" }}>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog
        </p>
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p style={{ fontSize: "14px" }}>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 mt-4">
          <img src="media/smallcaseLogo.png" alt="" className="mb-2" />
          <p className="text-small text-muted">Thematic investment platform</p>
          <img
            className="mt-5 mb-2"
            src="media/zerodhaFundhouse.png"
            style={{ width: "55%" }}
            alt=""
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            src="media/streakLogo.png"
            style={{ width: "45%" }}
            alt=""
            className="mb-2"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
          <img
            className="mt-5 mb-2"
            src="media/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            src="media/sensibullLogo.svg"
            alt=""
            style={{ width: "45%" }}
            className="mb-2"
          />
          <p className="text-small text-muted">Options trading platform</p>
          <img
            className="mt-5 mb-2"
            src="media/dittoLogo.png"
            style={{ width: "37%" }}
            alt=""
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div class="text-center">
          <a href="http://localhost:3001/signup">
            <button
              type="button"
              class="btn btn-primary mb-5"
              style={{ width: "20%" }}
            >
              Sign up now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Universe;
