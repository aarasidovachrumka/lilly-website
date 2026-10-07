export async function onRequest() {
  const FANVUE_URL =
    "https://www.fanvue.com/heylilyblake/fv-4";

  return Response.redirect(FANVUE_URL, 302);
}