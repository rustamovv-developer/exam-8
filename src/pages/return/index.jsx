import React, { memo, useEffect } from "react";
import "../../sass/pages/return.scss";

const Return = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="return" id="return">
      <div className="container">
        <div className="return__wrapper">
          <p className="title">Возврат</p>
          <div className="return__info">
            <p className="return__title">
              Обмен и возврат по желанию покупателя
            </p>
            <p className="return__text">
              Если товар по каким-то причинам не подошел вам, вы имеете право
              вернуть его или обменять на другой в течение 7 дней* с момента
              покупки при соблюдении следующих условий:
            </p>
            <div className="return__list">
              <p className="return__item">
                Товар имеет первоначальный вид, имеется товарная кондиция;
              </p>
              <p className="return__item">
                Товар имеет полную комплектацию, включая упаковочные материалы;
              </p>
              <p className="return__item">
                Товар не имеет следов подключался и не имеет признаков монтажа;
              </p>
              <p className="return__item">
                Упаковка товара не имеет повреждений, присутствует
                первоначальный товарный вид
              </p>
              <p className="return__item">
                Есть документ подтверждающий покупку в нашем интернет-магазине
              </p>
              <p className="return__item">
                Для возврата товара необходимо привезти его к нам в офис
              </p>
              <p className="return__item">
                Товар из других городов можно прислать нам транспортной
                компанией, при этом услуги транспортной компании  оплачиваются
                клиентом.
              </p>
              <p className="return__item">
                *В течение 14 дней для отдельных брендов. При оформлении заказа
                уточните у менеджера
              </p>
            </div>
            <p className="return__title">Обмен и возврат по ошибке продавца</p>
            <p className="return__text">
              Причины обмена или возврата по ошибке продавца:
            </p>
            <div className="return__list">
              <p className="return__item">Неполная комплектация товара</p>
              <p className="return__item">Брак или дефект товара</p>
              <p className="return__item">
                Если вы выявили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на
                почту mail@at-svet.ru, указав краткое описание характера брака/
              </p>
              <p className="return__item">
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно
              </p>
            </div>
            <p className="return__title">Возврат денежных средств</p>
            <p className="return__text">
              Возврат денежных средств осуществляется путем перевода на
              банковские реквизиты покупателя при наличии заявления от
              покупателя.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(Return);
