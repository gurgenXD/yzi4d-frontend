import Pagination from "../../components/Pagination"
import { getCategories } from "../../components/Header"

async function getServices(categoryID: string, searchParams: URLSearchParams) {
    const services = await fetch(
        `${process.env.YZI4D_HOST}/services/categories/${categoryID}?${searchParams.toString()}`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    ).then((res) => res.json())

    return services
}


export default async function Services(
    { params, searchParams }: { params: { category_id: string }, searchParams: { page: string } }
) {
    const urlSearchParams = new URLSearchParams(searchParams)
    const { data, paging } = await getServices(params.category_id, urlSearchParams)
    const categories = await getCategories()

    return (
        <main role="main" className="flex-shrink-0">
            <div className="overflow-hidden">
                <div className="container pt-4 pt-lg-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Главная</a></li>
                        <li className="breadcrumb-item active">Услуги</li>
                    </ol>

                    <div className="d-flex flex-wrap align-items-center mb-2">
                        <h1 className="mb-3 pe-4 me-auto">Услуги</h1>

                        <button
                            className="d-xl-none btn btn-outline-secondary btn-sm btn-icon text-nowrap mb-3"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasFilters"
                            aria-controls="offcanvasFilters">
                            <span className="icon me-2">
                                {/* <?xml version="1.0" encoding="UTF-8"?> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 356.17">
                                    <path
                                        d="M489.74,155.83H22.26c-12.29,0-22.26,9.97-22.26,22.26s9.97,22.26,22.26,22.26H489.74c12.29,0,22.26-9.97,22.26-22.26,0-12.29-9.97-22.26-22.26-22.26Z" />
                                    <path d="M22.26,44.52H489.74c12.29,0,22.26-9.97,22.26-22.26S502.03,0,489.74,0H22.26C9.97,0,0,9.97,0,22.26s9.97,22.26,22.26,22.26Z" />
                                    <path
                                        d="M489.74,311.65H22.26c-12.29,0-22.26,9.97-22.26,22.26s9.97,22.26,22.26,22.26H489.74c12.29,0,22.26-9.97,22.26-22.26,0-12.29-9.97-22.26-22.26-22.26Z" />
                                </svg>
                            </span>

                            Каталог услуг
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-xxl-3 col-xl-4">
                            <div className="offcanvas-xl offcanvas-start bg-white" tabIndex={-1} id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
                                <div className="offcanvas-header pb-3">
                                    <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Услуги</h5>

                                    <button
                                        type="button"
                                        className="btn-close ms-auto"
                                        data-bs-dismiss="offcanvas"
                                        data-bs-target="#offcanvasFilters"
                                        aria-label="Close"></button>
                                </div>

                                <div className="offcanvas-body pt-0">
                                    <div className="bg-xl-white xl-shadow rounded-3 w-100 px-0 px-xl-4 py-0 py-xl-3">
                                        <nav className="sidebar">
                                            <ul className="nav">
                                                {categories.map((category: any) => (
                                                    <li key={category.id} className="nav-item has-submenu">
                                                        <a className={"nav-link" + ((category.id == params.category_id) ? " active" : "")} href={"/services/" + category.id}>
                                                            {category.name}

                                                            {/* <span className="caret">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                                                    <path
                                                                        d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                                                </svg>
                                                            </span> */}
                                                        </a>

                                                        {/* <ul className="submenu collapse">
                                                            <li><a className="nav-link" href="services-category.html">УЗИ при беременности</a></li>
                                                            <li><a className="nav-link" href="services-category.html">УЗИ предстательной железы</a></li>
                                                            <li><a className="nav-link" href="services-category.html">УЗИ в педиатрии</a></li>
                                                            <li><a className="nav-link" href="services-category.html">УЗИ сосудов</a></li>
                                                            <li><a className="nav-link" href="services-category.html">УЗИ мочевыделительной системы</a></li>
                                                            <li><a className="nav-link" href="services-category.html">УЗИ щитовидной железы</a></li>
                                                        </ul> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-9 col-xl-8">
                            <div>
                                {data.map((service: any) => (
                                    <div className="service-item position-relative">
                                        <div className="row gx-lg-6">
                                            <div className="col-md mb-3 my-md-auto">
                                                <a href={"/services/" + params.category_id + "/" + service.id} className="service-item-title stretched-link link-secondary d-block fw-bold">
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
                                ))}
                            </div>

                            <Pagination url={"/services/" + params.category_id} paging={paging} urlSearchParams={new URLSearchParams({})} />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}