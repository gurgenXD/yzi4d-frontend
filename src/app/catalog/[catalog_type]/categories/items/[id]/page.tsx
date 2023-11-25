import NotFound from "@/app/not-found";
import { getService } from "@/requests/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string; catalog_type: string };
}) {
  const { errorCode, service } = await getService(params.id, params.catalog_type);
  if (errorCode) {
    return <NotFound />;
  }

  return {
    title: `${service.name} - Поликлиника УЗИ 4Д`,
  };
}

export default async function Service({
  params,
}: {
  params: { id: string; catalog_type: string };
}) {
  const { errorCode, service } = await getService(params.id, params.catalog_type);
  if (errorCode) {
    return <NotFound />;
  }

  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5 pb-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Главная</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href={`/catalog/${params.catalog_type}/categories`}>
                {params.catalog_type == "services" ? "Услуги" : "Анализы"}
              </Link>
            </li>
            <li className="breadcrumb-item">{service.category_name}</li>
            <li className="breadcrumb-item active">{service.name}</li>
          </ol>

          <button
            className="d-xl-none btn btn-outline-secondary btn-sm btn-icon text-nowrap mb-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasFilters"
            aria-controls="offcanvasFilters"
          >
            <span className="icon me-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 356.17">
                <path d="M489.74,155.83H22.26c-12.29,0-22.26,9.97-22.26,22.26s9.97,22.26,22.26,22.26H489.74c12.29,0,22.26-9.97,22.26-22.26,0-12.29-9.97-22.26-22.26-22.26Z" />
                <path d="M22.26,44.52H489.74c12.29,0,22.26-9.97,22.26-22.26S502.03,0,489.74,0H22.26C9.97,0,0,9.97,0,22.26s9.97,22.26,22.26,22.26Z" />
                <path d="M489.74,311.65H22.26c-12.29,0-22.26,9.97-22.26,22.26s9.97,22.26,22.26,22.26H489.74c12.29,0,22.26-9.97,22.26-22.26,0-12.29-9.97-22.26-22.26-22.26Z" />
              </svg>
            </span>
            Каталог услуг
          </button>

          <div className="bg-white rounded-3 shadow p-3 p-md-4 p-lg-5">
            <div className="row gy-4 gx-md-5 gx-lg-6">
              <div className="col-12 col-md">
                <div className="h-100 d-flex">
                  <h1 className="fs-3 my-auto">{service.name}</h1>
                </div>
              </div>

              <div className="col-12 col-md-auto">
                <div className="h-100 d-flex flex-column">
                  <div className="d-flex align-items-end mb-3">
                    {/* // ВИД ЦЕНЫ СО СКИДКОЙ:
                    <div className="me-3">
                      <div className="text-decoration-line-through text-disabled lh-1 mb-1">
                        3 500 ₽
                      </div>
                      <div className="fs-3 text-danger fw-black lh-1">2 290 ₽</div>
                    </div> */}
                    <div className="me-3">
                      <div className="fs-3 text-secondary fw-black lh-1">
                        {service.price.toLocaleString("ru")} ₽
                      </div>
                    </div>
                    {/* <button className="btn btn-to-calc spaced-link mb-1">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.65 16">
                          <path d="M23.85,0H11.92c-.48,0-.8,.32-.8,.8V15.2c0,.48,.32,.8,.8,.8h11.93c.48,0,.8-.32,.8-.8V.8c0-.48-.32-.8-.8-.8ZM15.1,14.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm3.98,6.4h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm3.98,6.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2H12.72V1.6h10.34v3.2Z" />
                          <path
                            className="cls-1"
                            d="M3.23,4.8h1.05c.23,0,.43,.19,.43,.42v2.41h2.39c.23,0,.42,.2,.42,.43v1.05c0,.24-.19,.43-.42,.43h-2.39v2.4c0,.24-.19,.43-.43,.43h-1.05c-.23,0-.42-.19-.42-.43v-2.4H.42C.19,9.54,0,9.34,0,9.11v-1.05C0,7.83,.2,7.63,.42,7.63H2.81v-2.41c0-.23,.19-.42,.42-.42h0Z"
                          />
                        </svg>
                      </span>
                    </button> */}
                  </div>

                  {/* <Link href="#" className="btn btn-danger">
                    Записаться
                  </Link> */}
                </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                  </svg>
                </div>

                <div className="swiper-button-next sbn-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <div className="swiper doc-sales-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                      <Link
                        href="#"
                        className="card-title stretched-link d-block text-danger fw-bold mb-2"
                      >
                        Блефаропластика под ключ
                      </Link>

                      <p className="card-text mb-3">Верните красоту своим глазам</p>
                      <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                        от 40 000 ₽
                      </div>

                      <div className="sale-badge"></div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                      <Link
                        href="#"
                        className="card-title stretched-link d-block text-danger fw-bold mb-2"
                      >
                        Консультация в октябре
                      </Link>

                      <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                        Бесплатно
                      </div>

                      <div className="sale-badge"></div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                      <Link
                        href="#"
                        className="card-title stretched-link d-block text-danger fw-bold mb-2"
                      >
                        Скидка 10% на повторный приём
                      </Link>

                      <div className="sale-badge"></div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                      <Link
                        href="#"
                        className="card-title stretched-link d-block text-danger fw-bold mb-2"
                      >
                        Первый приём
                      </Link>

                      <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                        4 000 ₽
                      </div>

                      <div className="sale-badge"></div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4">
                      <Link
                        href="#"
                        className="card-title stretched-link d-block text-danger fw-bold mb-2"
                      >
                        Скидка пенсионерам 10%
                      </Link>
                      <p className="card-text mb-3">
                        При записи предъявите пенсионное удостоверение
                      </p>

                      <div className="sale-badge"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div className="container mb-5">
          <div className="row">
            <div className="col-12">
              <div className="bg-white rounded-3 shadow px-3 pb-3 px-md-4 pt-md-2 pb-md-4 px-lg-5 pt-lg-3 pb-lg-5">
                <div className="nav-mobile-scroll fw-semibold border-bottom mb-3 pb-lg-1">
                  <div className="linebar" id="service-tab" role="tablist">
                    <ul className="nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="#"
                          id="service-1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#service-1"
                          role="tab"
                          aria-controls="service-1"
                          aria-selected="true"
                        >
                          Описание
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          id="service-2-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#service-2"
                          role="tab"
                          aria-controls="service-2"
                          aria-selected="false"
                        >
                          Показания
                        </Link>
                      </li> */}
                      {/* <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          id="service-3-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#service-3"
                          role="tab"
                          aria-controls="service-3"
                          aria-selected="false"
                        >
                          Противопоказания
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          id="service-4-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#service-4"
                          role="tab"
                          aria-controls="service-4"
                          aria-selected="false"
                        >
                          Подготовка
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tab-content" id="service-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="service-1"
                    role="tabpanel"
                    aria-labelledby="service-1-tab"
                    tabIndex={0}
                  >
                    <div className="article article-sm">
                      <div>
                        {service.description.split("\n").map((row: string) => (
                          <div key={row}>
                            {row}
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="service-2"
                    role="tabpanel"
                    aria-labelledby="service-2-tab"
                    tabIndex={0}
                  >
                    <div className="article article-sm">
                      <ul>
                        <li>
                          затруднение при мочеиспускании, постоянное чувство наполненности мочевого
                          пузыря;
                        </li>
                        <li>нарушения репродуктивной функции;</li>
                        <li>острые и хронические заболевания предстательной железы;</li>
                        <li>контроль над эффективностью проводимого лечения;</li>
                        <li>признаки снижения функций почек;</li>
                        <li>
                          мужчинам старше 40 лет рекомендовано проведение исследования в целях
                          профилактики в качестве скрининга
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div
                    className="tab-pane fade"
                    id="service-3"
                    role="tabpanel"
                    aria-labelledby="service-3-tab"
                    tabIndex={0}
                  >
                    <div className="article article-sm">
                      <p>Трансабдоминальное исследование противопоказаний не имеет.</p>
                      <p>
                        Трансректальное исследование не проводится при заболеваниях и повреждениях
                        прямой кишки (геморрой, анальные трещины); также не рекомендовано проведение
                        исследования несколько дней после колоноскопии.
                      </p>
                    </div>
                  </div> */}

                  <div
                    className="tab-pane fade"
                    id="service-4"
                    role="tabpanel"
                    aria-labelledby="service-4-tab"
                    tabIndex={0}
                  >
                    <div className="article article-sm">
                      <div>
                        {service.preparation.split("\n").map((row: string) => (
                          <div key={row}>
                            {row}
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="cards-slider py-5 py-lg-6">
                <div className="d-flex flex-wrap align-items-center mb-4">
                  <h2 className="fs-3 mb-0">Рекомендуем обратить внимание</h2>

                  <div className="d-none d-lg-flex ms-auto">
                    <div className="swiper-button-prev me-2 sbp-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                        <path d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                      </svg>
                    </div>

                    <div className="swiper-button-next sbn-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                        <path d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
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
                          style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}
                        >
                          <Link
                            href="#"
                            className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                          >
                            УЗИ брюшной полости
                          </Link>

                          <p className="card-text mb-3">
                            Исследование желчного пузыря, поджелудочной железы, селезёнки и
                            кишечника
                          </p>
                          <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                            от 1 700 ₽
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div
                          className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                          style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}
                        >
                          <Link
                            href="#"
                            className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                          >
                            УЗИ сердца
                          </Link>

                          <p className="card-text mb-3">
                            Показывает полную структуру сердца. Например, размеры и целостность
                            камер сердца и т.д.
                          </p>
                          <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                            от 2 300 ₽
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div
                          className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                          style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}
                        >
                          <Link
                            href="#"
                            className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                          >
                            УЗИ почек
                          </Link>

                          <p className="card-text mb-3">
                            Выявление воспалительных процессов, патологий, повреждений тканей
                          </p>
                          <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                            от 1 400 ₽
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div
                          className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                          style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}
                        >
                          <Link
                            href="#"
                            className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                          >
                            УЗИ плода 4D
                          </Link>

                          <p className="card-text mb-3">
                            Позволяет получить полную информацию о развитии плода и течении
                            беременности
                          </p>
                          <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                            от 1 000 ₽
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div
                          className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                          style={{ backgroundImage: "url('/img/service-bg-icon_2.svg')" }}
                        >
                          <Link
                            href="#"
                            className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                          >
                            Гастроэнтеролог
                          </Link>

                          <p className="card-text mb-3">
                            Диагностика, профилактика и лечение заболеваний желудочно-кишечного
                            тракта и пищевой аллергии
                          </p>
                          <div className="card-price text-secondary fw-extrabold mt-auto mb-3">
                            от 1 600 ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
