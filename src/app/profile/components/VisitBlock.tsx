"use client";

import PlannedVisitBlock from "@/app/profile/components/PlannedVisitBlock";
import FinishedVisitBlock from "@/app/profile/components/FinishedVisitBlock";
import { useState } from "react";

export default function VisitBlock({ patientID }: { patientID: string }) {
  const [visitStatus, setVisitStatus] = useState("planned");

  return (
    <div className="col">
      <h1 className="d-none d-lg-block fs-3 mb-2 mt-lg-3 pt-lg-1">Посещения</h1>

      <div className="nav-mobile-scroll fw-semibold mb-4 mb-lg-3 mt-n3 mt-lg-0">
        <nav className="linebar sub-bar">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link ${visitStatus == "planned" ? "active" : null}`}
                role="button"
                onClick={() => {
                  setVisitStatus("planned");
                }}
              >
                Запланированные
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${visitStatus == "finished" ? "active" : null}`}
                role="button"
                onClick={() => {
                  setVisitStatus("finished");
                }}
              >
                Завершённые
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {visitStatus == "planned" ? (
        <PlannedVisitBlock patientID={patientID} />
      ) : (
        <FinishedVisitBlock patientID={patientID} visitType="services" />
      )}
    </div>
  );
}
