import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Github from "../../public/images/icons/github-icon-dark.svg";

function Homepage() {
  return (
    <Fragment>
      <main id="home">
        {/* <img src="/images/background.jpg" id="bg-img" /> */}
        <h1 className="lg-heading">
          <span>Welcome to my Portfolio</span>
          <br />
          I'm <span className="text-secondary">Ryan</span> NJoroge
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, AI Student & Entrepreneur
        </h2>

        <div className="icons">
          <a href="https://github.com/ryann254" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-n-3a81a9198"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/ronjozkeddely" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/ronjoz.keddely.1" target="_blank">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </main>
    </Fragment>
  );
}

export default Homepage;
