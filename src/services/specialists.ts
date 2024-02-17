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

export async function getSpecialists(
  pageIndex: number,
  canOnline: boolean,
  canAdult: boolean,
  canChild: boolean,
  searchQuery: string,
  specializationId: string
) {
  const params = new URLSearchParams({ page: pageIndex.toString() });

  canOnline ? params.append("can_online", canOnline.toString()) : null;
  canAdult ? params.append("can_adult", canAdult.toString()) : null;
  canChild ? params.append("can_child", canChild.toString()) : null;
  searchQuery ? params.append("search_query", searchQuery) : null;
  specializationId ? params.append("specialization_id", specializationId) : null;

  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/specialists?${params}`, {
    cache: "no-store",
  });

  return response.json();
}
