export async function getPatient(token: string, patientID: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return { data: await response.json(), status: response.status };
}

export async function getPatientPlannedVisits(token: string, patientID: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/planned-visits`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
}

export async function getPatientFinishedVisits(
  token: string,
  patientID: string,
  visitType: string
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/finished-visits?type=${visitType}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
}

export async function getVisitFile(token: string, patientID: string, filePath: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/file?file_path=${filePath}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return await response.json();
}
