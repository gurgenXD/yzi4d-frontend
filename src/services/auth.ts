export async function login(username: string, password: string) {
  const basic_auth = btoa(`${username}:${password}`);

  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/auth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic_auth}`,
    },
    cache: "no-store",
    credentials: "include",
  });

  return { data: await response.json(), status: response.status };
}

export async function logout(patientID: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/auth/token/${patientID}`, {
    method: "DELETE",
    cache: "no-store",
    credentials: "include",
  });

  return { data: await response.json(), status: response.status };
}
