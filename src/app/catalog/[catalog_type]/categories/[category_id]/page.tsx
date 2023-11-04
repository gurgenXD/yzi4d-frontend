import Pagination from "@/app/components/Pagination"
import ServiceBlock from "@/app/components/ServiceBlock"
import NotFound from "@/app/not-found"
import SideBar from "@/app/components/SideBar"

async function getServices(categoryID: string, catalog_type: string, searchParams: URLSearchParams) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories/${categoryID}?${searchParams.toString()}`, { cache: 'no-store' },
    )
    const errorCode = res.ok ? false : res.status
    return { errorCode, services: await res.json() }
}

export async function generateMetadata(
    { params }: { params: { catalog_type: string, category_id: string } }
) {
    const { errorCode, services: { data, paging } } = await getServices(
        params.category_id, params.catalog_type, new URLSearchParams({})
    )
    if (errorCode) { return <NotFound /> }

    return {
        title: `${data[0].category_name} - Поликлиника УЗИ 4Д`,
    }
}


export default async function Services(
    { params, searchParams }: { params: { catalog_type: string, category_id: string }, searchParams: { page: string } }
) {
    const urlSearchParams = new URLSearchParams(searchParams)

    const { errorCode, services: { data, paging } } = await getServices(
        params.category_id, params.catalog_type, urlSearchParams
    )
    if (errorCode) { return <NotFound /> }

    return (
        <main role="main" className="flex-shrink-0">
            <div className="overflow-hidden">
                <div className="container pt-4 pt-lg-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Главная</a></li>
                        <li className="breadcrumb-item">{(params.catalog_type == "services") ? "Услуги" : "Анализы"}</li>
                        <li className="breadcrumb-item active">{data[0].category_name}</li>
                    </ol>

                    <div className="d-flex flex-wrap align-items-center mb-2">
                        <h1 className="mb-3 pe-4 me-auto">{(params.catalog_type == "services") ? "Услуги" : "Анализы"}</h1>

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
                        <SideBar category_id={params.category_id} catalog_type={params.catalog_type} />

                        <div className="col-xxl-9 col-xl-8">
                            <div>
                                {data.map((service: any) => (
                                    <ServiceBlock key={service.id} service={service} catalog_type={params.catalog_type} />
                                ))}
                            </div>

                            <Pagination url={"/catalog/" + params.catalog_type + "/categories/" + params.category_id} paging={paging} urlSearchParams={urlSearchParams} />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}