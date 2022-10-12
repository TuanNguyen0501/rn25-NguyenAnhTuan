import React from "react";
import logo from "./basic-images/2.jpg";
type Props = {};

function Basic_02({}: Props) {
  return (
    <div className="col-3 television">
      <div className="tv_img">
        <img src={logo} alt="Anh TV" />
      </div>

      <div className="tv_des">
        <div className="name_shop">
          <p>YOUNG SHOP</p>
        </div>

        <div className="name_inf">
          <div className="name_product">Samsung UHD TV 24inch</div>

          <div className="rating_5_star">
            <span className="fa fa-star fa-1x checked"></span>
            <span className="fa fa-star fa-1x checked"></span>
            <span className="fa fa-star fa-1x checked"></span>
            <span className="fa fa-star fa-1x checked"></span>
            <span className="fa fa-star fa-1x"></span>
          </div>

          <div className="price">
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic_02;
