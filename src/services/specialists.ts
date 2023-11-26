export async function getSpecialist(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/specialists/${id}`, {
    cache: "no-store",
  });

  const errorCodeSpec = response.ok ? null : response.status;
  return { errorCodeSpec, specialist: await response.json() };
}

export async function getSpecialistServices(id: string, page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/specialists/${id}/services?page=${page}`,
    { cache: "no-store" }
  );

  return response.json();
}
