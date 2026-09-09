import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkLabel = "Learn more",
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img src={imageURL} className="w-100" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-2">
          <h1>{productName} </h1>
          <p>{productDescription}</p>
          <div>
            {tryDemo !== undefined && (
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore !== undefined && (
              
                <a href={learnMore}
                style={{
                  marginLeft: tryDemo !== undefined ? "50px" : "0px",
                  textDecoration: "none",
                }}
              >
                {linkLabel}{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
