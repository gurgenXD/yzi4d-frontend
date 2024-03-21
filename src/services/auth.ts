export async function authPatient(username: string, password: string) {
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/auth/token`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  return { data: await response.json(), status: response.status };
}
