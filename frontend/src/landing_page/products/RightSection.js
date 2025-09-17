import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5 mt-3 border-top">
      <div className="row mt-1">
        <div className="col-6 mt-5 ">

            <h1 style={{marginLeft: "50px"}} className="mb-3">{productName}</h1>

            <p className="text-muted " style={{marginLeft: "50px"}}> {productDescription}</p>

            <div className="mb-5">
                <a href={learnMore} style={{marginLeft: "50px"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className="col-6">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
