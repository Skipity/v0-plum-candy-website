export async function onRequestPost({ request, env }) {
  console.log("[v0] Contact function called")
  console.log("[v0] Available env bindings:", Object.keys(env || {}))

  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    console.log("[v0] Form data received:", { name, email, subject, message: message?.substring(0, 50) + "..." })

    if (!name || !email || !message) {
      console.log("[v0] Missing form fields")
      return new Response("Missing form fields", { status: 400 })
    }

    if (!env.EMAIL_SENDER) {
      console.log("[v0] EMAIL_SENDER binding not found")
      return new Response("Email service not configured", { status: 500 })
    }

    console.log("[v0] Calling EMAIL_SENDER service")
    const response = await env.EMAIL_SENDER.fetch("https://fake-url-for-binding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })

    console.log("[v0] EMAIL_SENDER response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] EMAIL_SENDER error:", errorText)
      return new Response(`Error sending email: ${errorText}`, { status: 500 })
    }

    console.log("[v0] Email sent successfully")
    return new Response("Thank you! Your message has been sent.", { status: 200 })
  } catch (error) {
    console.log("[v0] Contact function error:", error.message)
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
}
