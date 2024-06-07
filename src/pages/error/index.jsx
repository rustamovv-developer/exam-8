import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../sass/pages/error.scss";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="error" id="error">
      <div className="container">
        <div className="error__wrapper">
          <b className="error__title">404</b>
          <p className="error__text">Похоже, ничего не нашлось :(</p>
          <Link to="/" className="error__btn">
            {" "}
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
};

export default memo(Error);
