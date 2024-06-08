import React, { memo } from "react";
import video from "../../assets/videos/smoke.mp4";
import "../../sass/components/_lazy-load.scss";

const LazyLoad = () => {
  return (
    <div className="lazyload" id="lazyload">
      <section id="loading">
        <video src={video} autoplay muted></video>
        <h1 class="animation-title">
          <span>R</span>
          <span>U</span>
          <span>$</span>
          <span>T</span>
          <span>A</span>
          <span>M</span>
          <span>O</span>
          <span>V</span>
          <span>V</span>
        </h1>
      </section>
    </div>
  );
};

export default memo(LazyLoad);
