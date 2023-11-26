export async function getSpecialists(searchParams: URLSearchParams) {
  const specialists = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/specialists?${searchParams.toString()}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return specialists;
}

export async function getSpecializations() {
  const specializations = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/specialists/specializations`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return specializations;
}

export async function getService(id: string, catalog_type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/catalog/${catalog_type}/services/${id}`,
    { cache: "no-store" }
  );

  const errorCode = res.ok ? false : res.status;
  return { errorCode, service: await res.json() };
}

export async function getPromotions() {
  const promotions = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/promotions`, {
    cache: "no-store",
  }).then((res) => res.json());

  return promotions;
}

export async function getDocumentsCategories() {
  const categories = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/documents`, {
    cache: "no-store",
  }).then((res) => res.json());

  return categories;
}
