'use client'

import { getShuffledSpecialists } from "@/requests"
import SpecialistBlock from "@/app/components/common/SpecialistBlock"
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function SpecialistSlider() {
    const { specialists, isLoading, isError } = getShuffledSpecialists()

    if (isError) return (
        <p className="placeholder-glow">
            <span
                className="col-12 placeholder rounded-3"
                style={{ height: 200, backgroundColor: "#e1f4fc", textAlign: "center", paddingTop: 90 }}>
                Ошибка при загрузке данных
            </span>
        </p>
    )

    if (isLoading) return (
        <p className="placeholder-glow">
            <span
                className="col-12 placeholder rounded-3"
                style={{ height: 200, backgroundColor: "#e1f4fc" }}>
            </span>
        </p>
    )

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
                nextEl: ".sbn-2"
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
                        <SpecialistBlock specialist={specialist} />
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    )
}
