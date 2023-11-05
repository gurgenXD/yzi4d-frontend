'use client'

import { getMainCategories } from "@/requests/client"
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"


export default function ServicesMain() {
    const { categories, isLoading, isError } = getMainCategories("main")

    if (isLoading) return <Placeholder />
    if (isError) return <PlaceholderError />

    return (
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
    )
}
