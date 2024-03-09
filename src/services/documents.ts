export async function getDocumentCategories() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/documents`, {
    cache: "no-store",
  });

  return response.json();
}
