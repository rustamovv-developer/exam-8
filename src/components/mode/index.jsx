import React from "react";
import dark from "../../assets/images/dark.svg";
import "../../sass/components/_mode.scss";

const Mode = () => {
  const handleMode = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <button onClick={handleMode} id="mode-btn">
        <img src={dark} alt="dark" />
      </button>
    </>
  );
};

export default Mode;
