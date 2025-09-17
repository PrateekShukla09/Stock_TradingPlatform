import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container p-5 mt-3 border-top">
    <div className="row g-5 align-items-center">
        <div className="col-6">
            <img src={imageURL} className="img-fluid" />
        </div>
        <div className="col-6">
            <h1>{productName}</h1>

            <p>{productDescription}</p>

            <div className="mb-5">
                <a href={tryDemo} style={{marginRight:"10rem"}}>Try Demo  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore}>Learn More  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div>
                <a href={googlePlay} style={{marginRight:"6.5rem"}}><img src="media/googlePlayBadge.svg"/></a>
                <a href={appStore}><img src="media/appstoreBadge.svg"/></a>
            </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
