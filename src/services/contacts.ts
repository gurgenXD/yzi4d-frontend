export async function getContacts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/contacts`, {
    cache: "no-store",
  });

  return response.json();
}
