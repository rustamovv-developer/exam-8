import React, { memo, useEffect } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../context/categoryApi";
import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/white-basket.svg";
import "../../sass/pages/category-manage.scss";

const CategoryManage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, error } = useGetCategoryQuery();
  const [deleteProduct, {}] = useDeleteCategoryMutation();

  const handleDeleteCategory = (id) => {
    deleteProduct(id);
  };

  let categories = data?.map((el) => (
    <div key={el.id} className="category__manage__card">
      <b className="category__manage__title">{el.title}</b>
      <div className="product__manage__box">
        <button className="product__manage__edit">
          <img src={edit} alt="edit image" className="product__manage__img" />
        </button>
        <button
          onClick={() => handleDeleteCategory(el.id)}
          className="product__manage__delete"
        >
          <img src={del} alt="delete image" className="product__manage__img" />
        </button>
      </div>
    </div>
  ));

  return (
    <section className="category__manage" id="category__manage">
      <b className="product__create__title">Category manage</b>
      <div className="category__manage__wrapper">
        <div className="category__manage__wrapper">{categories}</div>
      </div>
    </section>
  );
};

export default memo(CategoryManage);
