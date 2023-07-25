import React from "react";
import indresh from "../Front-page/images/indresh.png"
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={indresh}
              alt="me"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-center font-weight-light">About</h1>
            <p className="fw-bolder">
              imart is an ecommerce webapp in which if any person can easily
              sell and buy any of his products to anyone through this webapp.
              This site is very easy to use and understand. And this site is now
              ready to use in the browser. Which has now been made usable only
              in India
            </p>
            <p className="fw-bolder font-weight-light">
              I am INDRESH BHARATI, a Team Leader for an Imart web application
              Project.
            </p>
            <div>
              <Link
                to="/team"
                className="btn btn btn-outline-success btn-lg active"
                role="button"
                aria-pressed="true"
              >
                <span>Explore More..</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
