import React, { memo } from "react";
import HomeSwiper from "../../components/home-swiper";
import HomeCatalog from "../../components/home-catalog";
import HomeNornlight from "../../components/home-nornlight";
import HomeProducts from "../../components/home-products";
import Brands from "../../components/brands";
import Blog from "../../components/blog";
import HomeTexts from "../../components/home-texts";

const Home = () => {
  return (
    <main className="home" id="home">
      <HomeSwiper />
      <HomeCatalog />
      <HomeNornlight />
      <HomeProducts />
      <Brands />
      <Blog />
      <HomeTexts />
    </main>
  );
};

export default memo(Home);
