import React, { memo, useEffect } from "react";
import "../../sass/pages/payment.scss";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="payment" id="payment">
      <div className="container">
        <div className="payment__wrapper">
          <b className="title">Доставка и оплата</b>
          <div className="payment__info">
            <p className="payment__title">Доставка</p>
            <p className="payment__text">
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ.{" "}
              <strong className="payment__blue">
                Сроки доставки: 4—6 недель
              </strong>
            </p>
            <p className="payment__title">Курьерская доставка</p>
            <p className="payment__text">
              БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
              <strong className=" payment__blue">от 5 000 ₽</strong> .Заказы
              свыше
              <strong className="payment__blue"> 30 000 ₽ </strong> имеют
              бесплатную доставку, <br /> включительно 15 км от МКАД
            </p>
            <p className="payment__title">Самовывоз</p>
            <p className="payment__text">
              Любой заказ можно забрать самостоятельно по адресу: г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
      </div>
      <div className="container-map">
        <iframe
          className="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1717751571322!5m2!1sen!2s"
          width="100%"
          height="672"
          loading="lazy"
          style={{ border: "none", borderRadius: "15px" }}
        ></iframe>
      </div>
    </main>
  );
};

export default memo(Payment);
