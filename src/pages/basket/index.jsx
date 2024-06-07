import React, { memo, useEffect } from "react";
import BasketWrapper from "../../components/basket-wrapper";
import "../../sass/pages/basket.scss";

const Basket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="basket" id="basket">
      <div className="container">
        <BasketWrapper />
      </div>
    </main>
  );
};

export default memo(Basket);
