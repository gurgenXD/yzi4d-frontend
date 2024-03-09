"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { getPatientPlannedVisits } from "@/services/profile";
import useSWR from "swr";

function formatSpecialistName(full_name: string) {
  const [surname, name, patronymic] = full_name.split(" ");
  return `${surname} ${name[0]}. ${patronymic ? `${patronymic[0]}.` : null}`;
}

export default function PlannedVisitBlock({ patientID }: { patientID: string }) {
  const {
    data: planned_visits,
    isLoading: curIsLoading,
    error: curError,
  } = useSWR("planned_visits", async (_) => {
    return await getPatientPlannedVisits(patientID);
  });

  if (curIsLoading)
    return (
      <div className="col">
        <PlaceholderLoading height={200} />
      </div>
    );
  if (curError)
    return (
      <div className="col">
        <PlaceholderError height={200} />
      </div>
    );

  return (
    <div className="pt-lg-1">
      {planned_visits.map((visit: any) => (
        <div
          key={visit.file_path}
          className="profile-item position-relative bg-white rounded-3 shadow py-3 px-3 px-sm-4 mb-3 mb-sm-4"
        >
          <div className="row">
            <div className="col-md-3">
              <div className="pt-md-1 mb-3 mb-md-0">
                <div className="fs-7 fw-medium mb-1">{visit.date_start}</div>
                <div className="fs-10 text-dark text-opacity-75">{visit.address}</div>
                <h6 className="fw-semibold lh-base">{formatSpecialistName(visit.specialist)}</h6>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col">
                  {visit.services.map((service: any) => (
                    <div key={service.name} className="row gx-sm-6 mb-3">
                      <div className="col mb-3 mb-sm-0">
                        <p className="fs-8 mb-0">{service.name}</p>
                      </div>

                      <div className="col-sm-auto">
                        <div className="fs-6 lh-1 text-muted text-sm-end mt-1">
                          {service.price.toLocaleString("ru")}₽
                        </div>
                        {/* <div className="fs-8 lh-1 text-muted text-sm-end">Оплата на приёме</div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="row gx-sm-6">
                <div className="col mb-3 mb-sm-0"></div>
                <div className="col-sm-auto">
                  <div className="f-2 fs-4 lh-1 fw-black text-sm-end mb-2">
                    <span className="number">{visit.total_price.toLocaleString("ru")}</span>₽
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a href="profile-visit-details.html" className="stretched-link"></a> */}
        </div>
      ))}
    </div>
  );
}
