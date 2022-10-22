import React from "react";
import "./chartbar2.css";
import * as Icons from "react-icons/fa";
import * as Icon from "@fortawesome/react-fontawesome"
import * as icon from '@fortawesome/free-solid-svg-icons'

type Keys = keyof typeof Icons;
interface ICustomFaIconProps {
  name : Keys
}
const CustomFaIcon = (props : ICustomFaIconProps) => {
  const FaIcon = Icons[props.name];
  if (!FaIcon) return <p>Icon not found!</p>;
  return <FaIcon/>;
};

function ChartBar2({
  text = "TEXT",
  color = "pink",
  iconName = "f-solid fa-house",
  percentage = 50,
}) {
  return (
    <div className="div__bar">
      <div className="icon">
        <i className={iconName}></i>
      </div>
      <div className="language_text">
        <span>{text}</span>
      </div>
      <div className="process__bar">
        <div
          className="success"
          style={{ backgroundColor: color, width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ChartBar2;
