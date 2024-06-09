import React, { memo, useEffect, useState } from "react";
import { useGetProductQuery } from "../../context/productApi";
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
  const [limit, setLitim] = useState(8);

  const { data, isLoading } = useGetProductQuery();

  return (
    <main className="home" id="home">
      <HomeSwiper />
      <HomeCatalog />
      <HomeNornlight />
      <HomeProducts
        data={data?.slice(0, limit)}
        isLoading={isLoading}
        setLimit={setLitim}
      />
      <Brands />
      <Blog display={"flex"} />
      <HomeTexts />
    </main>
  );
};

export default memo(Home);
