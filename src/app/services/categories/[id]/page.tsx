import Pagination from "@/app/components/Pagination"
import { getCategories } from "@/app/components/Header"
import ServiceBlock from "@/app/components/ServiceBlock"

async function getServices(categoryID: string, searchParams: URLSearchParams) {
    const services = await fetch(
        `${process.env.YZI4D_HOST}/services/categories/${categoryID}?${searchParams.toString()}`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    ).then((res) => res.json())

    return services
}


export default async function Services(
    { params, searchParams }: { params: { id: string }, searchParams: { page: string } }
) {
    const urlSearchParams = new URLSearchParams(searchParams)
    const { data, paging } = await getServices(params.id, urlSearchParams)
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
                                                        <a className={"nav-link" + ((category.id == params.id) ? " active" : "")} href={"/services/" + category.id}>
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
                                    <ServiceBlock service={service} />
                                ))}
                            </div>

                            <Pagination url={"/services/" + params.id} paging={paging} urlSearchParams={urlSearchParams} />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}