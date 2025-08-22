import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Email configuration using KFT credentials
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: "mykjcs2023@gmail.com",
        pass: "qbim qsck hnkw ekgr",
      },
    })

    // Get current time for greeting
    const hour = new Date().getHours()
    let greeting = "Good Day!"

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning! 🌅"
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon! ☀️"
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good Evening! 🌇"
    } else {
      greeting = "Good Night! 🌙"
    }

    // Create comprehensive email content
    const subject = `🆘 New Aid Application - ${formData.fullName} from ${formData.city}`
    const emailBody = `
${greeting}

A new aid application has been submitted through the KFT website.

📋 AID APPLICATION DETAILS:
═══════════════════════════════════════

👤 PERSONAL INFORMATION:
• Full Name: ${formData.fullName}
• CNIC: ${formData.cnic}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}
• Address: ${formData.address}
• City: ${formData.city}

🆘 AID REQUEST DETAILS:
• Type of Aid: ${formData.aidType}
• Monthly Income: PKR ${formData.monthlyIncome}
• Family Members: ${formData.familyMembers}
• Urgency Level: ${formData.urgencyLevel}
• Applied Before: ${formData.hasAppliedBefore ? "Yes" : "No"}

📝 REASON FOR AID:
${formData.reasonForAid}

📅 Application Submitted: ${new Date().toLocaleString()}
🌐 Source: KFT Website Aid Application Form
🆔 Application ID: KFT-${Date.now().toString().slice(-6)}

═══════════════════════════════════════

⚡ PRIORITY ACTION REQUIRED:
${
  formData.urgencyLevel === "critical"
    ? "🚨 CRITICAL - Immediate attention needed!"
    : formData.urgencyLevel === "high"
      ? "⚠️ HIGH - Response needed within few days"
      : formData.urgencyLevel === "medium"
        ? "📋 MEDIUM - Response needed within 1-2 weeks"
        : "📝 LOW - Can be processed within 2-4 weeks"
}

Please review this application and contact the applicant for verification and further processing.

Best regards,
KFT Website System 🤖
    `

    // Send email to KFT team
    const mailOptions = {
      from: "mykjcs2023@gmail.com",
      to: "mykjcs2023@gmail.com",
      subject: subject,
      text: emailBody,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Aid application submitted successfully!",
    })
  } catch (error) {
    console.error("Error sending aid application email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send aid application",
      },
      { status: 500 },
    )
  }
}
