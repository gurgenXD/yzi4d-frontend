"use client";

import { useState } from "react";
import FinishedVisitBlock from "@/app/profile/components/FinishedVisitBlock";

export default function VisitBlock({ patientID }: { patientID: string }) {
  const [analyseType, setAnalyseType] = useState("ready");

  return (
    <div className="col">
      <h1 className="d-none d-lg-block fs-3 mb-2 mt-lg-3 pt-lg-1">Анализы</h1>

      <div className="nav-mobile-scroll fw-semibold mb-4 mb-lg-3 mt-n3 mt-lg-0">
        <nav className="linebar sub-bar">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link ${analyseType == "ready" ? "active" : null}`}
                role="button"
                onClick={() => {
                  setAnalyseType("ready");
                }}
              >
                Готовые
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {analyseType == "ready" ? (
        <FinishedVisitBlock patientID={patientID} visitType={"analyzes"} />
      ) : null}
    </div>
  );
}
