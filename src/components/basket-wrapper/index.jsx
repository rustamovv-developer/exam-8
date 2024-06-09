import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearCart,
  decCart,
  incCart,
  removeFromCart,
} from "../../context/cartSlice";
import Empty from "../empty";
import trash from "../../assets/images/basket.svg";

const BOT_TOKEN = "6991932375:AAFcQPvFu14Q1Q3YfzuofeHvTzFDMLsmnrQ";
const CHAT_ID = "-1002091450532";
const USER_ID = "1682103610";

// https://api.telegram.org/bot6991932375:AAFcQPvFu14Q1Q3YfzuofeHvTzFDMLsmnrQ/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const BasketWrapper = () => {
  let navitage = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const [total, setTotal] = useState(0);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");
  const [coment, setComent] = useState("");

  let text = "Lampalar saytidan buyurtma %0A%0A";

  cart.forEach((product) => {
    text += `Product name: ${product.title} %0A`;
    text += `Product price: ${product.price} %0A`;
    text += `Product old price: ${product.oldPrice} %0A`;
    text += `Product quantity: ${product.quantity} %0A`;
    text += `Product rating: ${product.rating} %0A%0A`;
  });

  const handleOrder = (e) => {
    text += `Fullname: ${fullName} %0A`;
    text += `Phone number: ${phone} %0A`;
    text += `Email: ${email} %0A`;
    text += `Addres: ${addres} %0A`;
    text += `Coment: ${coment} %0A%0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    navitage("/");
    localStorage.removeItem("carts");
    clearCart(cart);
    toast.success("Your order has been accepted, thank you!");
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);

  let product = cart?.map((el) => (
    <div key={el.id} className="basket__product">
      <div className="basket__product__start">
        <img
          src={el.image}
          alt="product img"
          className="basket__product__img"
        />
        <Link to={`/products/${el.id}`} className="basket__product__context">
          <p className="basket__product__title">{el.title}</p>
          <b className="basket__product__price">{el.price}₽</b>
        </Link>
      </div>
      <p className="basket__product__text">{el.description}</p>
      <p className="basket__product__text">{el.category}</p>
      <div className="basket__product__end">
        <div className="basket__product__calc">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decCart(el))}
            className="basket__product__pm"
          >
            -
          </button>
          <b className="basket__product__count">{el.quantity}</b>
          <button
            onClick={() => dispatch(incCart(el))}
            className="basket__product__pm"
          >
            +
          </button>
        </div>
        <button className="basket__product__del">
          <img
            onClick={() => dispatch(removeFromCart(el))}
            src={trash}
            alt="delete product"
            className="basket__product__trash"
          />
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="basket__name">
        <b className="title">Корзина</b>
        <p className="basket__count">{cart.length}</p>
      </div>
      {cart.length ? (
        <div className="basket__wrapper" id="basket__wrapper">
          <div className="basket__info">
            <div className="basket__center">
              <div className="basket__top">
                <p className="basket__top__text">Фото</p>
                <p className="basket__top__text">Товары</p>
                <p className="basket__top__text">Описание</p>
                <p className="basket__top__text">Артикул</p>
                <p className="basket__top__text">Количество</p>
              </div>
              {product}
            </div>
            <form onSubmit={handleOrder} className="basket__bottom">
              <div className="basket__bottom__info">
                <div className="basket__bottom__box">
                  <b className="basket__bottom__title">Оформление</b>
                  <div className="basket__bottom__inputs">
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="ФИО"
                      type="text"
                      className="basket__bottom__input"
                    />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Телефон"
                      type="number"
                      className="basket__bottom__input"
                    />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Электронная почта"
                      type="email"
                      className="basket__bottom__input"
                    />
                  </div>
                </div>
                <div className="basket__bottom__address">
                  <b className="basket__bottom__title">Доставка</b>
                  <input
                    value={addres}
                    onChange={(e) => setAddres(e.target.value)}
                    required
                    placeholder="Адрес доставки"
                    type="text"
                    className="basket__bottom__input basket__bottom__in"
                  />
                  <textarea
                    value={coment}
                    onChange={(e) => setComent(e.target.value)}
                    placeholder="Комментарий"
                    className="basket__bottom__textarea"
                  ></textarea>
                </div>
              </div>
              <div className="basket__bottom__pay">
                <b className="basket__bottom__title">Оплата</b>
                <div className="basket__bottom__exem">
                  <div className="basket__bottom__texts">
                    <p className="basket__bottom__text">Товары</p>
                    <p className="basket__bottom__text">{total}₽</p>
                  </div>
                  <div className="basket__bottom__texts">
                    <p className="basket__bottom__text">Доставка</p>
                    <p className="basket__bottom__text">20₽</p>
                  </div>
                </div>
                <b className="basket__bottom__price">{total + 20}₽</b>
                <div className="basket__bottom__end">
                  <button className="basket__bottom__btn">Купить</button>
                  <div className="basket__bottom__check">
                    <div className="basket__bottom__checkbox"></div>
                    <p className="basket__bottom__small">
                      Я согласен наобработку моих персональных данных
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default memo(BasketWrapper);
