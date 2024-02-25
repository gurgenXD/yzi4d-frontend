"use client";

import PlannedVisitBlock from "@/app/components/profile/PlannedVisitBlock";
import FinishedVisitBlock from "@/app/components/profile/FinishedVisitBlock";
import { useState } from "react";

export default function VisitBlock({ patientID, isLoading, error }: { patientID: string, isLoading: boolean, error: boolean }) {
  const [visitType, setVisitType] = useState("planned");

  return (
    <div className="col">
      <h1 className="d-none d-lg-block fs-3 mb-2 mt-lg-3 pt-lg-1">Посещения</h1>

      <div className="nav-mobile-scroll fw-semibold mb-4 mb-lg-3 mt-n3 mt-lg-0">
        <nav className="linebar sub-bar">
          <ul className="nav">
            <li className="nav-item">
              <a className={`nav-link ${visitType == "planned" ? "active" : null}`} role="button" onClick={() => { setVisitType("planned") }}>Запланированные</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${visitType == "finished" ? "active" : null}`} role="button" onClick={() => { setVisitType("finished") }}>Завершённые</a>
            </li>
          </ul>
        </nav>
      </div>

      {visitType == "planned"
        ? <PlannedVisitBlock patientID={patientID} isLoading={isLoading} error={error} />
        : <FinishedVisitBlock patientID={patientID} isLoading={isLoading} error={error} />
      }
    </div >
  );
}
