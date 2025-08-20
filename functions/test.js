export async function onRequest() {
  return new Response("Functions directory is working!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  })
}
