import Image from "next/image";

import YtImg from "@/assets/yt-icon.svg";
import VkImg from "@/assets/vk-icon.svg";
import OdnImg from "@/assets/odn-icon.svg";
import TgImg from "@/assets/tg-icon.svg";
import LogoFooterImg from "@/assets/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="footer bg-light-blue mt-auto py-lg-6 py-5">
      <div className="container">
        <div className="row align-items-center mb-2">
          <div className="col-md mb-3">
            <a href="#" className="d-inline-block">
              <Image src={LogoFooterImg} alt="Логотип футера" className="logo-footer" />
            </a>
          </div>
        </div>

        <div className="row gx-lg-6">
          <div className="col-lg-auto">
            <div className="d-sm-flex flex-lg-column align-items-center align-items-lg-start mb-2 mb-lg-0">
              <div className="me-5 me-lg-0 mb-3 mb-lg-4">
                <a
                  href="tel:+79288284001"
                  title=""
                  className="phone-footer link-secondary fw-extrabold d-flex mb-1"
                >
                  +7 (928) 828-40-01
                </a>

                <div className="schedule d-flex">
                  <span className="text-white bg-danger px-1 me-1">без выходных</span>с 7:00 до
                  20:00
                </div>
              </div>

              <div className="d-flex mb-3 mb-lg-0">
                <a href="https://t.me/tg4dpolyclinic" target="_blank" className="social-link">
                  <Image src={TgImg} alt="Телеграм" />
                </a>

                <a href="https://vk.com/4dpolyclinic" target="_blank" className="social-link">
                  <Image src={VkImg} alt="Вконтакте" />
                </a>

                <a
                  href="https://www.youtube.com/@4dpolyclinic"
                  target="_blank"
                  className="social-link"
                >
                  <Image src={YtImg} alt="Ютуб" />
                </a>

                <a
                  href="https://ok.ru/group/52475215151320"
                  target="_blank"
                  className="social-link"
                >
                  <Image src={OdnImg} alt="Однокласники" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <ul className="list-unstyled d-flex flex-wrap footer-links pb-2 mb-3">
              <li className="me-4 mb-1">
                <a href="/specialists" className="link-secondary spaced-link">
                  Специалисты
                </a>
              </li>
              <li className="me-4 mb-1">
                <a href="/catalog/services/categories" className="link-secondary spaced-link">
                  Услуги
                </a>
              </li>
              <li className="me-4 mb-1">
                <a href="/catalog/analyzes/categories" className="link-secondary spaced-link">
                  Анализы
                </a>
              </li>
              <li className="me-4 mb-1">
                <a href="/promotions" className="link-secondary spaced-link">
                  Спецпредложения
                </a>
              </li>
              {/* <li className="me-4 mb-1">
                <a
                  href="content.html"
                  className="link-secondary spaced-link"
                >
                  Пациентам
                </a>
              </li>
              <li className="me-4 mb-1">
                <a
                  href="content.html"
                  className="link-secondary spaced-link"
                >
                  О нас
                </a>
              </li> */}
              <li className="me-4 mb-1">
                <a href="/contacts" className="link-secondary spaced-link">
                  Контакты
                </a>
              </li>
              <li className="nav-item">
              <a href="/vacancies" className="link-secondary spaced-link">
                  Вакансии
                </a>
              </li>
            </ul>

            <ul className="list-unstyled footer-text mb-0">
              <li className="mb-1">
                <a href="/documents" className="link-secondary">
                  Документы и лицензии
                </a>
              </li>
              <li className="text-muted">
                Имеются противопоказания. Необходима консультация специалиста.
              </li>
              <li className="text-muted">© {new Date().getFullYear()} 4Д Поликлиника</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
