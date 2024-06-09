import React, { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCreateCategoryMutation } from "../../context/categoryApi";

const CategoryCreate = () => {
  const [createCategory, { error, isError }] = useCreateCategoryMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.message ? error?.message : "size of photo is very high"
      );
    }
  }, [isError]);

  const [title, setTitle] = useState("");

  const handleCreateCategory = (e) => {
    e.preventDefault();
    let category = {
      title,
    };

    createCategory(category);

    setTitle("");
  };
  return (
    <main className="category__create" id="category__create">
      <form
        onSubmit={handleCreateCategory}
        className="category__create__wrapper"
      >
        <b className="product__create__title">Create category</b>
        <div className="product__create__box">
          <label htmlFor="title" className="product__create__label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="product__create__input"
          />
        </div>
        <button className="product__create__btn">Create</button>
      </form>
    </main>
  );
};

export default memo(CategoryCreate);
