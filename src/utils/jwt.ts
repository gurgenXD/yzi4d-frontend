export function getClaims(token: string | undefined) {
  if (token == undefined) {
    return;
  }

  const [_, payload] = token.split(".");
  return JSON.parse(atob(payload));
}
