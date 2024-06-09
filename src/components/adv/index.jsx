import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../sass/components/_adv.scss";

const Adv = () => {
  let { pathname } = useLocation();
  if (pathname.includes("/admin")) {
    return <></>;
  }

  return (
    <div className="adv" id="adv">
      <div className="container">
        <div className="adv__wrapper">
          <ul className="adv__list">
            <li className="adv__item">
              <Link to="/about" className="adv__link">
                O компании
              </Link>
            </li>
            <li className="adv__item">
              <Link to="/payment" className="adv__link">
                Доставка и оплата
              </Link>
            </li>
            <li className="adv__item">
              <Link to="/return" className="adv__link">
                Возврат
              </Link>
            </li>
            <li className="adv__item">
              <Link to="/garant" className="adv__link">
                Гарантии
              </Link>
            </li>
            <li className="adv__item">
              <Link to="/contact" className="adv__link">
                Контакты
              </Link>
            </li>
            <li className="adv__item">
              <Link to="/blog" className="adv__link">
                Блог
              </Link>
            </li>
          </ul>
          <div className="adv__context">
            <p className="adv__text">(+998) 88 704-19-80</p>
            <Link to="tel:+998887041980" className="adv__link">
              Заказать звонок
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Adv);
