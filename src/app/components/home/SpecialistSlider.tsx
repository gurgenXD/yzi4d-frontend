'use client'

import { getMainSpecialists } from "@/requests/client"
import SpecialistBlock from "@/app/components/common/SpecialistBlock"
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function SpecialistSlider() {
    const { specialists, isLoading, isError } = getMainSpecialists()

    if (isLoading) return <Placeholder />
    if (isError) return <PlaceholderError />

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
