export const dynamic = "force-dynamic"

import { NextResponse } from "next/server"

export async function GET() {
  return send()
}

export async function POST() {
  return send()
}

async function send() {
  try {
    const key = process.env.RESEND_API_KEY
    if (!key) {
      return NextResponse.json({ error: "RESEND_API_KEY is not configured" }, { status: 500 })
    }

    const { Resend } = await import("resend")
    const resend = new Resend(key)

    const emailData = await resend.emails.send({
      from: "Portfolio Test <onboarding@resend.dev>",
      to: ["mukulg283@gmail.com"],
      subject: "✅ Portfolio Email Test",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2>✅ Test Email from Portfolio</h2>
          <p>This is a test email to confirm your portfolio can send emails successfully.</p>
          <ul>
            <li>Environment: ${process.env.NODE_ENV || "unknown"}</li>
            <li>Timestamp (IST): ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</li>
          </ul>
          <p>If you received this, email sending is working.</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Test email sent to mukulg283@gmail.com",
      emailId: emailData.data?.id,
    })
  } catch (error: any) {
    console.error("Test email error:", error)
    return NextResponse.json({ error: error?.message || "Failed to send test email" }, { status: 500 })
  }
}
