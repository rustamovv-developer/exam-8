import React, { memo } from "react";
import rightGrey from "../../assets/images/arrow-right-grey.svg";
import img1 from "../../assets/images/home-catolog-1.png";
import "../../sass/pages/categories.scss";

const Categories = () => {
  return (
    <main className="categories" id="categories">
      <div className="container">
        <b className="title">Каталог</b>
        <div className="categories__wrapper">
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Люстры</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img1} alt="catolog1" className="home__catolog__img" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(Categories);
