import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
                <div className="w-50 text-center">
                <h6 className="py-3 text-info ">SUBSCIRBE</h6>
            <h4>Subscribe to get the latest news about us</h4>
            <span>Please drop your email below to get daily update about what we do</span>
            <div className="input-group mb-3 pt-5 m-auto">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append w-25 ">
                <span className="input-group-text p-3 bg-danger text-light justify-content-center" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
