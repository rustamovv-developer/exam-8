import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.svg";
import catologImg from "../../assets/images/catolog-icon.svg";
import searchImg from "../../assets/images/search.svg";
import navHeart from "../../assets/images/like.svg";
import navDiagram from "../../assets/images/diagram.svg";
import navCart from "../../assets/images/cart.svg";
import menuImg from "../../assets/images/menu.svg";
import closeImg from "../../assets/images/close.svg";
import "../../sass/layout/_nav.scss";

const Nav = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const [navShrink, setNavShrink] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const handleNavShrink = () => {
    if (window.scrollY > 0) {
      setNavShrink(true);
    } else {
      setNavShrink(false);
    }
  };

  window.addEventListener("scroll", handleNavShrink);

  return (
    <>
      <nav className={`nav ${navShrink ? "nav-shrink" : ""}`} id="nav">
        <div className="container">
          <div className="nav__wrapper">
            {navMenu ? (
              <button onClick={() => setNavMenu(false)} className="nav__menu">
                <img
                  src={closeImg}
                  alt="menu pages"
                  className="nav__menu__img"
                />
              </button>
            ) : (
              <button onClick={() => setNavMenu(true)} className="nav__menu">
                <img
                  src={menuImg}
                  alt="menu pages"
                  className="nav__menu__img"
                />
              </button>
            )}

            <Link to="/" className="nav__logo">
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
              <Link to="/favorites" className="nav__card">
                <div className="nav__card__count">{wishes.length}</div>
                <img
                  src={navHeart}
                  alt="nav-heart"
                  className="nav__card__img"
                />
                <p className="nav__card__text">Избранное</p>
              </Link>
              <Link to="/return" className="nav__card">
                <img
                  src={navDiagram}
                  alt="nav-diagram"
                  className="nav__card__img"
                />
                <p className="nav__card__text">Сравнение</p>
              </Link>
              <Link to="/basket" className="nav__card">
                <div className="nav__card__count count">{cart.length}</div>
                <img src={navCart} alt="nav-cart" className="nav__card__img" />
                <p className="nav__card__text">Корзина</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={`nav__res ${navMenu ? "show" : ""}`}>
        <div className="container">
          <div className="nav__res__wrapper">
            <ul className="nav__res__list">
              <li className="nav__res__item">
                <Link
                  to="/about"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  O компании
                </Link>
              </li>
              <li className="nav__res__item">
                <Link
                  to="/payment"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  Доставка и оплата
                </Link>
              </li>
              <li className="nav__res__item">
                <Link
                  to="/return"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  Возврат
                </Link>
              </li>
              <li className="nav__res__item">
                <Link
                  to="/garant"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  Гарантии
                </Link>
              </li>
              <li className="nav__res__item">
                <Link
                  to="/contact"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  Контакты
                </Link>
              </li>
              <li className="nav__res__item">
                <Link
                  to="/blog"
                  className="nav__res__link"
                  onClick={() => setNavMenu(false)}
                >
                  Блог
                </Link>
              </li>
            </ul>
            <button
              onClick={() => setNavMenu(false)}
              className="nav__res__catolog"
            >
              <img
                src={catologImg}
                alt="nav-catolog-img"
                className="nav__res__catolog__img"
              />
              <p className="nav__res__catolog__text">Каталог</p>
            </button>
            <div className="nav__res__context">
              <Link to="tel:+998887041980" className="nav__res__text">
                (+998) 88 704-19-80
              </Link>
              <Link
                to="tel:+998887041980"
                className="nav__res__link"
                onClick={() => setNavMenu(false)}
              >
                Заказать звонок
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Nav);
