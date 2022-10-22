import React, { useState, useEffect } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface IPractive {
  
}

function BTlikefc(props: IPractive) {
  const [isLike, setIsLike] = useState(false);
  const handleOnlick = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <button onClick={handleOnlick}>
        {isLike === true ? <AiFillLike/> : <AiOutlineLike />}
      </button>
    </>
  );
}

export default BTlikefc;
