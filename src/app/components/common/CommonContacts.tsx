"use client";

import Link from "next/link";
import Script from "next/script";

export default function CommonContacts() {
  return (
    <>
      <div className="nav-mobile-scroll fw-semibold mb-4">
        <div className="linebar" id="adresses-tab" role="tablist">
          <ul className="nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                href="#"
                id="adresses-2-tab"
                data-bs-toggle="pill"
                data-bs-target="#adresses-2"
                role="tab"
                aria-controls="adresses-2"
                aria-selected="false"
              >
                Ессентуки
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#"
                id="adresses-1-tab"
                data-bs-toggle="pill"
                data-bs-target="#adresses-1"
                role="tab"
                aria-controls="adresses-1"
                aria-selected="true"
              >
                Пятигорск
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#"
                id="adresses-3-tab"
                data-bs-toggle="pill"
                data-bs-target="#adresses-3"
                role="tab"
                aria-controls="adresses-3"
                aria-selected="false"
              >
                Минеральные Воды
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content" id="adresses-tabContent">
        <div
          className="tab-pane fade"
          id="adresses-1"
          role="tabpanel"
          aria-labelledby="adresses-1-tab"
          tabIndex={0}
        >
          <div className="bg-white shadow rounded-3 overflow-hidden mb-5">
            <div className="row g-0">
              <div className="col-lg-4 address-card-caption">
                <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                  <h3 className="address-card-title mb-3">
                    <Link href="branch.html" className="link-secondary">
                      4Д на Кузнечной
                    </Link>
                  </h3>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Адрес:</div>
                    <div className="address-value">г. Пятигорск, ул. Кузнечная, 26</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Телефон:</div>
                    <Link href="tel:+79288284001" title="" className="address-value link-secondary">
                      +7 (928) 828-40-01
                    </Link>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Время работы:</div>
                    <div className="address-value">пн-вс 8:00 - 20:00</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Электронная почта:</div>
                    <Link
                      href="mailto:klinika@yzi4d.ru"
                      title=""
                      className="address-value link-secondary"
                    >
                      klinika@yzi4d.ru
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="map" id="Map1"></div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-3 overflow-hidden mb-5">
            <div className="row g-0">
              <div className="col-lg-4 address-card-caption">
                <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                  <h3 className="address-card-title mb-3">
                    <Link href="branch.html" className="link-secondary">
                      4Д на Калинина
                    </Link>
                  </h3>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Адрес:</div>
                    <div className="address-value">г. Пятигорск, пр. Калинина, 107</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Телефон:</div>
                    <Link href="tel:+79288284001" title="" className="address-value link-secondary">
                      +7 (928) 828-40-01
                    </Link>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Время работы:</div>
                    <div className="address-value">пн-вс 8:00 - 20:00</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Электронная почта:</div>
                    <Link
                      href="mailto:klinika@yzi4d.ru"
                      title=""
                      className="address-value link-secondary"
                    >
                      klinika@yzi4d.ru
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="map" id="Map2"></div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-3 overflow-hidden mb-5">
            <div className="row g-0">
              <div className="col-lg-4 address-card-caption">
                <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                  <h3 className="address-card-title mb-3">
                    <Link href="branch.html" className="link-secondary">
                      4Д на Пушкинской
                    </Link>
                  </h3>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Адрес:</div>
                    <div className="address-value">г. Пятигорск, ул. Пушкинская, 3а</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Телефон:</div>
                    <Link href="tel:+79288284001" title="" className="address-value link-secondary">
                      +7 (928) 828-40-01
                    </Link>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Время работы:</div>
                    <div className="address-value">пн-вс 8:00 - 20:00</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Электронная почта:</div>
                    <Link
                      href="mailto:klinika@yzi4d.ru"
                      title=""
                      className="address-value link-secondary"
                    >
                      klinika@yzi4d.ru
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="map" id="Map5"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade show active"
          id="adresses-2"
          role="tabpanel"
          aria-labelledby="adresses-2-tab"
          tabIndex={0}
        >
          <div className="bg-white shadow rounded-3 overflow-hidden mb-5">
            <div className="row g-0">
              <div className="col-lg-4 address-card-caption">
                <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                  <h3 className="address-card-title mb-3">
                    <Link href="branch.html" className="link-secondary">
                      4Д на Володарского
                    </Link>
                  </h3>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Адрес:</div>
                    <div className="address-value">г. Ессентуки, ул. Володарского, 25/2</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Телефон:</div>
                    <Link href="tel:+79288284001" title="" className="address-value link-secondary">
                      +7 (928) 828-40-01
                    </Link>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Время работы:</div>
                    <div className="address-value">пн-вс 8:00 - 20:00</div>
                  </div>

                  <div className="pt-3 mt-auto">
                    <div className="mb-2">
                      <div className="address-title text-muted">Главный врач:</div>
                      <div className="address-value">В.Ю. Рушниченко</div>
                    </div>

                    <div className="mb-2">
                      <div className="address-title text-muted">Принимает:</div>
                      <div className="address-value">вт 10:00 - 12:00</div>
                    </div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Электронная почта:</div>
                    <Link
                      href="mailto:klinika@yzi4d.ru"
                      title=""
                      className="address-value link-secondary"
                    >
                      klinika@yzi4d.ru
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="map" id="Map3"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="adresses-3"
          role="tabpanel"
          aria-labelledby="adresses-3-tab"
          tabIndex={0}
        >
          <div className="bg-white shadow rounded-3 overflow-hidden mb-5">
            <div className="row g-0">
              <div className="col-lg-4 address-card-caption">
                <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                  <h3 className="address-card-title mb-3">
                    <Link href="branch.html" className="link-secondary">
                      4Д на XXII Партсъезда
                    </Link>
                  </h3>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Адрес:</div>
                    <div className="address-value">
                      г. Минеральные Воды, пр. XXII Партсъезда, 32А
                    </div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Телефон:</div>
                    <Link href="tel:+79288284001" title="" className="address-value link-secondary">
                      +7 (928) 828-40-01
                    </Link>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Время работы:</div>
                    <div className="address-value">пн-вс 8:00 - 20:00</div>
                  </div>

                  <div className="mb-2 mb-md-3">
                    <div className="address-title text-muted">Электронная почта:</div>
                    <Link
                      href="mailto:klinika@yzi4d.ru"
                      title=""
                      className="address-value link-secondary"
                    >
                      klinika@yzi4d.ru
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="map" id="Map4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=3b2b3d29-dd30-4d85-b6e8-eb15867d9469"
        type="text/javascript"
      />
      <Script src="/js/maps.js" type="text/javascript" />
    </>
  );
}
