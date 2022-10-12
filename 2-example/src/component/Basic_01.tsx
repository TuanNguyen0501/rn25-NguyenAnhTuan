import React from "react";
import logo from "./basic-images/1.jpg";
type Props = {};

function Basic_01({}: Props) {
  let style = {
    fontWeight: "bold",
  };
  return (
    <div className="clothes">
      <div className="clothes_img">
        <img src={logo} alt="Ao so mi" />
      </div>

      <div className="clothes_des">
        <p style={style}>Clothing & Apparel</p>
        <p>Accessories</p>
        <p>Bags</p>
        <p>Kid's Fashion</p>
        <p>Mens</p>
      </div>
    </div>
  );
}

export default Basic_01;
