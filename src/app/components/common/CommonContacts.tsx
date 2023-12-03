"use client";

import Script from "next/script";
import useSWR from "swr";
import { getContacts } from "@/services/contacts";
import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { useState } from "react";

export default function CommonContacts() {
  const [mapsReady, setMapsReady] = useState(false);

  const {
    data: contacts,
    isLoading,
    error,
  } = useSWR("contacts", async (_) => {
    return await getContacts();
  });

  if (isLoading) return <PlaceholderLoading height={500} />;
  if (error) return <PlaceholderError height={500} />;

  return (
    <>
      <div className="nav-mobile-scroll fw-semibold mb-5">
        <div className="linebar" id="adresses-tab" role="tablist">
          <ul className="nav">
            {contacts.map((city: any) => (
              <li key={city.id} className="nav-item">
                <a
                  className={`nav-link ${city == contacts[0] ? "active" : ""}`}
                  href="#"
                  id={`adresses-${city.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#adresses-${city.id}`}
                  role="tab"
                  aria-controls={`adresses-${city.id}`}
                  aria-selected={city == contacts[0] ? true : false}
                >
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="tab-content" id="adresses-tabContent">
        {contacts.map((city: any) => (
          <div
            key={city.id}
            className={`tab-pane fade ${city == contacts[0] ? "show active" : ""}`}
            id={`adresses-${city.id}`}
            role="tabpanel"
            aria-labelledby={`adresses-${city.id}-tab`}
            tabIndex={0}
          >
            {city.offices.map((office: any) => (
              <div key={office.id} className="bg-white shadow rounded-3 overflow-hidden mb-5">
                <div className="row g-0">
                  <div className="col-lg-4 address-card-caption">
                    <div className="h-100 d-flex flex-column p-3 p-sm-4 p-md-5 p-lg-4 p-xl-5">
                      <h3 className="address-card-title mb-3">
                        <a href="branch.html" className="link-secondary">
                          {office.description}
                        </a>
                      </h3>

                      <div className="mb-2 mb-md-3">
                        <div className="address-title text-muted">Адрес:</div>
                        <div className="address-value">{office.address}</div>
                      </div>

                      <div className="mb-2 mb-md-3">
                        <div className="address-title text-muted">Телефон:</div>
                        <a
                          href="tel:+79288284001"
                          title=""
                          className="address-value link-secondary"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="mb-2 mb-md-3">
                        <div className="address-title text-muted">Время работы:</div>
                        <div className="address-value">{office.work_time}</div>
                      </div>

                      <div className="mb-2 mb-md-3">
                        <div className="address-title text-muted">Электронная почта:</div>
                        <a
                          href="mailto:klinika@yzi4d.ru"
                          title=""
                          className="address-value link-secondary"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="pt-3 mt-auto">
                        <div className="mb-2">
                          <div className="address-title text-muted">Главный врач:</div>
                          <div className="address-value">{office.main_doctor}</div>
                        </div>

                        <div className="mb-2">
                          <div className="address-title text-muted">Принимает:</div>
                          <div className="address-value">{office.main_doctor_work_time}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    {mapsReady ? (
                      <div className="map" id={`Map${city.id}${office.id}`}>
                        <Script id={`YMapCode${city.id}${office.id}`}>
                          {`
                            ymaps.ready(function () {
                              let map${city.id}${office.id} = document.getElementById("Map${city.id}${office.id}");
                              var yMap = new ymaps.Map(map${city.id}${office.id}, {
                                center: [${office.point_x}, ${office.point_y}],
                                zoom: 14,
                                controls: ["zoomControl"],
                              }),
                              yPlacemark = new ymaps.Placemark(
                                yMap.getCenter(),
                                {},
                                {
                                  iconLayout: "default#image",
                                  iconImageHref: "img/map-marker.svg",
                                  iconImageSize: [40, 57],
                                  iconImageOffset: [-20, -57],
                                }
                              );
                              yMap.behaviors.disable("scrollZoom");
                              yMap.geoObjects.add(yPlacemark);
                            });
                          `}
                        </Script>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Script
        onLoad={() => setMapsReady(true)}
        src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}`}
        type="text/javascript"
      />
    </>
  );
}
