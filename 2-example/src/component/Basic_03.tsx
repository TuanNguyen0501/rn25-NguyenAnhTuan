import React from "react";
import logo from "./basic-images/3.jpg";
type Props = {};

function Basic_03({}: Props) {
  return (
    <div className="technology">
      <div className="tech_img">
        <img src={logo} alt="" width={"500px"} />
      </div>

      <div className="tech_des">
        <div className="tech_title">
          <p>Technology</p>
        </div>

        <div className="tech_inf">
          <p>Harman Kadon Onyx Studio Mini, Reviews & Experiences</p>
        </div>

        <div className="dateTime">
          <span>Feb 21, 2021 by </span>
          <span className="author">drfurion</span>
        </div>
      </div>
    </div>
  );
}

export default Basic_03;
