import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import right from "../../assets/images/arrow-right.svg";
import img1 from "../../assets/images/blog-1.png";
import img2 from "../../assets/images/blog-2.png";
import img3 from "../../assets/images/blog-3.png";
import arrowTop from "../../assets/images/arrow-top.svg";
import "../../sass/components/_blog.scss";

const Blog = ({ display }) => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div style={{ display: display }} className="context">
          <p className="context__text">Блог</p>
          <Link to="/blog" className="context__btn">
            Перейти в блог{" "}
            <img src={right} alt="arrow right" className="context__img" />
          </Link>
        </div>
        <div className="blog__wrapper">
          <div className="blog__card">
            <img src={img1} alt="blog-house" className="blog__img" />
            <div className="blog__context">
              <b className="blog__title">Как правильно освещать дом снаружи?</b>
              <img src={arrowTop} alt="arrow-top-icon" className="blog__top" />
            </div>
            <p className="blog__text">01.01.2024</p>
          </div>
          <div className="blog__card">
            <img src={img2} alt="blog-house" className="blog__img" />
            <div className="blog__context">
              <b className="blog__title">Как правильно освещать дом снаружи?</b>
              <img src={arrowTop} alt="arrow-top-icon" className="blog__top" />
            </div>
            <p className="blog__text">01.01.2024</p>
          </div>
          <div className="blog__card">
            <img src={img3} alt="blog-house" className="blog__img" />
            <div className="blog__context">
              <b className="blog__title">Как правильно освещать дом снаружи?</b>
              <img src={arrowTop} alt="arrow-top-icon" className="blog__top" />
            </div>
            <p className="blog__text">01.01.2024</p>
          </div>
        </div>
        <div className="blog__res">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectFade, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="blog__swip">
              <div className="blog__card">
                <img src={img1} alt="blog-house" className="blog__img" />
                <div className="blog__context">
                  <b className="blog__title">
                    Как правильно освещать дом снаружи?
                  </b>
                  <img
                    src={arrowTop}
                    alt="arrow-top-icon"
                    className="blog__top"
                  />
                </div>
                <p className="blog__text">01.01.2024</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="blog__swip">
              <div className="blog__card">
                <img src={img2} alt="blog-house" className="blog__img" />
                <div className="blog__context">
                  <b className="blog__title">
                    Как правильно освещать дом снаружи?
                  </b>
                  <img
                    src={arrowTop}
                    alt="arrow-top-icon"
                    className="blog__top"
                  />
                </div>
                <p className="blog__text">01.01.2024</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="blog__swip">
              <div className="blog__card">
                <img src={img3} alt="blog-house" className="blog__img" />
                <div className="blog__context">
                  <b className="blog__title">
                    Как правильно освещать дом снаружи?
                  </b>
                  <img
                    src={arrowTop}
                    alt="arrow-top-icon"
                    className="blog__top"
                  />
                </div>
                <p className="blog__text">01.01.2024</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
