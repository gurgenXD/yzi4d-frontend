'use client'

import { getCategories } from "@/app/components/Header"
import { useState, useEffect } from 'react'


export default function ServicesMain() {
    const [categories, setCategories] = useState([{ "id": 1, "name": "Загрузка...", "services": [] }])

    useEffect(() => {
        (async () => {
            setCategories(await getCategories("main"))
        })()
    }, [])

    return (
        <section className="py-lg-6 py-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-baseline justify-content-between mb-lg-3">
                    <h2 className="mb-2 me-5">Услуги</h2>

                    <a href="/catalog/services/categories/21" className="link-more spaced-link fw-semibold d-flex align-items-center flex-nowrap mb-2">
                        Все услуги

                        <span className="icon ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.13 277.34">
                                <path
                                    d="M289.3,85.87L212.8,9.37c-12.5-12.49-32.76-12.49-45.26,.01s-12.49,32.76,.01,45.26h0l52.03,52.03H32C14.33,106.67,0,121,0,138.67s14.33,32,32,32H219.58l-52.03,52.03c-12.5,12.49-12.51,32.76-.01,45.26,12.49,12.5,32.76,12.51,45.26,.01l76.5-76.5c29.1-29.18,29.1-76.42,0-105.6Z" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="row gx-xl-5">
                    <div className="col-lg-4 col-xl-3">
                        <div className="nav-mobile-scroll bg-lg-white lg-shadow rounded-3 px-lg-4 py-lg-3 mb-4">
                            <div className="sidebar">
                                <ul className="nav" id="services-tab" role="tablist" aria-orientation="vertical">
                                    {categories.map((category: any) => (
                                        <li className="nav-item" key={category.id}>
                                            <a
                                                className={"nav-link" + (category.id == categories[0].id ? " active" : "")}
                                                href="#"
                                                id={"services-" + category.id + "-tab"}
                                                data-bs-toggle="pill"
                                                data-bs-target={"#services-" + category.id}
                                                role="tab"
                                                aria-controls={"services-" + category.id}
                                                aria-selected="true">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="tab-content" id="services-tabContent">
                            {categories.map((category: any) => (
                                <div key={category.id} className={"tab-pane fade" + (category.id == categories[0].id ? " show active" : "")} id={"services-" + category.id} role="tabpanel" aria-labelledby={"services-" + category.id + "-tab"} tabIndex={0}>
                                    <div className="row g-xxl-4 g-3">
                                        {category.services.map((service: any) => (
                                            <div key={service.id} className="col-xl-4 col-md-6">
                                                <div
                                                    className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                                    style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                                    <a href={"/catalog/services/categories/" + category.id + "/items/" + service.id} className="card-title stretched-link d-block text-secondary fw-bold mb-2">{service.name}</a>

                                                    <p className="card-text mb-3">{service.short_description}</p>
                                                    <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от {service.price.toLocaleString("ru")} ₽</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div >

            </div >
        </section >
    )
}
