import React, { memo, useEffect, useState } from "react";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { useUpdateProductMutation } from "../../context/productApi";
import closeImg from "../../assets/images/close.svg";
import "../../sass/components/_edit-product.scss";

const EditProduct = ({ editProduct, setEditProduct }) => {
  const { data: categories } = useGetCategoryQuery();
  let categoryItem = categories?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));

  const [updateProduct, { data: updateData }] = useUpdateProductMutation();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct?.title);
      setPrice(editProduct?.price);
      setOldPrice(editProduct?.oldPrice);
      setCategory(editProduct?.categories);
      setRating(editProduct?.rating);
      setDescription(editProduct?.description);
      setImage(editProduct?.image);
      setId(editProduct?.id);
    }
  }, [editProduct]);

  const handleEditProduct = (e) => {
    e.preventDefault();

    const updateProductData = {
      ...editProduct,
      title,
      price: +price,
      oldPrice: +oldPrice,
      category,
      rating: +rating,
      description,
      image,
    };

    updateProduct({ body: updateProductData, id: id });

    setTitle("");
    setPrice("");
    setOldPrice("");
    setCategory("");
    setRating("");
    setDescription("");
    setImage("");
    setEditProduct(null);
  };
  return (
    <div className="edit__product">
      <div
        onClick={() => setEditProduct(null)}
        className="edit__product__overlay"
      >
        {" "}
      </div>
      <form
        onSubmit={handleEditProduct}
        className={`edit__product__modal ${editProduct ? "show" : ""}`}
      >
        <div className="edit__product__top">
          <img
            onClick={() => setEditProduct(null)}
            src={closeImg}
            alt="close"
            className="edit__product__close"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="title" className="edit__product__label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="edit__product__input"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="price" className="edit__product__label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            type="text"
            className="edit__product__input"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="oldprice" className="edit__product__label">
            Old price
          </label>
          <input
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            id="oldprice"
            type="text"
            className="edit__product__input"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="category" className="edit__product__label">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            className="edit__product__input"
          >
            <option value="Select">Select</option>
            {categoryItem}
          </select>
        </div>
        <div className="edit__product__box">
          <label htmlFor="rating" className="edit__product__label">
            Rating
          </label>
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
            type="text"
            className="edit__product__input"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="image" className="edit__product__label">
            Image url
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="image"
            type="text"
            className="edit__product__input"
          />
        </div>
        <div className="edit__product__box">
          <label htmlFor="description" className="edit__product__label">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            className="edit__product__textarea"
          ></textarea>
        </div>
        <button className="edit__product__btn">Update</button>
      </form>
    </div>
  );
};

export default memo(EditProduct);
