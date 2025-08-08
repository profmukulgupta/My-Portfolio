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

    // Log the query to console (you can see this in Vercel logs)
    console.log("=== NEW QUERY SUBMITTED ===")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("IP:", request.ip || "Unknown")
    console.log("User Agent:", request.headers.get("user-agent") || "Unknown")
    console.log("===============================")

    // In production, you could also send this to your email
    // using services like Resend, SendGrid, or Nodemailer

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
