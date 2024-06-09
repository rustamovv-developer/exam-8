import React, { memo } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../context/productApi";
import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/white-basket.svg";
import "../../sass/pages/product-manage.scss";

const ProductManage = () => {
  const { data, isLoading, error } = useGetProductQuery({
    limit: 8,
  });
  const [deleteProduct, {}] = useDeleteProductMutation();

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  let products = data?.map((el) => (
    <div key={el.id} className="home__products__card">
      <img src={el.image} alt="product" className="home__products__img" />
      <div className="home__products__to">
        <h2 className="home__products__title">{el.title}</h2>
        <s className="home__products__oldprice">{el.oldPrice}</s>
      </div>
      <div className="home__products__exem">
        <div className="home__products__price">{el.price}</div>
        <div className="product__manage__box">
          <button className="product__manage__edit">
            <img src={edit} alt="edit image" className="product__manage__img" />
          </button>
          <button
            onClick={() => handleDeleteProduct(el.id)}
            className="product__manage__delete"
          >
            <img
              src={del}
              alt="delete image"
              className="product__manage__img"
            />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <main className="product__manage" id="product__manage">
      <b className="product__create__title">Manage product</b>
      <div className="product__manage__wrapper">{products}</div>
    </main>
  );
};

export default memo(ProductManage);
