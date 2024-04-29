export async function getPatient(patientID: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}`, {
    credentials: "include",
    cache: "no-store",
  });

  return { data: await response.json(), status: response.status };
}

export async function getPatientPlannedVisits(patientID: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/planned-visits`,
    {
      cache: "no-store",
      credentials: "include",
    }
  );

  return await response.json();
}

export async function getPatientFinishedVisits(patientID: string, visitType: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/finished-visits?type=${visitType}`,
    {
      cache: "no-store",
      credentials: "include",
    }
  );

  return await response.json();
}

export async function getVisitFile(patientID: string, filePath: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/file?file_path=${filePath}`,
    {
      cache: "no-store",
      credentials: "include",
    }
  );

  return await response.json();
}
