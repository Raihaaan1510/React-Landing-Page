import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 bg-indigo-500">
            <div className="about-text">
              <h2>Cipher Soft</h2>
              <p>"CIPHERSOFT is here to provide you the best tech solution, So that your visionary ideas meet versatile solutions."</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xl-22">
                  <ul>
                    
                 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
