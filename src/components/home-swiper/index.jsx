import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../../assets/images/home-header.png";

import { Autoplay, Pagination, A11y } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <section className="home__swiper" id="home__swiper">
      <div className="container-fluid">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, A11y]}
        >
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home__slidebar">
            <div className="container">
              <div className="home__slide">
                <div className="home__slide__card">
                  <h2 className="home__slide__title">
                    Скидка 15% <br /> на все подвесные светильники
                  </h2>
                  <button className="home__slide__btn"> до 5 февраля</button>
                </div>
                <img
                  src={img}
                  alt="home-slide-img"
                  className="home__slide__img"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default memo(HomeSwiper);
