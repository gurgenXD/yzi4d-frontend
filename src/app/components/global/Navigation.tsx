import Image from "next/image";
import SearchWrapper from "@/app/components/global/search/SearchWrapper";
import { cookies } from "next/headers";

import LogoImg from "@/assets/logo.svg";
import NavigationProfile from "@/app/components/global/NavigationProfile";

export default async function Navigation() {
  const accessToken = cookies().get("accessToken");

  return (
    <div className="bg-white shadow-sm">
      <div className="container">
        <div className="d-flex align-items-center py-2 pt-lg-4 pb-lg-3">
          <div className="d-flex align-items-end">
            <a href="/" title="" className="d-flex me-3 me-lg-5">
              <Image className="logo-header" src={LogoImg} alt="Логотип" />
            </a>

            <div>
              <a
                href="tel:+79288284001"
                title=""
                className="phone-header link-secondary fw-extrabold d-flex mb-1"
              >
                +7 (928) 828-40-01
              </a>
              <div className="schedule d-flex">
                <span className="text-white bg-danger px-1 me-1">без выходных</span>с 7:00 до 20:00
              </div>
            </div>
          </div>

          <div className="row align-items-center d-none d-lg-flex ms-auto">
            <NavigationProfile accessToken={accessToken?.value} />

            {/* <div className="col-auto">
              <a href="appointment.html" className="btn btn-danger">
                Записаться
              </a>
            </div> */}
          </div>

          <button
            className="navbar-toggler spaced-link d-lg-none ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#Offcanvas"
            aria-expanded="false"
            aria-label="Меню"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg d-none d-lg-flex">
        <div className="container py-2 pt-lg-0 pb-lg-2">
          <div className="collapse navbar-collapse position-relative">
            <ul className="navbar-nav ms-n3 me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/specialists">
                  Специалисты
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/catalog/services/categories">
                  Услуги
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/catalog/analyzes/categories">
                  Анализы
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/promotions">
                  Спецпредложения
                </a>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="about.html"
                  role="button"
                  aria-expanded="false"
                >
                  Отделения и центры
                  <span className="caret ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 88.07 52.25"
                    >
                      <path d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                    </svg>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="department.html">
                      Центр кардионефрологии
                    </a>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item">
                <a className="nav-link" href="/contacts">
                  Контакты
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/vacancies">
                  Вакансии
                </a>
              </li>
            </ul>

            <div className="search">
              <div className="search-form-wrap">
                <SearchWrapper />
              </div>

              <button type="button" className="search-toggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  className="search-hide-icon"
                >
                  <path d="M10.59,9L17.67,1.92c.44-.44,.44-1.15,0-1.59s-1.15-.44-1.59,0h0l-7.08,7.08L1.92,.33C1.48-.11,.77-.11,.33,.33-.11,.77-.11,1.48,.33,1.92l7.08,7.08L.33,16.08c-.44,.44-.44,1.15,0,1.59,.44,.44,1.15,.44,1.59,0l7.08-7.08,7.08,7.08c.44,.44,1.15,.44,1.59,0,.44-.44,.44-1.15,0-1.59l-7.08-7.08h0Z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  className="search-show-icon"
                >
                  <path d="M17.67,16.08l-3.48-3.49c2.61-3.48,1.9-8.42-1.59-11.03S4.18-.33,1.57,3.16C-1.04,6.64-.33,11.58,3.16,14.19c2.8,2.09,6.64,2.09,9.44,0l3.49,3.49c.44,.44,1.15,.44,1.59,0,.44-.44,.44-1.15,0-1.59h0Zm-9.76-2.57c-3.1,0-5.61-2.51-5.61-5.61S4.81,2.3,7.91,2.3s5.61,2.51,5.61,5.61c0,3.09-2.51,5.6-5.61,5.61h0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
