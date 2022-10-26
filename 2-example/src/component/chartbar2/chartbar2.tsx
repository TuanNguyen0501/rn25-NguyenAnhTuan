import React from "react";
import "./chartbar2.css";
import * as style from "react-icons/di"

interface IChartbar2 {
  text: string;
  color: string;
  iconName: JSX.Element;
  percentage: number
};

function ChartBar2(props:IChartbar2){
  return (
    <div className="div__bar">
      <div className="icon">
        <i>{props.iconName}</i>
      </div>
      <div className="language_text">
        <span>{props.text}</span>
      </div>
      <div className="process__bar">
        <div
          className="success"
          style={{ backgroundColor: props.color, width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ChartBar2;
