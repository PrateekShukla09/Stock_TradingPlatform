import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-3">
      <div className="row text-center">
        <h1 className="mt-4 mb-3 fs-2">Open a Zerodha account</h1>
        <p className="mb-3">
          Modern platforms and apps,{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>0 investments, and flat{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>20 intraday and F&O
          trades.
        </p>

        <a href="http://localhost:3000/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-3 mt-2"
            style={{ width: "20%", margin: "0 auto" }}
          >
            SignUp Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
