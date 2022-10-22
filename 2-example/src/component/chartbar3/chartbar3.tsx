import React from "react";
import styles from "./chartbar3.module.css";
import * as Icons from "react-icons/fa";

type Keys = keyof typeof Icons;
interface ICustomFaIconProps {
  name: Keys;
}
const CustomFaIcon = (props: ICustomFaIconProps) => {
  const FaIcon = Icons[props.name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};

function ChartBar3({
  text = "TEXT",
  color = "pink",
  iconName = "fa-solid fa-house",
  unit = "TEXT",
  total = 50,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.column_color} style={{ backgroundColor: color }}>
        <div className={styles.column_icons}>
          <div className={iconName}></div>
        </div>

        <div className={styles.column_app}>
          <p className={styles.title}>{text}</p>
          <span className={styles.number}>{total}</span>
          <span className={styles.rate}>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBar3;
