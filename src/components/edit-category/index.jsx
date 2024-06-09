import React, { memo, useEffect, useState } from "react";
import closeImg from "../../assets/images/close.svg";
import { useUpdateCategoryMutation } from "../../context/categoryApi";
import "../../sass/components/_edit-category.scss";

const EditCategory = ({ editCategory, setEditCategory }) => {
  const [updateCategory, {}] = useUpdateCategoryMutation();

  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (editCategory) {
      setTitle(editCategory?.title);
      setId(editCategory?.id);
    }
  }, [editCategory]);

  const handleEditCategory = (e) => {
    e.preventDefault();

    const updateCategoryData = {
      ...editCategory,
      title,
    };

    updateCategory({ body: updateCategoryData, id: id });

    setTitle("");
    setEditCategory(null);
  };

  return (
    <div className="edit__category" id="edit__category">
      <div
        onClick={() => setEditCategory(null)}
        className="edit__category__overlay"
      >
        <form
          onSubmit={handleEditCategory}
          action=""
          className={`edit__category__modal ${editCategory ? "show" : ""}`}
        >
          <div className="edit__category__top">
            <img
              onClick={() => setEditCategory(null)}
              src={closeImg}
              alt="close"
              className="edit__category__close"
            />
          </div>
          <div className="edit__category__box">
            <label htmlFor="title" className="edit__category__label">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              className="edit__category__input"
            />
          </div>
          <button className="edit__category__btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default memo(EditCategory);
