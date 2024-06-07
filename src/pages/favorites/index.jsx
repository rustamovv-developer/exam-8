import React, { memo, useEffect } from "react";
import FavoritesWrapper from "../../components/favorites-wrapper";
import "../../sass/pages/favorites.scss";

const Favorites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="favorites" id="favorites">
      <div className="container">
        <b className="title">Избранное</b>
        <FavoritesWrapper />
      </div>
    </main>
  );
};

export default memo(Favorites);
