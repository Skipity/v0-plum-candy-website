import { EmailMessage } from "cloudflare:email"
import createMimeMessage from "mimetext"

export async function onRequestPost({ request, env }) {
  try {
    // Parse form data
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Basic validation
    if (!name || !email || !message) {
      return new Response("Missing form fields", { status: 400 })
    }

    // Build the MIME message
    const msg = createMimeMessage()
    msg.setSender({ name: "Plum Candy", addr: "plumcandy@aaliyah.com.br" })
    msg.setRecipient("plumcandy@aaliyah.com.br")
    msg.setSubject(`Contact Form: ${subject || "General Inquiry"}`)
    msg.setHeader("Reply-To", `${name} <${email}>`)
    msg.addMessage({
      contentType: "text/plain",
      data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`,
    })

    // Create and send the EmailMessage
    const emailMessage = new EmailMessage(
      "plumcandy@aaliyah.com.br", // From address
      "plumcandy@aaliyah.com.br", // To address (verified destination)
      msg.asRaw(),
    )
    await env.CONTACT_FORM_EMAIL.send(emailMessage)

    return new Response("Thank you! Your message has been sent.", { status: 200 })
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
}
