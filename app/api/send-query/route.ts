export const dynamic = "force-dynamic"

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    // Determine priority based on keywords
    const urgentKeywords = ["urgent", "asap", "emergency", "critical", "important"]
    const businessKeywords = ["project", "collaboration", "business", "opportunity", "partnership"]
    const text = `${subject} ${message}`.toLowerCase()

    let priority = "Low"
    if (urgentKeywords.some((keyword) => text.includes(keyword))) priority = "High"
    else if (businessKeywords.some((keyword) => text.includes(keyword))) priority = "Medium"

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // No crash at build time; return a safe error at runtime
      console.warn("[send-query] Missing RESEND_API_KEY. Logging query instead of sending email.")
      console.log("=== QUERY LOGGED (EMAIL NOT SENT) ===")
      console.log("Timestamp:", timestamp)
      console.log("Priority:", priority)
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Subject:", subject)
      console.log("Message:", message)
      console.log("=====================================")

      return NextResponse.json(
        { error: "Email service is not configured. Please set RESEND_API_KEY.", code: "MISSING_RESEND_API_KEY" },
        { status: 500 },
      )
    }

    // Dynamically import the SDK only when needed
    const { Resend } = await import("resend")
    const resend = new Resend(apiKey)

    const emailData = await resend.emails.send({
      from: "Portfolio Query <onboarding@resend.dev>",
      to: ["mukulg283@gmail.com"],
      reply_to: email,
      subject: `🔔 New Portfolio Query: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html><head><meta charSet="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6441a5, #0cebeb); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd; }
            .priority { display:inline-block;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:bold;text-transform:uppercase; }
            .priority.high { background:#fee2e2;color:#dc2626; }
            .priority.medium { background:#fef3c7;color:#d97706; }
            .priority.low { background:#d1fae5;color:#059669; }
            .message-box { background:#fff;padding:15px;border-radius:6px;border-left:4px solid #6441a5;margin-top:10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📧 New Portfolio Query</h1>
            <p>Submitted via your website</p>
          </div>
          <div class="content">
            <div style="text-align:right;margin-bottom:20px;"><span class="priority ${priority.toLowerCase()}">Priority: ${priority}</span></div>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📋 Subject:</strong> ${subject}</p>
            <div><strong>💬 Message:</strong><div class="message-box">${message.replace(/\n/g, "<br>")}</div></div>
            <p><strong>🕒 Received:</strong> ${timestamp} (IST)</p>
            <p style="margin-top:16px;">Reply directly to the sender by hitting "Reply".</p>
          </div>
        </body></html>
      `,
    })

    console.log("Email sent:", emailData.data?.id || "Failed")

    return NextResponse.json({ success: true, message: "Query sent successfully", emailId: emailData.data?.id })
  } catch (error: any) {
    console.error("Query submission error:", error)
    return NextResponse.json(
      { error: "Failed to send query. Please try again or email me directly.", details: error?.message },
      { status: 500 },
    )
  }
}
