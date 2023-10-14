import { getSpecialists } from "@/app/specialists/page"
import SpecialistBlock from "@/app/components/SpecialistBlock"
import ContactsBlock from "@/app/components/ContactsBlock"


export async function getCategories(catalogType: string) {
  const categories = await fetch(
    `${process.env.YZI4D_HOST}/catalog/${catalogType}/categories  `,
    { next: { revalidate: Number(process.env.CACHE_LIFETIME) } }
  ).then((res) => res.json())

  return categories
}


export default async function Home() {
  const urlSearchParams = new URLSearchParams("for_main=true")
  const specialists = await getSpecialists(urlSearchParams)
  const categories = await getCategories("main")

  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container py-lg-6 py-5">
          <div className="row gy-5">
            <div className="col-xl-8 col-xxl-9">
              <div className="position-relative main-slider">
                <div className="main-slider-control d-none d-lg-block">
                  <div className="main-slider-control-wrap d-flex justify-content-end align-items-center px-3 py-2">
                    <div className="swiper-pagination me-3"></div>

                    <div className="swiper-button-prev me-2 sbp-1">
                      {/* <?xml version="1.0" encoding="UTF-8"?> */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                        <path
                          d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                      </svg>
                    </div>

                    <div className="swiper-button-next sbn-1">
                      {/* <?xml version="1.0" encoding="UTF-8"?> */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                        <path
                          d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="sale-banner bg-white position-relative">
                        <div className="row flex-column flex-md-row gx-0">
                          <div className="col-12 col-md-auto">
                            <div className="sale-banner-img bg-img" style={{ backgroundImage: "url('/img/dynamic-img/main-slider-img_1.jpg')" }}></div>
                          </div>

                          <div className="col-12 col-md">
                            <div className="sale-banner-text h-100 d-flex align-items-center px-3 px-sm-4 px-lg-5">
                              <div>
                                <div className="d-flex flex-wrap mb-2 mb-md-3 mb-xxl-4">
                                  <div className="sale-banner-badge bg-danger text-white fw-semibold px-2 px-lg-3 py-1 mb-1">Выгода 20%</div>
                                  <div className="sale-banner-date bg-light-blue fw-semibold px-2 px-lg-3 py-1 mb-1">25 октября - 25 декабря</div>
                                </div>

                                <a href="#" className="sale-banner-title stretched-link d-block link-secondary fw-black mb-0">Биохимия крови</a>

                                <ul className="sale-banner-list list-unstyled mt-2 mt-md-3 mt-xxl-4">
                                  <li>
                                    Базовый комплекс (9 показателей) + витамин Д
                                    <div className="fw-bold">
                                      2600 ₽
                                      <span className="text-decoration-line-through fw-medium ms-1">3000 ₽</span>
                                    </div>
                                  </li>

                                  <li>
                                    Расширенный коплекс (13 показателей)
                                    <div className="fw-bold">
                                      2300 ₽
                                      <span className="text-decoration-line-through fw-medium ms-1">3000 ₽</span>
                                    </div>
                                  </li>

                                  <li className="fw-bold text-danger">Забор крови в подарок</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="sale-banner bg-white position-relative">
                        <div className="row flex-column flex-md-row gx-0">
                          <div className="col-12 col-md-auto">
                            <div className="sale-banner-img bg-img" style={{ backgroundImage: "url('/img/dynamic-img/main-slider-img_2.jpg')" }}></div>
                          </div>

                          <div className="col-12 col-md">
                            <div className="sale-banner-text h-100 d-flex align-items-center px-3 px-sm-4 px-lg-5">
                              <div>
                                <div className="d-flex flex-wrap mb-2 mb-md-3 mb-xxl-4">
                                  <div className="sale-banner-badge bg-danger text-white fw-semibold px-2 px-lg-3 py-1 mb-1">Выгода 50%</div>
                                  <div className="sale-banner-date bg-light-blue fw-semibold px-2 px-lg-3 py-1 mb-1">Все выходные октября</div>
                                </div>

                                <a href="#" className="sale-banner-title stretched-link d-block link-secondary fw-black mb-0">Здоровье щитовидной железы</a>

                                <ul className="sale-banner-list list-unstyled mt-2 mt-md-3 mt-xxl-4">
                                  <li>
                                    ТТГ + Т4св + АТПО
                                    <div className="fw-bold">
                                      2300 ₽
                                      <span className="text-decoration-line-through fw-medium ms-1">4600 ₽</span>
                                    </div>
                                  </li>

                                  <li className="fw-bold text-danger">Забор крови в подарок</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-xxl-3">
              <div className="main-banner d-flex align-content-stretch h-100 bg-white shadow rounded-3 overflow-hidden">
                <div className="main-banner-img h-100 bg-img" style={{ backgroundImage: "url('/img/dynamic-img/main-banner-img.jpg')" }}></div>

                <div className="flex-grow-1 pt-3 pb-3 px-3 p-sm-4 ps-md-5 ps-xl-4 pt-xl-5">
                  <h2 className="main-banner-title mb-2 mb-xl-2">Онлайн-консультация</h2>
                  <p className="main-banner-text text-muted mb-3 mb-lg-4">Общайтесь с доктором не выходя из дома</p>
                  <a href="https://online.yzi4d.ru/" target="_blank" className="btn btn-danger">Попробовать</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-lg-6 py-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-baseline justify-content-between mb-lg-3">
              <h2 className="mb-2 me-5">Услуги</h2>

              <a href="/catalog/services/categories/1" className="link-more spaced-link fw-semibold d-flex align-items-center flex-nowrap mb-2">
                Все услуги

                <span className="icon ms-2">
                  {/* <?xml version="1.0" encoding="UTF-8"?> */}
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
                    <div className={"tab-pane fade" + (category.id == categories[0].id ? " show active" : "")} id={"services-" + category.id} role="tabpanel" aria-labelledby={"services-" + category.id + "-tab"} tabIndex={0}>
                      <div className="row g-xxl-4 g-3">
                        {category.services.map((service: any) => (
                          <div className="col-xl-4 col-md-6">
                            <div
                              className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                              style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                              <a href={"/catalog/services/categories/" + category.id + "/items/" + service.id} className="card-title stretched-link d-block text-secondary fw-bold mb-2">{service.name}</a>

                              <p className="card-text mb-3">{service.short_description}</p>
                              <div className="card-price text-secondary fw-extrabold mt-auto mb-3">от {service.price.toLocaleString()} ₽</div>
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
                    <div className="swiper-slide">
                      <SpecialistBlock specialist={specialist} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-about bg-light-blue py-lg-6 py-5">
          <div className="container position-relative py-2">
            <div className="section-about-img">
              <img src="/img/about-bg.png" alt="" />
            </div>

            <div className="row align-items-end gy-5 gy-sm-6 gy-xl-0 gx-xl-6">
              <div className="col-xl-7">
                <article className="article mb-5 mb-lg-6">
                  <h1 className="title-dashed fs-2 pb-4 mb-4">4Д Поликлиника</h1>
                  <p>
                    Это сеть многопрофильных медицинских центров. В нашем арсенале более 250 видов медицинских услуг, и это не считая инструментальной
                    диагностики - эндоскопии, УЗИ, МРТ, КТ, - а также клинических исследований и анализов! Мы прикладываем максимум усилий для того, чтобы
                    в одном месте, за один визит наши пациенты могли получить самую разнообразную помощь - как взрослые, так и дети.
                  </p>
                </article>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="stat-item h-100 bg-white d-flex align-items-center p-3 rounded-3 shadow-sm overflow-hidden">
                      <div className="stat-item-img">
                        <img src="/img/stat-bg_1.svg" alt="" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">&gt;90</div>
                      <div className="stat-item-text text-secondary my-auto">
                        направлений
                        <br />
                        исследований
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-item h-100 bg-white d-flex align-items-center p-3 rounded-3 shadow-sm overflow-hidden">
                      <div className="stat-item-img">
                        <img src="/img/stat-bg_2.svg" alt="" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">5</div>
                      <div className="stat-item-text text-secondary my-auto">
                        медицинских
                        <br />
                        центров
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-item h-100 bg-white d-flex align-items-center p-3 rounded-3 shadow-sm overflow-hidden">
                      <div className="stat-item-img">
                        <img src="/img/stat-bg_3.svg" alt="" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">&gt;1500</div>
                      <div className="stat-item-text text-secondary my-auto">
                        видов
                        <br />
                        исследований
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-item h-100 bg-white d-flex align-items-center p-3 rounded-3 shadow-sm overflow-hidden">
                      <div className="stat-item-img">
                        <img src="/img/stat-bg_4.svg" alt="" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">100</div>
                      <div className="stat-item-text text-secondary my-auto">
                        квалифицированных
                        <br />
                        специалистов
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-xl-5">
                <!-- ЕСТЬ 3 ТИПА ОРИЕНТАЦИИ ВИДЕО. НУЖНО МЕНЯТЬ КЛАССЫ .ratio-16x9, .ratio-9x16, .ratio-1x1 В ЗАВИСИМОСТИ ОТ ТОГО, ЧТО ГРУЗЯТ В АДМИНКЕ -->
                <div className="ratio ratio-16x9 rounded-3 shadow overflow-hidden mx-auto">
                  <iframe
                    src="https://www.youtube.com/embed/ykCQHhs7ig0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="pt-lg-6 pt-5 pb-lg-3">
          <div className="container">
            <h2 className="mb-lg-4 mb-2">Наши филиалы</h2>

            <ContactsBlock />
          </div>
        </section>

        <section className="py-lg-6 py-5">
          <div className="container">
            <h2 className="mb-4 mb-md-5">Почему стоит лечиться у нас?</h2>

            <div className="row g-3 g-lg-4 g-xl-5">
              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-1.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">Классные специалисты</h3>
                    <div className="feature-text text-muted">
                      Каждый доктор 4Д Поликлиники – настоящий бриллиант в нашей коллекции. Каждый – настоящий мастер своего дела. При этом, наши
                      специалисты не прекращают совершенствоваться и регулярно повышают квалификацию.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-2.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">Оборудование экспертного класса</h3>
                    <div className="feature-text text-muted">
                      Продвинутое оборудование – то, на чём мы никогда не экономим. Поэтому инструментальная диагностика в 4Д Поликлинике – это всегда
                      точно и профессионально.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-3.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">Всё в одном месте</h3>
                    <div className="feature-text text-muted">
                      Мы за удобство. У нас вы можете пройти обследования, сдать анализы и попасть на приём к врачу – за одно посещение. Для того, чтобы
                      быть здоровым не нужно тратить массу времени и мотаться по всему городу.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-4.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">Удобный график работы</h3>
                    <div className="feature-text text-muted">
                      Наши поликлиники работают с раннего утра и до вечера, без перерывов и без выходных. Мы заботимся о вашем здоровье и продолжаем приём
                      даже в праздники и по воскресеньям.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-5.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">Мы заботимся о вас</h3>
                    <div className="feature-text text-muted">
                      В 4Д Поликлинике царит спокойная и расслабляющая атмосфера благодаря искреннему желанию персонала предоставлять пациентам тёплый,
                      человечный уход.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <img src="/img/dynamic-img/feature-img-6.svg" alt="" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">10 лет опыта</h3>
                    <div className="feature-text text-muted">
                      Мы работаем для своих пациентов уже 10 лет, с каждым новым годом накапливаем всё больше опыта, что позволяет нам всё время улучшать
                      качество наших услуг.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rates-slider overflow-hidden py-lg-6 py-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center mb-4">
              <h2 className="mb-0">Рейтинги независмых сервисов</h2>

              <div className="d-none d-lg-flex ms-auto">
                <div className="swiper-button-prev me-2 sbp-3">
                  {/* <?xml version="1.0" encoding="UTF-8"?> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path
                      d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                  </svg>
                </div>

                <div className="swiper-button-next sbn-3">
                  {/* <?xml version="1.0" encoding="UTF-8"?> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path
                      d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <div className="swiper p-lg-3 m-lg-n3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                      <div className="rate-item-img">
                        <img src="/img/yandex.svg" alt="" />
                      </div>

                      <div className="rate-item-score fw-bold text-danger me-3">4.8</div>

                      <div>
                        <a href="https://yandex.ru/maps/org/4d_poliklinika/1154946954/reviews/?ll=43.070356%2C44.048861&z=15" target="_blank" className="rate-item-title stretched-link link-secondary d-block fw-bold">Яндекс</a>

                        <div className="rate-item-count text-muted">861 отзыв</div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                      <div className="rate-item-img">
                        <img src="/img/2gis.svg" alt="" />
                      </div>

                      <div className="rate-item-score fw-bold text-danger me-3">4.5</div>

                      <div>
                        <a href="https://2gis.ru/pyatigorsk/inside/12526272118936823/firm/12526164744605496/tab/reviews?m=43.06884%2C44.048142%2F19.41" target="_blank" className="rate-item-title stretched-link link-secondary d-block fw-bold">2ГИС</a>

                        <div className="rate-item-count text-muted">162 отзыва</div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                      <div className="rate-item-img">
                        <img src="/img/prodoctorov.svg" alt="" />
                      </div>

                      <div className="rate-item-score fw-bold text-danger me-3">4.2</div>

                      <div>
                        <a href="https://prodoctorov.ru/pyatigorsk/lpu/24199-klinika-innovacionnoy-mediciny-4d/#rating" target="_blank" className="rate-item-title stretched-link link-secondary d-block fw-bold">ПроДокторов</a>

                        <div className="rate-item-count text-muted">287 отзывов</div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="rate-item bg-white rounded-3 shadow-sm d-flex align-items-center p-sm-4 p-3">
                      <div className="rate-item-img">
                        <img src="/img/doctu.svg" alt="" />
                      </div>

                      <div className="rate-item-score fw-bold text-danger me-3">4.7</div>

                      <div>
                        <a href="https://doctu.ru/pyatigorsk/clinic/poliklinika-4d-1/reviews" target="_blank" className="rate-item-title stretched-link link-secondary d-block fw-bold">Докту</a>

                        <div className="rate-item-count text-muted">101 отзыв</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div >
    </main >
  )
}
