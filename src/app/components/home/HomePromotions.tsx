"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonPromotion from "@/app/components/common/CommonPromotion";
import { useGetMainPromotions } from "@/requests/client";

export default function HomePromotions() {
  const { promotions, isLoading, isError } = useGetMainPromotions();

  if (isLoading) return <PlaceholderLoading height={480} />;
  if (isError) return <PlaceholderError height={480} />;

  return (
    <div className="position-relative main-slider">
      <div className="main-slider-control d-none d-lg-block">
        <div className="main-slider-control-wrap d-flex justify-content-end align-items-center px-3 py-2">
          <div className="swiper-pagination me-3"></div>

          <div className="swiper-button-prev me-2 sbp-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
              <path d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
            </svg>
          </div>

          <div className="swiper-button-next sbn-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
              <path d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
            </svg>
          </div>
        </div>
      </div>

      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1.03}
        spaceBetween={16}
        observer={true}
        autoHeight={true}
        autoplay={{
          delay: 15000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".sbp-1",
          nextEl: ".sbn-1",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        breakpoints={{
          576: {
            slidesPerView: 1.001,
            spaceBetween: 16,
          },

          992: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <div className="swiper-wrapper">
          {promotions.map((promotion: any) => (
            <SwiperSlide key={promotion.id} className="swiper-slide">
              <CommonPromotion promotion={promotion} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
