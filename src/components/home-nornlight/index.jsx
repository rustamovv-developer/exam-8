import React, { memo } from "react";
import { Link } from "react-router-dom";
import right from "../../assets/images/arrow-right.svg";
import img1 from "../../assets/images/home-nornlight-1.png";
import img2 from "../../assets/images/home-nornlight-2.png";
import img3 from "../../assets/images/home-nornlight-3.png";
import img4 from "../../assets/images/home-nornlight-4.png";

const HomeNornlight = () => {
  return (
    <section className="home__nornlight" id="home__nornlight">
      <div className="container">
        <div className="context">
          <p className="context__text">Почему NORNLIGHT?</p>
          <Link to="/about" className="context__btn">
            O компании{" "}
            <img src={right} alt="arrow right" className="context__img" />
          </Link>
        </div>
        <div className="home__nornlight__box">
          <div className="home__nornlight__card">
            <img
              src={img1}
              alt="home-nornlight-img"
              className="home__nornlight__img"
            />
            <strong className="home__nornlight__title">
              Только проверенные бренды
            </strong>
            <p className="home__nornlight__text">
              Бренды, проверенные временем и качеством
            </p>
          </div>
          <div className="home__nornlight__card">
            <img
              src={img2}
              alt="home-nornlight-img"
              className="home__nornlight__img"
            />
            <strong className="home__nornlight__title">
              Самые низкие <br /> цены
            </strong>
            <p className="home__nornlight__text">Ниже не будет нигде</p>
          </div>
          <div className="home__nornlight__card">
            <img
              src={img3}
              alt="home-nornlight-img"
              className="home__nornlight__img"
            />
            <strong className="home__nornlight__title">Быстрая доствка</strong>
            <p className="home__nornlight__text">
              Доставляем по всей РФ <br /> за 1-10 дней
            </p>
          </div>
          <div className="home__nornlight__card">
            <img
              src={img4}
              alt="home-nornlight-img"
              className="home__nornlight__img"
            />
            <strong className="home__nornlight__title">
              Большой ассортимент
            </strong>
            <p className="home__nornlight__text">Более 1000 товаров</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeNornlight);
