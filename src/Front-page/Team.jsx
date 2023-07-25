import React from "react";
import user1 from "../Front-page/images/user1.png";
import user2 from "../Front-page/images/user2.png";
import user3 from "../Front-page/images/user3.png";
import "./Team.css";

const Team = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Team Members</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" width={"100"} height={"100"} />
            <p>
              xyz
            </p>
            <p>
              <span>Deepak Kumar Thakur</span>
            </p>
            <p>CSE Final Year"</p>
            <p>2001330109007</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1" width={"100"} height={"100"} />
            <p>
             xyz
            </p>
            <p>
              <span>Adarsh Chaudhary</span>
            </p>
            <p>CSE Final Year"</p>
            <p>2001330109007</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1" width={"100"} height={"100"} />
            <p>
              xyz
            </p>
            <p>
              <span>Akash Kuswaha</span>
            </p>
            <p>CSE Final Year"</p>
            <p>2001330109007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
