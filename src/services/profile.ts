export async function getPatient(patientID: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export async function getPatientPlannedVisits(patientID: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/planned-visits`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export async function getPatientFinishedVisits(patientID: string, visitType: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/finished-visits?type=${visitType}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export async function getVisitFile(patientID: string, filePath: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/file?file_path=${filePath}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}
