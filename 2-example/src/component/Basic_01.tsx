import React from "react";
import logo from "./basic-images/1.jpg";
type Props = {};

function Basic_01({}: Props) {
  return (
    <>
      <div className="clothes">
        <div className="clothes_img">
          <img src={logo} alt="" />
        </div>
        <div className="clothes_des">
          <p className="product_name">Clothing & Apparel</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Kid's Fashion</p>
          <p>Mens</p>
        </div>
      </div>
    </>
  );
}

export default Basic_01;
