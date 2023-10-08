import ServiceBlock from "@/app/components/ServiceBlock"
import Pagination from "@/app/components/Pagination"
import NotFound from "@/app/not-found"

async function getSpecialist(id: string) {
    const res = await fetch(
        `${process.env.YZI4D_HOST}/specialists/${id}`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    )

    const errorCodeSpec = res.ok ? false : res.status
    return { errorCodeSpec, specialist: await res.json() }
}

async function getSpecialistServices(id: string, searchParams: URLSearchParams) {
    const res = await fetch(
        `${process.env.YZI4D_HOST}/specialists/${id}/services?${searchParams.toString()}`,
        { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
    )

    const errorCodeServ = res.ok ? false : res.status
    return { errorCodeServ, services: await res.json() }
}



export default async function Specialist(
    { params, searchParams }: { params: { id: string }, searchParams: { page: string } }
) {

    const urlSearchParams = new URLSearchParams(searchParams)

    const { errorCodeSpec, specialist } = await getSpecialist(params.id)
    if (errorCodeSpec) { return <NotFound /> }

    const { errorCodeServ, services: { data, paging } } = await getSpecialistServices(params.id, urlSearchParams)
    if (errorCodeServ) { return <NotFound /> }

    return <main role="main" className="flex-shrink-0">
        <div className="overflow-hidden">
            <div className="container pt-4 pt-lg-5 pb-md-7 pb-6">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Главная</a></li>
                    <li className="breadcrumb-item"><a href="/specialists">Cпециалисты</a></li>
                    <li className="breadcrumb-item active">{specialist.surname} {specialist.name} {specialist.patronymic}</li>
                </ol>

                <div className="doc-hero position-relative">
                    <div className="row gy-4 gy-md-0">
                        <div className="col-md-4">
                            {
                                (specialist.photo)
                                    ? <div className="doc-hero-img rounded-3 ratio ratio-5x6" style={{ backgroundImage: "url('" + specialist.photo + "')" }}></div>
                                    : <div className="doc-hero-img rounded-3 ratio ratio-5x6" style={{ backgroundImage: "url('/img/doctor-no-photo.jpg')" }}></div>
                            }
                        </div>

                        <div className="col-md-8">
                            <h1 className="doc-hero-name fw-extrabold mb-3">
                                {specialist.surname} {specialist.name}
                                <span className="doc-hero-surname d-block text-uppercase fw-black">{specialist.patronymic}</span>
                            </h1>

                            <div className="row g-2 g-lg-3 mb-4">
                                {specialist.specializations.map((specialization: any) => (
                                    <div className="col-auto">
                                        <div className="doc-hero-badge bg-light-blue text-secondary rounded-pill">{specialization.name}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <div className="fw-semibold mb-2">Стаж: {specialist.experience}</div>

                                <div className="row align-items-start g-2 mb-2">
                                    {specialist.titles.map((title: any) => (
                                        <div className="col-auto">
                                            <div className="bg-danger text-white fs-10 px-1">{title.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="doc-hero-text">
                                {specialist.description.split("\n").map((row: string) => (
                                    <div>{row}<br /></div>
                                ))}
                            </div>
                            <br />

                            {(specialist.can_child) ?
                                <div className="d-flex align-items-start pt-2 mb-3">
                                    <div className="child-icon me-2">
                                        <img src="/img/child-icon.svg" alt="" />
                                    </div>
                                    <p className="text-secondary mb-0">
                                        Возможен приём детей. Уточните в колл-центре:
                                        <a href="tel:+79283012171" className="fw-semibold text-nowrap"> +7 (928) 301-21-71</a>
                                    </p>
                                </div>
                                : null
                            }

                            {/* <div className="row g-3 align-items-center pt-3">
                                <div className="col-sm-auto">
                                    <a href="#" className="btn btn-danger w-100">Записаться к врачу</a>
                                </div>

                                <div className="col-sm-auto">
                                    <a href="#ConsultModal" data-bs-toggle="modal" className="btn btn-primary w-100">Онлайн консультация</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="cards-slider pb-5">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center mb-4">
                        <h2 className="fs-3 mb-0">Специальные предложения</h2>

                        <div className="d-none d-lg-flex ms-auto">
                            <div className="swiper-button-prev me-2 sbp-4">
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                    <path
                                        d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                                </svg>
                            </div>

                            <div className="swiper-button-next sbn-4">
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                    <path
                                        d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative">
                        <div className="swiper doc-sales-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                                        <a href="#" className="card-title stretched-link d-block text-danger fw-bold mb-2">Блефаропластика под ключ</a>

                                        <p className="card-text mb-3">Верните красоту своим глазам</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 40 000 ₽</div>

                                        <div className="sale-badge"></div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                                        <a href="#" className="card-title stretched-link d-block text-danger fw-bold mb-2">Консультация в октябре</a>

                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">Бесплатно</div>

                                        <div className="sale-badge"></div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                                        <a href="#" className="card-title stretched-link d-block text-danger fw-bold mb-2">Скидка 10% на повторный приём</a>

                                        <div className="sale-badge"></div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                                        <a href="#" className="card-title stretched-link d-block text-danger fw-bold mb-2">Первый приём</a>

                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">4 000 ₽</div>

                                        <div className="sale-badge"></div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                                        <a href="#" className="card-title stretched-link d-block text-danger fw-bold mb-2">Скидка пенсионерам 10%</a>
                                        <p className="card-text mb-3">При записи предъявите пенсионное удостоверение</p>

                                        <div className="sale-badge"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="pb-md-6 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3">
                            <div className="nav-mobile-scroll bg-lg-white lg-shadow rounded-3 px-lg-4 py-lg-3 mb-3">
                                <div className="sidebar">
                                    <ul className="nav" id="DocInfo-tab" role="tablist" aria-orientation="vertical">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                href="#"
                                                id="DocInfo-1-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#DocInfo-1"
                                                role="tab"
                                                aria-controls="DocInfo-1"
                                                aria-selected="true">
                                                Образование
                                            </a>
                                        </li>

                                        {/* <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                id="DocInfo-2-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#DocInfo-2"
                                                role="tab"
                                                aria-controls="DocInfo-2"
                                                aria-selected="true">
                                                Деятельность
                                            </a>
                                        </li> */}

                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                id="DocInfo-3-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#DocInfo-3"
                                                role="tab"
                                                aria-controls="DocInfo-3"
                                                aria-selected="true">
                                                Сертификаты
                                            </a>
                                        </li>

                                        {/* <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                id="DocInfo-4-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#DocInfo-4"
                                                role="tab"
                                                aria-controls="DocInfo-4"
                                                aria-selected="true">
                                                Отзывы
                                            </a>
                                        </li> */}

                                        {/* <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                id="DocInfo-5-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#DocInfo-5"
                                                role="tab"
                                                aria-controls="DocInfo-5"
                                                aria-selected="true">
                                                Фото и видео
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div className="tab-content bg-white rounded-3 shadow p-xl-5 p-md-4 p-3" id="DocInfo-tabContent">
                                <div className="tab-pane fade show active" id="DocInfo-1" role="tabpanel" aria-labelledby="DocInfo-1-tab" tabIndex={0}>
                                    <h2 className="fs-3 mb-md-4 mb-3">Образование</h2>

                                    <div className="article article-sm">
                                        <ul>
                                            {specialist.education.map((row: any) => (
                                                <li key={row.year}>
                                                    {row.name}, {row.year} г.
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="tab-pane fade" id="DocInfo-2" role="tabpanel" aria-labelledby="DocInfo-2-tab" tabIndex={0}>
                                    <h2 className="fs-3 mb-md-4 mb-3">Деятельность</h2>

                                    <div className="article article-sm">
                                        <ul>
                                            <li>
                                                После окончания университета работает по своей основной специальности, хирургом-онкологом, в Саратовском онкологическом
                                                диспансере.
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className="tab-pane fade" id="DocInfo-3" role="tabpanel" aria-labelledby="DocInfo-3-tab" tabIndex={0}>
                                    <h2 className="fs-3 mb-md-4 mb-3">Сертификаты</h2>

                                    {specialist.certificates.map((certificate: any) => (
                                        <div className="position-relative d-flex align-items-center mb-3">
                                            <div
                                                className="license-thumb flex-shrink-0 ratio ratio-1x1 me-md-4 me-3"
                                                style={{ backgroundImage: "url('" + certificate.path + "')" }}></div>
                                            <a href={certificate.page} data-fancybox="certificate-gallery" className="stretched-link link-secondary license-name">
                                                {certificate.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="tab-pane fade" id="DocInfo-4" role="tabpanel" aria-labelledby="DocInfo-4-tab" tabIndex={0}>
                                    <h2 className="fs-3 mb-md-4 mb-3">Отзывы</h2>

                                    <div className="row g-md-4 g-3">
                                        <div className="col-xl-4 col-md-6">
                                            <div className="gallery-item position-relative">
                                                <div
                                                    className="bg-img ratio ratio-16x9 position-relative rounded-3"
                                                    style={{ backgroundImage: "url('https://i3.ytimg.com/vi/PWv2zfJvebQ/maxresdefault.jpg')" }}>
                                                    <div className="gallery-item-play-icon">
                                                        <?xml version="1.0" encoding="UTF-8"?>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path
                                                                d="M353.07,222.61l-124.76-68.33c-11.99-6.74-26.2-6.59-38.04,.3-11.86,6.93-18.94,19.29-18.94,33.02v136.77c0,13.74,7.08,26.09,18.94,33.02,6.04,3.52,12.69,5.29,19.31,5.29s12.8-1.64,18.62-4.91l124.95-68.44c12.2-6.87,19.5-19.33,19.5-33.32s-7.3-26.47-19.61-33.39l.02-.02ZM256,0C114.84,0,0,114.84,0,256s114.84,256,256,256,256-114.84,256-256S397.16,0,256,0Zm0,490.67c-129.39,0-234.67-105.28-234.67-234.67S126.61,21.33,256,21.33s234.67,105.28,234.67,234.67-105.28,234.67-234.67,234.67Z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <a
                                                    data-fancybox="doc-feedback-gallery"
                                                    data-caption="Отзыв о бариатрической операции"
                                                    href="https://youtu.be/PWv2zfJvebQ"
                                                    className="stretched-link d-inline-block link-secondary fs-8 pt-2">
                                                    Отзыв о бариатрической операции
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6">
                                            <div className="gallery-item position-relative">
                                                <div
                                                    className="bg-img ratio ratio-16x9 position-relative rounded-3"
                                                    style={{ backgroundImage: "url('https://i3.ytimg.com/vi/59hnfy4THR0/maxresdefault.jpg')" }}>
                                                    <div className="gallery-item-play-icon">
                                                        <?xml version="1.0" encoding="UTF-8"?>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path
                                                                d="M353.07,222.61l-124.76-68.33c-11.99-6.74-26.2-6.59-38.04,.3-11.86,6.93-18.94,19.29-18.94,33.02v136.77c0,13.74,7.08,26.09,18.94,33.02,6.04,3.52,12.69,5.29,19.31,5.29s12.8-1.64,18.62-4.91l124.95-68.44c12.2-6.87,19.5-19.33,19.5-33.32s-7.3-26.47-19.61-33.39l.02-.02ZM256,0C114.84,0,0,114.84,0,256s114.84,256,256,256,256-114.84,256-256S397.16,0,256,0Zm0,490.67c-129.39,0-234.67-105.28-234.67-234.67S126.61,21.33,256,21.33s234.67,105.28,234.67,234.67-105.28,234.67-234.67,234.67Z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <a
                                                    data-fancybox="doc-feedback-gallery"
                                                    data-caption="Удаление атеромы на
                               голове"
                                                    href="https://youtu.be/59hnfy4THR0"
                                                    className="stretched-link d-inline-block link-secondary fs-8 pt-2">
                                                    Удаление атеромы на голове
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="tab-pane fade" id="DocInfo-5" role="tabpanel" aria-labelledby="DocInfo-5-tab" tabIndex={0}>
                                    <h2 className="fs-3 mb-md-4 mb-3">Фото и видео</h2>

                                    <div className="row g-md-4 g-3">
                                        <div className="col-xl-4 col-md-6">
                                            <div className="gallery-item position-relative">
                                                <div
                                                    className="bg-img ratio ratio-16x9 position-relative rounded-3"
                                                    style={{ backgroundImage: "url('https://i3.ytimg.com/vi/A-q7qVkJKxo/maxresdefault.jpg')" }}>
                                                    <div className="gallery-item-play-icon">
                                                        <?xml version="1.0" encoding="UTF-8"?>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path
                                                                d="M353.07,222.61l-124.76-68.33c-11.99-6.74-26.2-6.59-38.04,.3-11.86,6.93-18.94,19.29-18.94,33.02v136.77c0,13.74,7.08,26.09,18.94,33.02,6.04,3.52,12.69,5.29,19.31,5.29s12.8-1.64,18.62-4.91l124.95-68.44c12.2-6.87,19.5-19.33,19.5-33.32s-7.3-26.47-19.61-33.39l.02-.02ZM256,0C114.84,0,0,114.84,0,256s114.84,256,256,256,256-114.84,256-256S397.16,0,256,0Zm0,490.67c-129.39,0-234.67-105.28-234.67-234.67S126.61,21.33,256,21.33s234.67,105.28,234.67,234.67-105.28,234.67-234.67,234.67Z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <a
                                                    data-fancybox="doc-media-gallery"
                                                    data-caption="Процесс
                               лазерного
                               лечения варикоза (ЭВЛК) / Без боли"
                                                    href="https://youtu.be/A-q7qVkJKxo"
                                                    className="stretched-link d-inline-block link-secondary fs-8 pt-2">
                                                    Процесс лазерного лечения варикоза (ЭВЛК) / Без боли
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6">
                                            <div className="gallery-item position-relative">
                                                <div
                                                    className="bg-img ratio ratio-16x9 position-relative rounded-3"
                                                    style={{ backgroundImage: "url('/img/dynamic-img/doc-gallery-img-md-1.jpg')" }}>
                                                    <a
                                                        data-fancybox="doc-media-gallery"
                                                        data-caption="Результат
                               операции по маммопластике (22 сентября 2022)"
                                                        href="@img/dynamic-img/doc-gallery-img-lg-1.jpg"
                                                        className="stretched-link d-inline-block link-secondary fs-8 pt-2">
                                                        Результат операции по маммопластике (22 сентября 2022)
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6">
                                                <div className="gallery-item position-relative">
                                                    <div
                                                        className="bg-img ratio ratio-16x9 position-relative rounded-3"
                                                        style={{ backgroundImage: "url('http://i3.ytimg.com/vi/Zoo7aETBecs/hqdefault.jpg')" }}>
                                                        <div className="gallery-item-play-icon">
                                                            <?xml version="1.0" encoding="UTF-8"?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path
                                                                    d="M353.07,222.61l-124.76-68.33c-11.99-6.74-26.2-6.59-38.04,.3-11.86,6.93-18.94,19.29-18.94,33.02v136.77c0,13.74,7.08,26.09,18.94,33.02,6.04,3.52,12.69,5.29,19.31,5.29s12.8-1.64,18.62-4.91l124.95-68.44c12.2-6.87,19.5-19.33,19.5-33.32s-7.3-26.47-19.61-33.39l.02-.02ZM256,0C114.84,0,0,114.84,0,256s114.84,256,256,256,256-114.84,256-256S397.16,0,256,0Zm0,490.67c-129.39,0-234.67-105.28-234.67-234.67S126.61,21.33,256,21.33s234.67,105.28,234.67,234.67-105.28,234.67-234.67,234.67Z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <a
                                                        data-fancybox="doc-media-gallery"
                                                        data-caption="Интервью для канала Россия 24"
                                                        href="https://youtu.be/Zoo7aETBecs"
                                                        className="stretched-link d-inline-block link-secondary fs-8 pt-2">
                                                        Интервью для канала Россия 24
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="bg-white rounded-3 shadow p-3 p-md-4 p-lg-5">
                    <h2 className="fs-3 mb-4">Услуги врача</h2>

                    <div>
                        {data.map((service: any) => (
                            <ServiceBlock service={service} />
                        ))}
                    </div>

                    {/* <div className="text-center pt-5">
                        <a href="#" className="btn btn-outline-secondary">Показать ещё</a>
                    </div> */}

                </div>
                <Pagination url={"/specialists/" + params.id} paging={paging} urlSearchParams={urlSearchParams} />
            </div>

            <section className="cards-slider py-5 py-lg-6">
                {/* <div className="container">
                    <div className="d-flex flex-wrap align-items-center mb-4">
                        <h2 className="fs-3 mb-0">Рекомендуем обратить внимание</h2>

                        <div className="d-none d-lg-flex ms-auto">
                            <div className="swiper-button-prev me-2 sbp-4">
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                    <path
                                        d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                                </svg>
                            </div>

                            <div className="swiper-button-next sbn-4">
                                <?xml version="1.0" encoding="UTF-8"?>
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
                                <div className="swiper-slide">
                                    <div
                                        className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                        style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                        <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">УЗИ брюшной полости</a>

                                        <p className="card-text mb-3">Исследование желчного пузыря, поджелудочной железы, селезёнки и кишечника</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 1 700 ₽</div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div
                                        className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                        style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                        <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">УЗИ сердца</a>

                                        <p className="card-text mb-3">Показывает полную структуру сердца. Например, размеры и целостность камер сердца и т.д.</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 2 300 ₽</div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div
                                        className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                        style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                        <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">УЗИ почек</a>

                                        <p className="card-text mb-3">Выявление воспалительных процессов, патологий, повреждений тканей</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 1 400 ₽</div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div
                                        className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                        style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                        <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">УЗИ плода 4D</a>

                                        <p className="card-text mb-3">Позволяет получить полную информацию о развитии плода и течении беременности</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 1 000 ₽</div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div
                                        className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                        style={{ backgroundImage: "url('/img/service-bg-icon_2.svg')" }}>
                                        <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Гастроэнтеролог</a>

                                        <p className="card-text mb-3">Диагностика, профилактика и лечение заболеваний желудочно-кишечного тракта и пищевой аллергии</p>
                                        <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от 1 600 ₽</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

        </div>
    </main >
}