export async function getPatient(patientID: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}`, {
        cache: "no-store",
    });

    return response.json();
}

export async function getPatientPlannedVisits(patientID: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/patients/${patientID}/planned-visits`, {
        cache: "no-store",
    });

    return response.json();
}
