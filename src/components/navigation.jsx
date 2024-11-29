import React from "react";
import logo from "../assets/logo.png"
// import nav_img_cropped from "../assets/navbar_img_transparent.png"
// import nav_img_cropped from "../assets/inverted_logo_cipher.png"
import nav_img_cropped from "../assets/rev.png"

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container header-container">
        <div className="brand__logos">
          <div className="logo-container">
            <img style={{ height: "50px" }} src={logo} alt="logo" />
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <div className="nav-logo-container">
              <img className="nav-logo-img" src={nav_img_cropped} alt="logo" />
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Projects
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                How It Works
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
