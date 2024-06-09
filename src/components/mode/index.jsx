import React, { useState } from "react";
import dark from "../../assets/images/dark.svg";
import light from "../../assets/images/light.svg";
import "../../sass/components/_mode.scss";

const Mode = () => {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode((p) => !p);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <button onClick={handleMode} className="mode-btn" id="mode-btn">
        <img
          className="mode-btn__img"
          src={mode ? light : dark}
          alt={`${mode}`}
        />
      </button>
    </>
  );
};

export default Mode;
