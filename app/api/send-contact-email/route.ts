import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const emailData = {
      to: process.env.EMAIL_ADDRESS || "mykjcs2023@gmail.com",
      from: process.env.EMAIL_ADDRESS || "mykjcs2023@gmail.com",
      subject: `📧 New Contact Message - ${formData.subject || "General Inquiry"}`,
      text: `
New message from KFT website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject || "General Inquiry"}

Message:
${formData.message}

Sent: ${new Date().toLocaleString()}
      `,
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: process.env.EMAIL_ADDRESS || "mykjcs2023@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "General Inquiry",
          message: formData.message,
          phone: formData.phone || "Not provided",
        },
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully!",
    })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ success: false, message: "Failed to send contact message" }, { status: 500 })
  }
}
