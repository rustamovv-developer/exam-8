import React, { memo, useEffect, useState } from "react";
import { useCreateProductMutation } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { toast } from "react-toastify";
import "../../sass/pages/product-create.scss";

const ProductCreate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [createProduct, { data, error, isError }] = useCreateProductMutation();

  const { data: categories } = useGetCategoryQuery();
  let categoryItem = categories?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.message ? error?.message : "size of photo is very high"
      );
    }
  }, [isError]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let product = {
      title,
      price: +price,
      oldPrice: +oldPrice,
      rating: +rating,
      category,
      image,
      description,
    };

    createProduct(product);

    setTitle("");
    setPrice("");
    setOldPrice("");
    setRating("");
    setCategory("");
    setImage("");
    setDescription("");
  };

  return (
    <main className="product__create" id="product__create">
      <form
        onSubmit={handleCreateProduct}
        action=""
        className="product__create__wrapper"
      >
        <b className="product__create__title">Create product</b>
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
        <div className="product__create__box">
          <label htmlFor="price" className="product__create__label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            type="text"
            className="product__create__input"
          />
        </div>
        <div className="product__create__box">
          <label htmlFor="oldprice" className="product__create__label">
            Old price
          </label>
          <input
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            id="oldprice"
            type="text"
            className="product__create__input"
          />
        </div>
        <div className="product__create__box">
          <label htmlFor="category" className="product__create__label">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            className="product__create__input"
          >
            <option value="Select">Select</option>
            {categoryItem}
          </select>
        </div>
        <div className="product__create__box">
          <label htmlFor="rating" className="product__create__label">
            Rating
          </label>
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
            type="text"
            className="product__create__input"
          />
        </div>
        <div className="product__create__box">
          <label htmlFor="image" className="product__create__label">
            Image url
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="image"
            type="text"
            className="product__create__input"
          />
        </div>
        <div className="product__create__box">
          <label htmlFor="description" className="product__create__label">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            className="product__create__textarea"
          ></textarea>
        </div>
        <button className="product__create__btn">Create</button>
      </form>
    </main>
  );
};

export default memo(ProductCreate);
