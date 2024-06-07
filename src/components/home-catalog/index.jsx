import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import right from "../../assets/images/arrow-right.svg";
import rightGrey from "../../assets/images/arrow-right-grey.svg";
import img1 from "../../assets/images/home-catolog-1.png";
import img2 from "../../assets/images/home-catolog-2.png";
import img3 from "../../assets/images/home-catolog-3.png";
import img4 from "../../assets/images/home-catolog-4.png";
import img5 from "../../assets/images/home-catolog-5.png";
import img6 from "../../assets/images/home-catolog-6.png";

const HomeCatalog = () => {
  return (
    <section className="home__catolog" id="home__catalog">
      <div className="container">
        <div className="context">
          <p className="context__text">Каталог</p>
          <Link to="/catalogs" className="context__btn">
            Все каталог{" "}
            <img src={right} alt="arrow right" className="context__img" />
          </Link>
        </div>
        <div className="home__catolog__box">
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Люстры</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img1} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Светильники</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img2} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Бра</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img3} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Торшеры</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img4} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Настольные лампы</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img5} alt="catolog1" className="home__catolog__img" />
          </div>
          <div className="home__catolog__card">
            <div className="home__catolog__context">
              <p className="home__catolog__title">Споты</p>
              <button className="home__catolog__link">
                От 540₽{" "}
                <img
                  src={rightGrey}
                  alt="home__catolog__right"
                  className="home__catolog__right"
                />
              </button>
            </div>
            <img src={img6} alt="catolog1" className="home__catolog__img" />
          </div>
        </div>
        <div className="home__catolog__res">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Люстры</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img1} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Светильники</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img2} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Бра</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img3} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Торшеры</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img4} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Настольные лампы</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img5} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__catolog__card">
                <div className="home__catolog__context">
                  <p className="home__catolog__title">Споты</p>
                  <button className="home__catolog__link">
                    От 540₽{" "}
                    <img
                      src={rightGrey}
                      alt="home__catolog__right"
                      className="home__catolog__right"
                    />
                  </button>
                </div>
                <img src={img6} alt="catolog1" className="home__catolog__img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeCatalog);
