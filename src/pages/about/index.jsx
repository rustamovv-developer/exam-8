import React, { memo, useEffect } from "react";
import AboutInfo from "../../components/about-info";
import Brands from "../../components/brands";
import Blog from "../../components/blog";
import "../../sass/pages/about.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="about" id="about">
      <div className="container">
        <AboutInfo />
        <Brands />
        <Blog />
        <div className="about__mobile">
          <p className="context__text">Блог</p>
          <p className="about__text">
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют. <br />
            <br /> Покупая светильники в нашем интернет-магазине, вы получаете
            отличное соотношение цены и качества. Мы осуществляем доставку по
            всей России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
    </main>
  );
};

export default memo(About);
