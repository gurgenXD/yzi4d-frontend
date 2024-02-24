"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { getPatientPlannedVisits } from "@/services/profile";
import useSWR from "swr";

export default function VisitBlock({ patientID, isLoading, error }: { patientID: string, isLoading: boolean, error: boolean }) {
  const {
    data: planned_visits,
    isLoading: curIsLoading,
    error: curError,
  } = useSWR("planned_visits", async (_) => {
    return await getPatientPlannedVisits(patientID);
  });

  if (isLoading || curIsLoading) return <div className="col"><PlaceholderLoading height={200} /></div >;
  if (error || curError) return <div className="col"><PlaceholderError height={200} /></div>;

  return (
    <div className="col">
      <h1 className="d-none d-lg-block fs-3 mb-2 mt-lg-3 pt-lg-1">Посещения</h1>

      <div className="nav-mobile-scroll fw-semibold mb-4 mb-lg-3 mt-n3 mt-lg-0">
        <nav className="linebar sub-bar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="profile-visits.html">Запланированные</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile-visits.html">Завершённые</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="pt-lg-1">
        {planned_visits.map((visit: any) => (
          <div className="pt-lg-1">
            <div className="profile-item position-relative bg-white rounded-3 shadow py-3 px-3 px-sm-4 mb-3 mb-sm-4">
              <div className="border-bottom pb-3 mb-3">
                <div className="row gx-7">
                  <div className="col">
                    <div className="fs-9 text-muted">{visit.address}</div>
                    <div className="fs-8 fw-medium text-muted">{visit.date_start}</div>
                    <div className="fs-6 text-muted">{visit.specialist}</div>
                  </div>

                  <div className="col">
                    <div className="f-2 fs-4 lh-1 fw-black text-sm-end mb-2">
                      <span className="number">{visit.total_price.toLocaleString("ru")}</span>
                      ₽
                    </div>
                  </div>
                </div>
              </div>

              {visit.services.map((service: any) => (
                <div className="row mb-3">
                  <div className="col-9">
                    <h6 className="fw-semibold lh-base mb-1">{service.name}</h6>
                  </div>

                  <div className="col-3">
                    <div className="col-sm-auto">
                      <div className="fs-7 fw-medium text-sm-end">{service.price.toLocaleString("ru")} ₽</div>
                      {/* <div className="fs-8 lh-1 text-muted text-sm-end">Забронировано</div> */}
                    </div>
                  </div>
                  {/* <a href="#" className="stretched-link"></a> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
