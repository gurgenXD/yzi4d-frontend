export async function createConsultation(name: string, phone: string, specialist: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/consultations`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      specialist: specialist,
    }),
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });

  return response;
}
