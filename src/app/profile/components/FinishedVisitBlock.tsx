"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import { getPatientFinishedVisits, getVisitFile } from "@/services/profile";
import useSWR from "swr";
import { useCookies } from "react-cookie";

export default function FinishedVisitBlock({
  patientID,
  visitType,
}: {
  patientID: string;
  visitType: string;
}) {
  const [cookies, _] = useCookies(["accessToken"]);
  const {
    data: finished_visits,
    isLoading: curIsLoading,
    error: curError,
  } = useSWR("finished_visits", async (_) => {
    return await getPatientFinishedVisits(cookies.accessToken, patientID, visitType);
  });

  const downloadFile = async (patientID: string, filePath: string) => {
    const data = await getVisitFile(cookies.accessToken, patientID, filePath);

    const newFileName = filePath.split(/[\/\\]+/).at(-1);
    var a = document.createElement("a");
    a.href = "data:application/octet-stream;base64," + data;
    a.download = newFileName ? newFileName : filePath;
    a.click();
  };

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
      {finished_visits.map((visit: any) => (
        <div
          key={visit.file_path}
          className="profile-item position-relative bg-white rounded-3 shadow py-3 px-3 px-sm-4 mb-3 mb-sm-4"
        >
          <div className="row">
            <div className="col-md-3">
              <div className="pt-md-1 mb-3 mb-md-0">
                <div className="fs-7 fw-medium mb-1">{visit.date_receipt}</div>
              </div>
            </div>

            <div className="col">
              <div className="row gx-sm-6 mb-3">
                <div className="col mb-3 mb-sm-0">
                  <p className="fs-7 mb-0">{visit.service ? visit.service : visit.header}</p>
                </div>

                <div className="col-sm-auto">
                  <div className="fs-8 lh-1 text-muted text-sm-end mt-1">{visit.specialist}</div>
                </div>
              </div>
            </div>
          </div>
          <a
            onClick={() => {
              downloadFile(patientID, visit.file_path);
            }}
            role="button"
            className="stretched-link"
          ></a>
        </div>
      ))}
    </div>
  );
}
