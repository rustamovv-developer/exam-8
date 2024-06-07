import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/images/home-brends-1.png";
import img2 from "../../assets/images/home-brends-2.png";
import img3 from "../../assets/images/home-brends-3.png";
import "../../sass/components/_brands.scss";

const Brands = () => {
  return (
    <section className="brands" id="brands">
      <div className="container container__brands">
        <div className="context">
          <p className="context__text">Только проверенные бренды</p>
        </div>
        <div className="brands__wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="brands__res">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="brands-img" className="brands__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="brands-img" className="brands__img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(Brands);
