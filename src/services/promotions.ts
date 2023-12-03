export async function getPromotions() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/promotions`, {
    cache: "no-store",
  });

  return response.json();
}
