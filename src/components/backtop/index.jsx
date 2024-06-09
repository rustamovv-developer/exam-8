import React, { memo } from "react";
import backtop from "../../assets/images/backtop.svg";

window.addEventListener("scroll", () => {
  if (scrollY >= 200) {
    document.querySelector("#backtop").classList.add("backtop-show");
  } else {
    document.querySelector("#backtop").classList.remove("backtop-show");
  }
});

const Backtop = () => {
  return (
    <a className="backtop" id="backtop" href="#">
      <img className="backtop__img" src={backtop} alt="back top" />
    </a>
  );
};

export default memo(Backtop);
