import React from "react";
import aboutImage from "../assets/about_image_new.jpg"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <img src="img/about.jpg" className="img-responsive" alt="" />{" "} */}
            <img src={aboutImage} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 bg-indigo-500">
            <div className="about-text">
              <h2>ABOUT</h2>
              <p>"CIPHERSOFT  brings ideas to life by designing innovative, reliable, and future-ready software solutions.  Built from the ground up, our services are designed to empower companies to leap ahead and to meet all your digital and software needs, ensuring your business thrives in the digital age and embrace the future with confidence."</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xl-22">
                  <ul>  Innovative Solutions</ul>
                  <ul>  Content Optimization</ul>
                  <ul>  Expertise and Experience</ul>
                  <ul>  Timely Delivery</ul>
                  <ul>  Customized Solutions</ul>
                  <ul>  SEO</ul>
                </div>
              </div> */}
              <h3>Why Choose Us?</h3>
              <li>Innovative Solutions</li>
              <li>Content Optimization</li>
              <li>Expertise and Experience</li>
              <li>Timely Delivery</li>
              <li>Customized Solutiomn</li>
              <li>SEO</li>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
