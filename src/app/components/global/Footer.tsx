import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-light-blue mt-auto py-lg-6 py-5">
      <div className="container">
        <div className="row align-items-center mb-2">
          <div className="col-md mb-3">
            <Link href="#" className="d-inline-block">
              <Image
                src="/img/logo-footer.svg"
                width={334}
                height={30}
                alt=""
                className="logo-footer"
              />
            </Link>
          </div>

          <div className="col-md-auto mb-3">
            <div className="d-flex flex-wrap align-items-center">
              <Link
                className="profile-link link-secondary text-nowrap spaced-link fs-7 me-4"
                href="https://lk.yzi4d.ru"
                target="_blank"
              >
                <span className="icon me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14">
                    <path d="M5.5,7c2.02,0,3.67-1.57,3.67-3.5S7.52,0,5.5,0,1.83,1.57,1.83,3.5s1.64,3.5,3.67,3.5Zm0-5.83c1.35,0,2.44,1.04,2.44,2.33s-1.1,2.33-2.44,2.33-2.44-1.04-2.44-2.33,1.1-2.33,2.44-2.33Zm0,7c-3.04,0-5.5,2.35-5.5,5.25,0,.32,.27,.58,.61,.58s.61-.26,.61-.58c0-2.26,1.92-4.08,4.28-4.08s4.28,1.83,4.28,4.08c0,.32,.28,.58,.61,.58s.61-.26,.61-.58c0-2.9-2.46-5.25-5.5-5.25Z" />
                  </svg>
                </span>
                Личный кабинет
              </Link>

              {/* <Link href="" className="btn btn-danger btn-sm">
                Записаться
              </Link> */}
            </div>
          </div>
        </div>

        <div className="row gx-lg-6">
          <div className="col-lg-auto">
            <div className="d-sm-flex flex-lg-column align-items-center align-items-lg-start mb-2 mb-lg-0">
              <div className="me-5 me-lg-0 mb-3 mb-lg-4">
                <Link
                  href="tel:+79288284001"
                  title=""
                  className="phone-footer link-secondary fw-extrabold d-flex mb-1"
                >
                  +7 (928) 828-40-01
                </Link>

                <div className="schedule d-flex">
                  <span className="text-white bg-danger px-1 me-1">без выходных</span>с 7:00 до
                  20:00
                </div>
              </div>

              <div className="d-flex mb-3 mb-lg-0">
                <Link href="https://t.me/tg4dpolyclinic" target="_blank" className="social-link">
                  <Image src="/img/dynamic-img/tg-icon.svg" width={16} height={16} alt="" />
                </Link>

                <Link href="https://vk.com/4dpolyclinic" target="_blank" className="social-link">
                  <Image src="/img/dynamic-img/vk-icon.svg" width={16} height={16} alt="" />
                </Link>

                <Link
                  href="https://www.youtube.com/@4dpolyclinic"
                  target="_blank"
                  className="social-link"
                >
                  <Image src="/img/dynamic-img/yt-icon.svg" width={16} height={16} alt="" />
                </Link>

                <Link
                  href="https://ok.ru/group/52475215151320"
                  target="_blank"
                  className="social-link"
                >
                  <Image src="/img/dynamic-img/odn-icon.svg" width={16} height={16} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <ul className="list-unstyled d-flex flex-wrap footer-links pb-2 mb-3">
              <li className="me-4 mb-1">
                <Link href="/specialists" className="link-secondary spaced-link">
                  Специалисты
                </Link>
              </li>
              <li className="me-4 mb-1">
                <Link href="/catalog/services/categories" className="link-secondary spaced-link">
                  Услуги
                </Link>
              </li>
              <li className="me-4 mb-1">
                <Link href="/catalog/analyzes/categories" className="link-secondary spaced-link">
                  Анализы
                </Link>
              </li>
              <li className="me-4 mb-1">
                <Link href="/promotions" className="link-secondary spaced-link">
                  Спецпредложения
                </Link>
              </li>
              {/* <li className="me-4 mb-1">
                <Link
                  href="content.html"
                  className="link-secondary spaced-link"
                >
                  Пациентам
                </Link>
              </li>
              <li className="me-4 mb-1">
                <Link
                  href="content.html"
                  className="link-secondary spaced-link"
                >
                  О нас
                </Link>
              </li> */}
              <li className="me-4 mb-1">
                <Link href="/contacts" className="link-secondary spaced-link">
                  Контакты
                </Link>
              </li>
            </ul>

            <ul className="list-unstyled footer-text mb-0">
              <li className="mb-1">
                <Link href="/documents" className="link-secondary">
                  Документы и лицензии
                </Link>
              </li>
              <li className="text-muted">
                Имеются противопоказания. Необходима консультация специалиста
              </li>
              <li className="text-muted">© {new Date().getFullYear()} 4Д Поликлиника</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
