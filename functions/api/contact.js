export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    if (!name || !email || !message) {
      return new Response("Missing form fields", { status: 400 })
    }

    const response = await env.EMAIL_SENDER.fetch("https://fake-url-for-binding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return new Response(`Error sending email: ${errorText}`, { status: 500 })
    }

    return new Response("Thank you! Your message has been sent.", { status: 200 })
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
}
