import React, { memo } from "react";
import { useGetProductQuery } from "../../context/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import heart from "../../assets/images/like.svg";
import fillHeart from "../../assets/images/fill-heart.svg";
import cartImg from "../../assets/images/light-cart.svg";
import ProductsLoading from "../products-loading";

const ProductsWrapper = () => {
  const { data, error, isLoading } = useGetProductQuery();
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
    <div className="products__wrapper" id="products__wrapper">
      {isLoading ? <ProductsLoading /> : products}
    </div>
  );
};

export default memo(ProductsWrapper);
