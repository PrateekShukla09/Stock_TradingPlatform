import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5">
      <div className="row p-2">
        <h1 className="mt-5 mb-4"> Technology </h1>
        <p className="text-muted" style={{fontSize: "20px"}}>Sleek, modern and intuitive trading platforms.</p>
        <p className="text-muted" style={{fontSize: "15px"}}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            invsetment offerings{" "}
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
