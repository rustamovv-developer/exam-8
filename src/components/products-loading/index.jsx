import React, { memo } from "react";
import "../../sass/components/_products-loading.scss";

const ProductsLoading = () => {
  return (
    <section className="products__loading">
      <div className="container">
        <div className="products__loading__wrapper">
          {Array(8)
            .fill("")
            .map((_, inx) => (
              <div key={inx} className="products__loading__card">
                <div className="products__loading__img products__loading__anime"></div>
                <div className="products__loading__title products__loading__anime"></div>
                <div className="products__loading__oldprice products__loading__anime"></div>
                <div className="products__loading__price"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProductsLoading);
