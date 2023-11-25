"use client";

import { useGetMainSpecialists } from "@/requests/client";
import CommonSpecialist from "@/app/components/common/CommonSpecialist";
import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSpecialists() {
  const { specialists, isLoading, isError } = useGetMainSpecialists();

  if (isLoading) return <PlaceholderLoading height={300} />;
  if (isError) return <PlaceholderError height={300} />;

  return (
    <Swiper
      className="swiper"
      modules={[Navigation]}
      slidesPerView={1.25}
      spaceBetween={16}
      observer={true}
      autoHeight={true}
      navigation={{
        prevEl: ".sbp-2",
        nextEl: ".sbn-2",
      }}
      breakpoints={{
        576: {
          slidesPerView: 2.001,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3.001,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      <div className="swiper-wrapper">
        {specialists.map((specialist: any) => (
          <SwiperSlide key={specialist.id} className="swiper-slide">
            <CommonSpecialist specialist={specialist} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
