"use client";

import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import YandexImg from "@/assets/yandex.svg";
import DoctuImg from "@/assets/doctu.svg";
import NaPopravkuImg from "@/assets/na-popravku.svg";
import TwoGisImg from "@/assets/2gis.svg";
import ProdoctorovImg from "@/assets/prodoctorov.svg";

export default function HomeRates() {
  return (
    <section className="rates-slider overflow-hidden py-lg-6 py-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center mb-4">
          <h2 className="mb-0">Рейтинги независимых сервисов</h2>

          <div className="d-none d-lg-flex ms-auto">
            <div className="swiper-button-prev me-2 sbp-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                <path d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
              </svg>
            </div>

            <div className="swiper-button-next sbn-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                <path d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <Swiper
            className="swiper p-lg-3 m-lg-n3"
            modules={[Navigation]}
            slidesPerView={1.25}
            spaceBetween={16}
            observer={true}
            navigation={{
              prevEl: ".sbp-3",
              nextEl: ".sbn-3",
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.75,
                spaceBetween: 16,
              },

              768: {
                slidesPerView: 2.25,
                spaceBetween: 16,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1400: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                  <div className="rate-item-img">
                    <Image src={YandexImg} alt="Яндекс" />
                  </div>

                  <div className="rate-item-score fw-bold text-danger me-3">4.8</div>

                  <div>
                    <a
                      href="https://yandex.ru/maps/org/4d_poliklinika/1154946954/reviews/?ll=43.070356%2C44.048861&z=15"
                      target="_blank"
                      className="rate-item-title stretched-link link-secondary d-block fw-bold"
                    >
                      Яндекс
                    </a>

                    <div className="rate-item-count text-muted">881 отзыв</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                  <div className="rate-item-img">
                    <Image src={TwoGisImg} alt="2GIS" />
                  </div>

                  <div className="rate-item-score fw-bold text-danger me-3">4.4</div>

                  <div>
                    <a
                      href="https://2gis.ru/pyatigorsk/inside/12526272118936823/firm/12526164744605496/tab/reviews?m=43.06884%2C44.048142%2F19.41"
                      target="_blank"
                      className="rate-item-title stretched-link link-secondary d-block fw-bold"
                    >
                      2ГИС
                    </a>

                    <div className="rate-item-count text-muted">162 отзыва</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                  <div className="rate-item-img">
                    <Image src={ProdoctorovImg} alt="ПроДокторов" />
                  </div>

                  <div className="rate-item-score fw-bold text-danger me-3">4.2</div>

                  <div>
                    <a
                      href="https://prodoctorov.ru/pyatigorsk/lpu/24199-klinika-innovacionnoy-mediciny-4d/#rating"
                      target="_blank"
                      className="rate-item-title stretched-link link-secondary d-block fw-bold"
                    >
                      ПроДокторов
                    </a>

                    <div className="rate-item-count text-muted">291 отзыв</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                  <div className="rate-item-img">
                    <Image src={DoctuImg} alt="ДокТу" />
                  </div>

                  <div className="rate-item-score fw-bold text-danger me-3">4.7</div>

                  <div>
                    <a
                      href="https://doctu.ru/pyatigorsk/clinic/poliklinika-4d-1/reviews"
                      target="_blank"
                      className="rate-item-title stretched-link link-secondary d-block fw-bold"
                    >
                      Докту
                    </a>

                    <div className="rate-item-count text-muted">110 отзывов</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                  <div className="rate-item-img">
                    <Image src={NaPopravkuImg} alt="На поправку" />
                  </div>

                  <div className="rate-item-score fw-bold text-danger me-3">4.2</div>

                  <div>
                    <a
                      href="https://napopravku.ru/pyatigorsk/clinics/poliklinika-4d/"
                      target="_blank"
                      className="rate-item-title stretched-link link-secondary d-block fw-bold"
                    >
                      НаПоправку
                    </a>

                    <div className="rate-item-count text-muted">28 отзывов</div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
