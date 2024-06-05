import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import catologImg from "../../assets/images/catolog-icon.svg";
import searchImg from "../../assets/images/search.svg";
import navHeart from "../../assets/images/like.svg";
import navDiagram from "../../assets/images/diagram.svg";
import navCart from "../../assets/images/cart.svg";

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav__wrapper">
          <Link className="nav__logo">
            <img src={logo} alt="logo" className="nav__img" />
            <h2 className="nav__title">NORNLIGHT</h2>
          </Link>
          <div className="nav__center">
            <button className="nav__catolog">
              <img
                src={catologImg}
                alt="nav-catolog-img"
                className="nav__catolog__img"
              />
              <p className="nav__catolog__text">Каталог</p>
            </button>
            <div className="nav__search">
              <input
                type="text"
                className="nav__search__input"
                placeholder="Поиск по товарам"
              />
              <img
                src={searchImg}
                alt="search-img"
                className="nav__search__icon"
              />
            </div>
          </div>
          <div className="nav__box">
            <div className="nav__card">
              <img src={navHeart} alt="nav-heart" className="nav__card__img" />
              <p className="nav__card__text">Избранное</p>
            </div>
            <div className="nav__card">
              <img
                src={navDiagram}
                alt="nav-diagram"
                className="nav__card__img"
              />
              <p className="nav__card__text">Сравнение</p>
            </div>
            <div className="nav__card">
              <img src={navCart} alt="nav-cart" className="nav__card__img" />
              <p className="nav__card__text">Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
