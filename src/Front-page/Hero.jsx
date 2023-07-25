import React from "react";
import top from "../Front-page/images/hero.jpg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card bg-dark text-black border-1">
      <img
        src={top}
        className="img-fluid animated"
        id="img"
        alt="home img"
        style={{ height: "650px" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="cantener">
          <h5 className="card-title display-3 fw-bloder mb-5 fw-bold">
            Ecommerce Website
          </h5>
          {/* <p className="p-3 mb-2 bg-secondary text-black text-center fs-4 fw-bolder col-sm-3">
              This website provides an easy way forthe people to pick up any
              iteam
            </p> */}

          <div>
            <Link
              to="/product"
              className="btn btn btn-outline-success btn-lg active"
              role="button"
              aria-pressed="true"
            >
              <span>Explore For Shoping...</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
