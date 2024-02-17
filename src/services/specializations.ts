export async function getSpecializations() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/specializations`, {
    cache: "no-store",
  });

  return response.json();
}
