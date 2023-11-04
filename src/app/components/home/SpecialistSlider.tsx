'use client'

import { getSpecialists } from "@/app/specialists/page"
import SpecialistBlock from "@/app/components/common/SpecialistBlock"
import { useState, useEffect } from 'react'


export default function SpecialistSlider() {
    const [specialists, setSpecialists] = useState({ "data": [] })

    useEffect(() => {
        (async () => {
            const urlSearchParams = new URLSearchParams("for_main=true")
            setSpecialists(await getSpecialists(urlSearchParams))
        })()
    }, [])

    return (
        <section className="doctors-slider py-lg-6 py-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center mb-3">
                    <div className="d-flex flex-wrap align-items-baseline flex-grow-1">
                        <h2 className="mb-2 me-auto me-lg-5">Наши специалисты</h2>

                        <a href="/specialists" className="link-more spaced-link fw-semibold d-flex align-items-center flex-nowrap mb-2">
                            Все специалисты

                            <span className="icon ms-2">
                                {/* <?xml version="1.0" encoding="UTF-8"?> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.13 277.34">
                                    <path
                                        d="M289.3,85.87L212.8,9.37c-12.5-12.49-32.76-12.49-45.26,.01s-12.49,32.76,.01,45.26h0l52.03,52.03H32C14.33,106.67,0,121,0,138.67s14.33,32,32,32H219.58l-52.03,52.03c-12.5,12.49-12.51,32.76-.01,45.26,12.49,12.5,32.76,12.51,45.26,.01l76.5-76.5c29.1-29.18,29.1-76.42,0-105.6Z" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="d-none d-lg-flex ms-auto">
                        <div className="swiper-button-prev me-2 sbp-2">
                            {/* <?xml version="1.0" encoding="UTF-8"?> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                <path
                                    d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                            </svg>
                        </div>

                        <div className="swiper-button-next sbn-2">
                            {/* <?xml version="1.0" encoding="UTF-8"?> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                <path
                                    d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="position-relative">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {specialists.data.map((specialist: any) => (
                                <div key={specialist.id} className="swiper-slide">
                                    <SpecialistBlock specialist={specialist} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
