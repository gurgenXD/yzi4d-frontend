"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";

function formatPatientName(patient: any) {
  return `${patient.surname} ${patient.name} ${
    patient.patronymic ? `${patient.patronymic[0]}.` : null
  }`;
}

function formatMemberName(member: string) {
  const [surname, name, patronymic] = member.split(" ");
  return `${surname} ${name} ${patronymic ? `${patronymic[0]}.` : null}`;
}

export default function PatientBlock({
  patient,
  isLoading,
  error,
}: {
  patient: any;
  isLoading: boolean;
  error: boolean;
}) {
  if (isLoading) return <PlaceholderLoading height={200} />;
  if (error) return <PlaceholderError height={200} />;

  return (
    <ul className="nav">
      {patient.members.length ? (
        <li className="nav-item has-submenu">
          <a className="nav-link align-items-start active" href="#">
            <span className="text-truncate fw-semibold">
              {formatPatientName(patient)}

              <span className="d-block f-2 fs-7 text-dark mt-1">{patient.age}</span>
            </span>

            <span className="caret">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                <path d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
              </svg>
            </span>
          </a>

          <ul className="submenu collapse show">
            {patient.members.map((member: any) => (
              <li key={member.id}>
                <a className="nav-link" href={`/profile/${member.id}`}>
                  {formatMemberName(member.full_name)}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <div className="py-2">
            <span className="text-truncate fw-semibold text-secondary">
              {formatPatientName(patient)}

              <span className="d-block f-2 fs-7 text-dark mt-1">{patient.age}</span>
            </span>
          </div>
        </li>
      )}
    </ul>
  );
}
