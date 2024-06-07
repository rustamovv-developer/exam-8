import React, { memo } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useGetProductSingleQuery } from "../../context/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incCart, decCart } from "../../context/cartSlice";
import heart from "../../assets/images/like.svg";
import fillHeart from "../../assets/images/fill-heart.svg";
import { toggleToWishes } from "../../context/wishlistSlice";

const DetailWrapper = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductSingleQuery(id);

  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  let findpr = cart.find((c) => c.id === data?.id);

  return (
    <div className="detail__wrapper" id="detail__wrapper">
      <div className="detail__column">
        <img src={data?.image[0]} alt="product image" className="detail__img" />
        <div className="detail__context">
          <b className="detail__title">{data?.title}</b>
          <div className="detail__contact">
            <div className="detail__texts">
              <p className="detail__category">{data?.category}</p>
              <p className="detail__category">Артикул : 7655-188</p>
              <p className="detail__green">В наличии</p>
            </div>
          </div>
          <div className="detail__prices">
            <b className="detail__price">{data?.price} ₽</b>
            <s className="detail__oldprice">{data?.oldPrice} ₽</s>
          </div>
          <p className="detail__text">{data?.description}</p>
          <div className="detail__slice">
            {cart.some((c) => c.id === data?.id) ? (
              <div className="detail__calc">
                <button
                  disabled={findpr.quantity <= 1}
                  onClick={() => dispatch(decCart(data))}
                  className="detail__pm"
                >
                  -
                </button>
                <p className="detail__quantity">{findpr?.quantity}</p>
                <button
                  onClick={() => dispatch(incCart(data))}
                  className="detail__pm"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => dispatch(addToCart(data))}
                className="detail__btn"
              >
                В корзину
              </button>
            )}
            <button onClick={() => dispatch(toggleToWishes(data))}>
              {wishes.some((w) => w.id === id) ? (
                <img src={fillHeart} alt="like" className="detail__heart" />
              ) : (
                <img src={heart} alt="like" className="detail__heart" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="detail__info">
        <b className="detail__title">Характеристика</b>
        <div className="detail__box">
          <div className="detail__card">
            <p className="detail__card__title">Цвет</p>
            <p className="detail__card__text">Жёлтый</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Год</p>
            <p className="detail__card__text">2016</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Диаметр колеса</p>
            <p className="detail__card__text">27.5</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Материал рамы</p>
            <p className="detail__card__text">Карбон</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Размер</p>
            <p className="detail__card__text">L</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Страна</p>
            <p className="detail__card__text">Швейцария</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Производитель</p>
            <p className="detail__card__text">Scott</p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Покрышки</p>
            <p className="detail__card__text">
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Рама</p>
            <p className="detail__card__text">
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Подседельный Штырь</p>
            <p className="detail__card__text">
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Седло</p>
            <p className="detail__card__text">
              Ritchey WCS Streem V3 Titanium rails
            </p>
          </div>
          <div className="detail__card">
            <p className="detail__card__title">Вилка</p>
            <p className="detail__card__text">
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailWrapper);
