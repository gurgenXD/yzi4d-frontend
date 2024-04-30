import Image from "next/image";

import HeaderOffices from "@/app/components/global/HeaderOffices";
import { cookies } from "next/headers";

import LogoFooterImg from "@/assets/logo-footer.svg";
import SearchWrapper from "@/app/components/global/search/SearchWrapper";
import OffCanvasProfile from "@/app/components/global/OffCanvasProfile";

export default async function OffCanvas() {
  const accessToken = cookies().get("accessToken");

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="Offcanvas"
      aria-labelledby="OffcanvasLabel"
    >
      <div className="offcanvas-header pb-1">
        <a className="offcanvas-title" id="OffcanvasLabel" href="/">
          <Image src={LogoFooterImg} alt="Логотип" />
        </a>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <SearchWrapper />

        <div className="sidebar mt-3">
          <OffCanvasProfile accessToken={accessToken?.value} />
        </div>

        <hr className="my-2" />

        <div className="sidebar">
          <ul className="nav">
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

            {/* <li className="nav-item has-submenu">
              <a className="nav-link" href="#">
                Отделения и центры
                <span className="caret">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 88.07 52.25"
                  >
                    <path d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                  </svg>
                </span>
              </a>

              <ul className="submenu collapse">
                <li>
                  <a className="nav-link" href="department.html">
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
          </ul>
        </div>

        <hr className="my-2" />

        <div className="sidebar">
          <ul className="nav">
            <li className="nav-item has-submenu">
              <a className="nav-link" href="#">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 11">
                    <path d="M5,2.75c-1.1,0-1.99,.82-1.99,1.83s.89,1.83,1.99,1.83,1.99-.82,1.99-1.83-.89-1.83-1.99-1.83Zm0,2.75c-.55,0-1-.41-1-.92s.45-.92,1-.92,1,.41,1,.92-.44,.92-1,.92Z" />
                    <path d="M5,11c-.85,0-1.65-.37-2.14-1.01C.96,7.58,0,5.77,0,4.61,0,2.06,2.24,0,5,0s5,2.06,5,4.61c0,1.16-.96,2.98-2.86,5.38-.5,.64-1.29,1.01-2.14,1.01ZM5,1c-2.16,0-3.91,1.62-3.92,3.61,0,.92,.94,2.62,2.65,4.8,.51,.65,1.48,.78,2.18,.32,.13-.09,.25-.2,.35-.32,1.71-2.17,2.65-3.88,2.65-4.8,0-1.99-1.76-3.61-3.92-3.61h.01Z" />
                  </svg>
                </span>
                Адреса клиник
              </a>
              <ul className="submenu collapse show">
                <HeaderOffices />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
