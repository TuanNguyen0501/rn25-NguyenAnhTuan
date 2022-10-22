import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const MAX_STAR = 5;

function Ratingfc() {
  const [star, setStar] = useState(0);
  const arrStar = [1, 2, 3, 4, 5];

  const renderStar = () => {
    let result = [];
    for (let index = 0; index < star; index++) {
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiFillStar />
        </span>
      );
    }
    for (let index = star; index < MAX_STAR; index++) {
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiOutlineStar />
        </span>
      );
    }
    return result;
  };
  return (
    <div>
      {renderStar()} 
    </div>
  );
}

export default Ratingfc;
