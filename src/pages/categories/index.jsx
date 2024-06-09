import React, { memo, useEffect } from "react";
import rightGrey from "../../assets/images/arrow-right-grey.svg";
import img1 from "../../assets/images/home-catolog-1.png";
import img2 from "../../assets/images/home-catolog-2.png";
import img3 from "../../assets/images/home-catolog-3.png";
import img4 from "../../assets/images/home-catolog-4.png";
import img5 from "../../assets/images/home-catolog-5.png";
import img6 from "../../assets/images/home-catolog-6.png";
import img7 from "../../assets/images/home-catolog-7.png";
import img8 from "../../assets/images/home-catolog-8.png";
import img9 from "../../assets/images/home-catolog-9.png";
import img10 from "../../assets/images/home-catolog-10.png";
import img11 from "../../assets/images/home-catolog-11.png";
import Brands from "../../components/brands";
import Blog from "../../components/blog";
import "../../sass/pages/categories.scss";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Светильники</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img2} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Бра</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img3} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Торшеры</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img4} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Настольные лампы</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img5} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Споты</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img6} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Трековые светильники</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img7} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Уличные светильники</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img8} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Технические светильники</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img9} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Светодиодные ленты</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img10} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Комплектуюшие</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img11} alt="catolog1" className="home__catolog__img" />
          </div>
        </div>
        <Brands />
        <Blog />
      </div>
    </main>
  );
};

export default memo(Categories);
