import React, { memo } from "react";
import { Link } from "react-router-dom";

const ContactWrapper = () => {
  return (
    <div className="contact__wrapper" id="contact__wrapper">
      <div className="context">
        <b className="title">Контакты</b>
        <div className="contact__card">
          <Link className="contact__title" to="tel:+998887041980">
            (+998) 88 704-19-80
          </Link>
          <p className="contact__address">
            Пн-Пт: 10:00 до 19:00 <br />
            Сб-Вс: заказ через корзину Телефоны:
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactWrapper);
