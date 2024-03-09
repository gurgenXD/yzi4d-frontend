export async function getService(id: string, catalog_type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/catalog/${catalog_type}/services/${id}`,
    { cache: "no-store" }
  );

  const errorCode = res.ok ? false : res.status;
  return { errorCode, service: await res.json() };
}
