import React, { memo, useEffect } from "react";
import ContactWrapper from "../../components/contact-wrapper";
import "../../sass/pages/contact.scss";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact" id="contact">
      <div className="container">
        <ContactWrapper />
      </div>
      <div className="container-map">
        <div className="contact__bottom">
          <iframe
            className="contact__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1717751571322!5m2!1sen!2s"
            width="100%"
            height="672"
            loading="lazy"
            style={{ border: "none", borderRadius: "15px" }}
          ></iframe>
          <div className="contact__info">
            <div className="contact__box">
              <div className="contact__context">
                <b className="contact__title">Адрес магазина</b>
                <p className="contact__text">
                  г. Москва, Дмитровское шоссе д.100с2
                </p>
              </div>
              <div className="contact__context">
                <b className="contact__title">Почта</b>
                <p className="contact__text">NORNLIGHT@mail.ru</p>
              </div>
              <div className="contact__context">
                <b className="contact__title">Телефон</b>
                <p className="contact__text"> 8 (800) 890-46-56</p>
              </div>
              <button className="contact__btn">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(Contact);
