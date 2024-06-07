import React, { memo, useEffect } from "react";
import HomeSwiper from "../../components/home-swiper";
import HomeCatalog from "../../components/home-catalog";
import HomeNornlight from "../../components/home-nornlight";
import HomeProducts from "../../components/home-products";
import Brands from "../../components/brands";
import Blog from "../../components/blog";
import HomeTexts from "../../components/home-texts";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home" id="home">
      <HomeSwiper />
      <HomeCatalog />
      <HomeNornlight />
      <HomeProducts />
      <Brands />
      <Blog display={"flex"} />
      <HomeTexts />
    </main>
  );
};

export default memo(Home);
