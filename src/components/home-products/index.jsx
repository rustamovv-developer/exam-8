import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetProductQuery } from "../../context/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import right from "../../assets/images/arrow-right.svg";
import heart from "../../assets/images/like.svg";
import fillHeart from "../../assets/images/fill-heart.svg";
import cartImg from "../../assets/images/light-cart.svg";

const HomeProducts = () => {
  const [limit, setLimit] = useState(8);

  const { data, error, isLoading } = useGetProductQuery({ limit });
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  let products = data?.map((el) => (
    <div key={el.id} className="home__products__card">
      <button onClick={() => dispatch(toggleToWishes(el))}>
        {wishes.some((w) => w.id === el.id) ? (
          <img src={fillHeart} alt="like" className="home__products__heart" />
        ) : (
          <img src={heart} alt="like" className="home__products__heart" />
        )}
      </button>
      <img src={el.image} alt="product" className="home__products__img" />
      <h2 className="home__products__title">{el.title}</h2>
      <s className="home__products__oldprice">{el.oldPrice}</s>
      <div className="home__products__exem">
        <b className="home__products__price">{el.price}</b>
        <button className="home__products__cart">
          <img
            onClick={() => dispatch(addToCart(el))}
            src={cartImg}
            alt="buy"
          />
        </button>
      </div>
    </div>
  ));

  return (
    <section className="home__products" id="home__products">
      <div className="container">
        <div className="context">
          <p className="context__text">Популярные товары</p>
          <Link to="/products" className="context__btn">
            Все товары{" "}
            <img src={right} alt="arrow right" className="context__img" />
          </Link>
        </div>
        <div className="home__products__category">
          <NavLink className="home__products__link">Светильники</NavLink>
          <NavLink className="home__products__link">Люстры</NavLink>
          <NavLink className="home__products__link">Лампы</NavLink>
          <NavLink className="home__products__link">Настольные лампы</NavLink>
          <NavLink className="home__products__link">Ночники</NavLink>
          <NavLink className="home__products__link">Подстветка</NavLink>
          <NavLink className="home__products__link">Уличное освещение</NavLink>
          <NavLink className="home__products__link">
            Мебельные установки
          </NavLink>
        </div>
        <select className="home__products__res">
          <option className="home__products__link" value="all">
            Все
          </option>
          <option className="home__products__link" value="all">
            Светильники
          </option>
          <option className="home__products__link" value="all">
            Люстры
          </option>
          <option className="home__products__link" value="all">
            Лампы
          </option>
          <option className="home__products__link" value="all">
            Настольные лампы
          </option>
          <option className="home__products__link" value="all">
            Ночники
          </option>
          <option className="home__products__link" value="all">
            Подстветка
          </option>
          <option className="home__products__link" value="all">
            Уличное освещение
          </option>
          <option className="home__products__link" value="all">
            Мебельные установки
          </option>
        </select>
        <div className="home__products__wrapper">{products}</div>
        <button
          onClick={() => setLimit((p) => p + 4)}
          className="home__products__limit"
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default memo(HomeProducts);
