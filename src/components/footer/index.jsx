import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import footerCarts from "../../assets/images/footer-carts.png";
import footerVk from "../../assets/images/footer-vk.png";
import "../../sass/layout/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__card">
            <Link to="/" className="nav__logo">
              <img src={logo} alt="logo" className="nav__img" />
              <h2 className="nav__title">NORNLIGHT</h2>
            </Link>
            <Link to="tel:+998887041980" className="footer__tel">
              (+998) 88 704-19-80
            </Link>
            <img
              src={footerCarts}
              alt="footer Carts"
              className="footer__carts"
            />
            <Link to="/" className="footer__link">
              Политика конфидециальности
            </Link>
            <Link to="/" className="footer__link">
              Пользовательское соглашение
            </Link>
            <div className="footer__boxes">
              <img src={footerVk} alt="vk" className="footer__vk" />
              <img src={footerVk} alt="vk" className="footer__vk" />
              <img src={footerVk} alt="vk" className="footer__vk" />
            </div>
          </div>
          <div className="footer__card">
            <b className="footer__title">Покупателям</b>
            <Link to="/about" className="footer__link">
              О компании
            </Link>
            <Link to="/payment" className="footer__link">
              Доставка и оплата
            </Link>
            <Link to="/return" className="footer__link">
              Возврат
            </Link>
            <Link to="/garant" className="footer__link">
              Гарантии
            </Link>
            <Link to="/contact" className="footer__link">
              Контакты
            </Link>
            <Link to="/blog" className="footer__link">
              Блог
            </Link>
          </div>
          <div className="footer__card">
            <b className="footer__title">Товары</b>
            <Link to="/" className="footer__link">
              Люстры
            </Link>
            <Link to="/" className="footer__link">
              Светильники
            </Link>
            <Link to="/" className="footer__link">
              Бра
            </Link>
            <Link to="/" className="footer__link">
              Торшеры
            </Link>
            <Link to="/" className="footer__link">
              Комплектуюшие
            </Link>
            <Link to="/" className="footer__link">
              Настольные лампы
            </Link>
          </div>
          <div className="footer__card">
            <b className="footer__title footer__stock">.</b>
            <Link to="/" className="footer__link">
              Споты
            </Link>
            <Link to="/" className="footer__link">
              Трековые светильники
            </Link>
            <Link to="/" className="footer__link">
              Уличные светильники
            </Link>
            <Link to="/" className="footer__link">
              Технические светильники
            </Link>
            <Link to="/" className="footer__link">
              Светодиодные ленты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
