import React, { useState, useEffect } from "react";

interface IPractive {
  initNumber: number;
}

function Practive(props: IPractive) {
  const [isLike, setIsLike] = useState(false);
  const handleOnlick = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <button onClick={handleOnlick}>
        {isLike === true ? "Unlike" : "Like"}
      </button>
      <span>{isLike === true ? 1 : 0}</span>
    </>
  );
}

export default Practive;
