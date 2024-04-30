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

export async function changePassword(patientID: string, password: string, new_password: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_YZI4D_API}/auth/change-password/${patientID}`,
    {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        current_password: password,
        new_password: new_password,
      }),
    }
  );

  return { data: await response.json(), status: response.status };
}

export async function generatePassword(username: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_YZI4D_API}/auth/generate-password`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });

  return { data: await response.json(), status: response.status };
}
