import React, { memo } from "react";
import "../../sass/components/_product-loading.scss";

const ProductLoading = () => {
  return (
    <section className="product__loading" id="product__loading">
      <div className="container">
        <div className="product__loading__wrapper">
          <div className="product__loading__img product__loading__anime"></div>
          <div className="product__loading__info">
            <div className="product__loading__title product__loading__anime"></div>
            <div className="product__loading__small product__loading__anime"></div>
            <div className="product__loading__small product__loading__anime"></div>
            <div className="product__loading__small product__loading__anime"></div>
            <div className="product__loading__prices">
              <div className="product__loading__price product__loading__anime"></div>
              <div className="product__loading__oldprice product__loading__anime"></div>
            </div>
            <div className="product__loading__text product__loading__anime"></div>
            <div className="product__loading__bottom product__loading__anime"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProductLoading);
