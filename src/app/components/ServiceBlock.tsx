export default function ServiceBlock({ service }: any) {
    return (
        <div className="service-item position-relative">
            <div className="row gx-lg-6">
                <div className="col-md mb-3 my-md-auto">
                    <a href={"/services/" + service.id} className="service-item-title stretched-link link-secondary d-block fw-bold">
                        {service.name}
                    </a>

                    <p className="service-item-text text-muted pt-2 pt-md-1 mb-0">
                        {service.short_description}
                    </p>

                    {/* <div className="service-item-badge d-inline-block bg-danger text-white mt-2 px-1">Скидка 10%</div> */}
                </div>

                <div className="col-12 col-md-auto">
                    <div className="service-item-price h-100 d-flex flex-wrap flex-md-column align-items-end">
                        <div className="pe-3 pe-md-0 pb-3 mb-md-auto me-auto me-md-0">
                            <div className="current-price text-secondary fw-black lh-1">{service.price.toLocaleString()} ₽</div>
                            {/* <div className="old-price text-decoration-line-through text-disabled lh-1 mb-1">4 700 ₽</div>
                        <div className="current-price text-danger fw-black lh-1">4 000 ₽</div> */}
                        </div>

                        {/* <div className="service-item-btns d-flex align-items-center mb-3 mb-md-0">
                        <div className="border-end pe-2 me-2">
                            <button className="btn btn-to-calc spaced-link">
                                <span className="icon">
                                    <?xml version="1.0" encoding="UTF-8"?>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.65 16">
                                        <path
                                            d="M23.85,0H11.92c-.48,0-.8,.32-.8,.8V15.2c0,.48,.32,.8,.8,.8h11.93c.48,0,.8-.32,.8-.8V.8c0-.48-.32-.8-.8-.8ZM15.1,14.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm3.98,6.4h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm3.98,6.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2H12.72V1.6h10.34v3.2Z" />
                                        <path
                                            className="cls-1"
                                            d="M3.23,4.8h1.05c.23,0,.43,.19,.43,.42v2.41h2.39c.23,0,.42,.2,.42,.43v1.05c0,.24-.19,.43-.42,.43h-2.39v2.4c0,.24-.19,.43-.43,.43h-1.05c-.23,0-.42-.19-.42-.43v-2.4H.42C.19,9.54,0,9.34,0,9.11v-1.05C0,7.83,.2,7.63,.42,7.63H2.81v-2.41c0-.23,.19-.42,.42-.42h0Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div>
                            <a href="#" className="spaced-link fw-semibold">Записаться</a>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
