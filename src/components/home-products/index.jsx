import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetProductQuery } from "../../context/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { useGetCategoryQuery } from "../../context/categoryApi";
import right from "../../assets/images/arrow-right.svg";
import heart from "../../assets/images/like.svg";
import fillHeart from "../../assets/images/fill-heart.svg";
import cartImg from "../../assets/images/light-cart.svg";
import ProductsLoading from "../products-loading";

const HomeProducts = ({ data, isLoading, setLimit }) => {
  const { data: categoryData } = useGetCategoryQuery();
  const [categoryValue, setCategoryValue] = useState("");

  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  const filteredProduct = categoryValue
    ? data?.filter((el) => el.category === categoryValue)
    : data;

  let products = filteredProduct?.map((el) => (
    <div key={el.id} className="home__products__card">
      <button onClick={() => dispatch(toggleToWishes(el))}>
        {wishes.some((w) => w.id === el.id) ? (
          <img src={fillHeart} alt="like" className="home__products__heart" />
        ) : (
          <img src={heart} alt="like" className="home__products__heart" />
        )}
      </button>
      <Link to={`products/${el.id}`}>
        <img src={el.image} alt="product" className="home__products__img" />
      </Link>
      <Link to={`products/${el.id}`} className="home__products__to">
        <h2 className="home__products__title">{el.title}</h2>
        <s className="home__products__oldprice">{el.oldPrice}</s>
      </Link>
      <div className="home__products__exem">
        <Link to={`products/${el.id}`} className="home__products__price">
          {el.price}
        </Link>
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
  console.log(categoryValue);
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
          <NavLink
            onClick={() => setCategoryValue("")}
            className="home__products__link"
          >
            Все
          </NavLink>
          {categoryData?.map((el) => (
            <NavLink
              onClick={() => setCategoryValue(el.title)}
              key={el.id}
              className="home__products__link"
            >
              {el.title}
            </NavLink>
          ))}
        </div>
        <select
          onChange={(e) => setCategoryValue(e.target.value)}
          className="home__products__res"
        >
          <option className="home__products__link" value="">
            Все
          </option>
          {categoryData?.map((el) => (
            <option
              onChange={(e) => setCategoryValue(e.target.value)}
              key={el.id}
              className="home__products__link"
              value={el.title}
            >
              {el.title}
            </option>
          ))}
        </select>
        <div className="home__products__wrapper">
          {isLoading ? <ProductsLoading /> : products}
        </div>
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
