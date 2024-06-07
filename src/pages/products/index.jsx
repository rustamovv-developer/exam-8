import React, { memo, useEffect } from "react";
import ProductsWrapper from "../../components/products-wrapper";
import "../../sass/pages/products.scss";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="products" id="products">
      <div className="container">
        <div className="context">
          <p className="context__text">Все товары</p>
        </div>
        <ProductsWrapper />
      </div>
    </main>
  );
};

export default memo(Products);
