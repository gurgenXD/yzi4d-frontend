import HomeSpecialists from "@/app/components/home/HomeSpecialists";
import HomeServices from "@/app/components/home/HomeServices";
import Image from "next/image";
import CommonContacts from "@/app/components/common/CommonContacts";
import HomePromotions from "@/app/components/home/HomePromotions";
import HomeRates from "@/app/components/home/HomeRates";

import AboutBgImg from "@/assets/about-bg.png";
import StatBgImg1 from "@/assets/stat-bg_1.svg";
import StatBgImg2 from "@/assets/stat-bg_2.svg";
import StatBgImg3 from "@/assets/stat-bg_3.svg";
import StatBgImg4 from "@/assets/stat-bg_4.svg";
import FeatureImg1 from "@/assets/feature-img-1.svg";
import FeatureImg2 from "@/assets/feature-img-2.svg";
import FeatureImg3 from "@/assets/feature-img-3.svg";
import FeatureImg4 from "@/assets/feature-img-4.svg";
import FeatureImg5 from "@/assets/feature-img-5.svg";
import FeatureImg6 from "@/assets/feature-img-6.svg";
import MainOnlineImg from "@/assets/main-online-img.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_YZI4D_HOST
    ? new URL(process.env.NEXT_PUBLIC_YZI4D_HOST)
    : null,
  title: "Главная - Поликлиника УЗИ 4Д",
  openGraph: {
    type: "website",
    url: "https://yzi4d.ru",
    title: "Поликлиника УЗИ 4Д",
    description: "Сайт поликлиники УЗИ 4Д",
    siteName: "Поликлиника УЗИ 4Д",
  },
};

export default async function Home() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container py-lg-6 py-5">
          <div className="row gy-5">
            <div className="col-xl-8 col-xxl-9">
              <HomePromotions />
            </div>

            <div className="col-xl-4 col-xxl-3">
              <div className="main-banner d-flex align-content-stretch h-100 bg-white shadow rounded-3 overflow-hidden">
                <div className="main-banner-img h-100 bg-img">
                  <Image
                    className="main-banner-img h-100 bg-img"
                    src={MainOnlineImg}
                    alt="Онлайн-консультация"
                    width={300}
                    height={260}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="flex-grow-1 pt-3 pb-3 px-3 p-sm-4 ps-md-5 ps-xl-4 pt-xl-5">
                  <h2 className="main-banner-title mb-2 mb-xl-2">Онлайн-консультация</h2>
                  <p className="main-banner-text text-muted mb-3 mb-lg-4">
                    Общайтесь с доктором не выходя из дома
                  </p>
                  <a href="https://online.yzi4d.ru/" target="_blank" className="btn btn-danger">
                    Попробовать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-lg-6 py-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-baseline justify-content-between mb-lg-3">
              <h2 className="mb-2 me-5">Услуги</h2>

              <a
                href="/catalog/services/categories"
                className="link-more spaced-link fw-semibold d-flex align-items-center flex-nowrap mb-2"
              >
                Все услуги
                <span className="icon ms-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.13 277.34">
                    <path d="M289.3,85.87L212.8,9.37c-12.5-12.49-32.76-12.49-45.26,.01s-12.49,32.76,.01,45.26h0l52.03,52.03H32C14.33,106.67,0,121,0,138.67s14.33,32,32,32H219.58l-52.03,52.03c-12.5,12.49-12.51,32.76-.01,45.26,12.49,12.5,32.76,12.51,45.26,.01l76.5-76.5c29.1-29.18,29.1-76.42,0-105.6Z" />
                  </svg>
                </span>
              </a>
            </div>
            <HomeServices />
          </div>
        </section>

        <section className="doctors-slider py-lg-6 py-5">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center mb-3">
              <div className="d-flex flex-wrap align-items-baseline flex-grow-1">
                <h2 className="mb-2 me-auto me-lg-5">Наши специалисты</h2>

                <a
                  href="/specialists"
                  className="link-more spaced-link fw-semibold d-flex align-items-center flex-nowrap mb-2"
                >
                  Все специалисты
                  <span className="icon ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.13 277.34">
                      <path d="M289.3,85.87L212.8,9.37c-12.5-12.49-32.76-12.49-45.26,.01s-12.49,32.76,.01,45.26h0l52.03,52.03H32C14.33,106.67,0,121,0,138.67s14.33,32,32,32H219.58l-52.03,52.03c-12.5,12.49-12.51,32.76-.01,45.26,12.49,12.5,32.76,12.51,45.26,.01l76.5-76.5c29.1-29.18,29.1-76.42,0-105.6Z" />
                    </svg>
                  </span>
                </a>
              </div>

              <div className="d-none d-lg-flex ms-auto">
                <div className="swiper-button-prev me-2 sbp-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                  </svg>
                </div>

                <div className="swiper-button-next sbn-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                    <path d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <HomeSpecialists />
            </div>
          </div>
        </section>

        <section className="section-about bg-light-blue py-lg-6 py-5">
          <div className="container position-relative py-2">
            <div className="section-about-img">
              <Image src={AboutBgImg} alt="Блок описания" />
            </div>

            <div className="row align-items-end gy-5 gy-sm-6 gy-xl-0 gx-xl-6">
              <div className="col-xl-7">
                <article className="article mb-5 mb-lg-6">
                  <h1 className="title-dashed fs-2 pb-4 mb-4">4Д Поликлиника</h1>
                  <p>
                    Это сеть многопрофильных медицинских центров. В нашем арсенале более 250 видов
                    медицинских услуг, и это не считая инструментальной диагностики - эндоскопии,
                    УЗИ, МРТ, КТ, - а также клинических исследований и анализов! Мы прикладываем
                    максимум усилий для того, чтобы в одном месте, за один визит наши пациенты могли
                    получить самую разнообразную помощь - как взрослые, так и дети.
                  </p>
                </article>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="stat-item h-100 bg-white d-flex align-items-center p-3 rounded-3 shadow-sm overflow-hidden">
                      <div className="stat-item-img">
                        <Image src={StatBgImg1} alt="Направления исследований" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">
                        &gt;90
                      </div>
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
                        <Image src={StatBgImg2} alt="Медицинские центры" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">
                        5
                      </div>
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
                        <Image src={StatBgImg3} alt="Виды исследований" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">
                        &gt;1500
                      </div>
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
                        <Image src={StatBgImg4} alt="Кфалифицированные специалисты" />
                      </div>

                      <div className="stat-item-score fw-extrabold text-danger text-nowrap me-3">
                        100
                      </div>
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

            <CommonContacts />
          </div>
        </section>

        <section className="py-lg-6 py-5">
          <div className="container">
            <h2 className="mb-4 mb-md-5">Почему стоит лечиться у нас?</h2>

            <div className="row g-3 g-lg-4 g-xl-5">
              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image src={FeatureImg1} alt="Классные специалисты" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Классные специалисты
                    </h3>
                    <div className="feature-text text-muted">
                      Каждый доктор 4Д Поликлиники – настоящий бриллиант в нашей коллекции. Каждый –
                      настоящий мастер своего дела. При этом, наши специалисты не прекращают
                      совершенствоваться и регулярно повышают квалификацию.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image
                      src={FeatureImg2}
                      alt="Оборудование экспертного класса"
                      className="feature-img"
                    />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Оборудование экспертного класса
                    </h3>
                    <div className="feature-text text-muted">
                      Продвинутое оборудование – то, на чём мы никогда не экономим. Поэтому
                      инструментальная диагностика в 4Д Поликлинике – это всегда точно и
                      профессионально.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image src={FeatureImg3} alt="Всё в одном месте" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Всё в одном месте
                    </h3>
                    <div className="feature-text text-muted">
                      Мы за удобство. У нас вы можете пройти обследования, сдать анализы и попасть
                      на приём к врачу – за одно посещение. Для того, чтобы быть здоровым не нужно
                      тратить массу времени и мотаться по всему городу.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image src={FeatureImg4} alt="Удобный график работы" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Удобный график работы
                    </h3>
                    <div className="feature-text text-muted">
                      Наши поликлиники работают с раннего утра и до вечера, без перерывов и без
                      выходных. Мы заботимся о вашем здоровье и продолжаем приём даже в праздники и
                      по воскресеньям.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image src={FeatureImg5} alt="Мы заботимся о вас" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Мы заботимся о вас
                    </h3>
                    <div className="feature-text text-muted">
                      В 4Д Поликлинике царит спокойная и расслабляющая атмосфера благодаря
                      искреннему желанию персонала предоставлять пациентам тёплый, человечный уход.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature d-flex bg-white shadow rounded-3 h-100 p-3 p-sm-4">
                  <div className="me-xl-5 me-4">
                    <Image src={FeatureImg6} alt="Большой опыт" className="feature-img" />
                  </div>

                  <div className="my-auto">
                    <h3 className="feature-title fw-extrabold text-secondary mb-2">
                      Более 12 лет опыта
                    </h3>
                    <div className="feature-text text-muted">
                      Мы работаем для своих пациентов уже более 12 лет, с каждым новым годом
                      накапливаем всё больше опыта, что позволяет нам всё время улучшать качество
                      наших услуг.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeRates />
      </div>
    </main>
  );
}
