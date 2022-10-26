import React from "react";
import styles from "./chartbar3.module.css";
import * as style from "react-icons/fa";


interface IChartbar3 {
  text: string;
  color: string;
  iconName: JSX.Element;
  total: number;
  unit: string;
}
function ChartBar3(props:IChartbar3){
  return (
    <div className={styles.container}>
      <div className={styles.column_color} style={{ backgroundColor: props.color }}>
        <div className={styles.column_icons}>
          <div className="icon text-3xl p-4">{props.iconName }</div>
        </div>

        <div className={styles.column_app}>
          <p className={styles.title}>{props.text}</p>
          <span className={styles.number}>{props.total}</span>
          <span className={styles.rate}>{props.unit}</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBar3;
