import Pagination from "../components/Pagination"

type SearchParams = {
    page: string,
    can_online: string,
    can_adult: string,
    can_child: string,
    search_query: string,
    specialization_id: string,
}


async function getSpecialists(searchParams: URLSearchParams) {
    const specialists = await fetch(
        `${process.env.YZI4D_HOST}/specialists?${searchParams.toString()}`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    ).then((res) => res.json())

    return specialists
}

async function getSpecializations() {
    const specializations = await fetch(
        `${process.env.YZI4D_HOST}/specialists/specializations`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    ).then((res) => res.json())

    return specializations
}


export default async function Specialists({ searchParams }: { searchParams: SearchParams }) {

    const urlSearchParams = new URLSearchParams(searchParams)
    const { data, paging } = await getSpecialists(urlSearchParams)
    const specializations = await getSpecializations()

    return (
        <main role="main" className="flex-shrink-0">
            <div className="overflow-hidden">
                <div className="container pt-4 pt-lg-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Главная</a></li>
                        <li className="breadcrumb-item active">Cпециалисты</li>
                    </ol>

                    <h1 className="mb-4">Cпециалисты</h1>

                    <div className="bg-white rounded-3 shadow p-3 mb-md-5 mb-4">
                        <form action="/specialists" method="get">
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="can_online" defaultValue="on" id="HasOnline" defaultChecked={(searchParams.can_online) ? true : false} />
                                <label className="form-check-label fs-8" htmlFor="HasOnline">Онлайн консультация</label>
                            </div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="can_adult" defaultValue="on" id="HasAdult" defaultChecked={(searchParams.can_adult) ? true : false} />
                                <label className="form-check-label fs-8" htmlFor="HasAdult">Принимает взрослых</label>
                            </div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="can_child" defaultValue="on" id="HasChild" defaultChecked={(searchParams.can_child) ? true : false} />
                                <label className="form-check-label fs-8" htmlFor="HasChild">Принимает детей</label>
                            </div>

                            <div className="row align-items-end g-3">
                                <div className="col-lg col-md-6">
                                    <input type="text" className="form-control form-control-sm" id="" name="search_query" defaultValue={(searchParams.search_query) ? searchParams.search_query : ""} placeholder="Фамилия или имя врача" />
                                </div>

                                <div className="col-lg col-md-6">
                                    <select className="form-select form-select-sm" id="" name="specialization_id" defaultValue={(searchParams.specialization_id) ? searchParams.specialization_id : ""}>
                                        <option value={0}>Все специальности</option>
                                        {specializations.map((specialization: any) => (
                                            <option value={specialization.id}>{specialization.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* <div className="col-lg col-md-6">
                                    <select className="form-select form-select-sm" id="" defaultValue="all">
                                        <option value={"all"}>Все города</option>
                                        <option>Пятигорск</option>
                                        <option>Ессентуки</option>
                                        <option>Минеральные Воды</option>
                                    </select>
                                </div> */}

                                <div className="col-lg-auto col-md-6">
                                    <button className="btn btn-danger btn-sm w-100 text-nowrap" type="submit">Найти врача</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row gy-4 gy-md-5">
                        {data.map((specialist: any) => (
                            <div className="col-lg-3 col-md-4">
                                <div className="doctor-card d-flex h-100 position-relative">
                                    <div className="ratio ratio-5x6 overflow-hidden rounded-3 flex-shrink-0">
                                        {
                                            (specialist.photo)
                                                ? <div className="doctor-card-img" style={{ backgroundImage: "url('" + specialist.photo + "')" }}></div>
                                                : <div className="doctor-card-img" style={{ backgroundImage: "url('/img/doctor-no-photo.jpg')" }}></div>
                                        }
                                    </div>

                                    <div>
                                        <a href={"/specialists/" + specialist.id} className="doctor-card-title stretched-link d-block link-secondary fw-semibold">
                                            {specialist.surname}
                                            <br />
                                            {specialist.name} {specialist.patronymic}
                                        </a>

                                        <div className="doctor-card-job text-muted mb-1">
                                            {specialist.specializations.map(
                                                (spec: any) => (spec.name)).join(" / ")}
                                        </div>
                                        <div className="doctor-card-exp text-muted mb-1">Стаж {specialist.experience}</div>

                                        <div className="d-flex flex-wrap pt-2">
                                            {specialist.titles.map((title: any) => (
                                                <div className="doctor-card-achieve bg-danger text-white px-1">{title.name}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div >

                    <Pagination url="/specialists" paging={paging} urlSearchParams={urlSearchParams} />
                </div >
            </div >
        </main >
    )
}