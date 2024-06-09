import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../../sass/components/_empty.scss";

const Empty = () => {
  return (
    <section className="empty" id="empty">
      <div className="container">
        <div className="empty__wrapper">
          <b className="empty__title">Empty</b>
          <p className="empty__text">Похоже, ничего не нашлось :(</p>
          <Link to="/" className="empty__btn">
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Empty);
