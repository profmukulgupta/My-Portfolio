import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // This endpoint is for testing purposes only
    const { testType, ...testData } = await request.json()

    // Log test attempt
    console.log("=== EMAIL FUNCTIONALITY TEST ===")
    console.log("Test Type:", testType)
    console.log("Test Data:", testData)
    console.log("Timestamp:", new Date().toISOString())
    console.log("IP:", request.ip || "Unknown")
    console.log("================================")

    // Simulate different test scenarios
    switch (testType) {
      case "validation":
        // Test email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(testData.email)) {
          return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
        }
        break

      case "security":
        // Test for potential security issues
        const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+=/i, /DROP\s+TABLE/i, /SELECT.*FROM/i]

        const content = `${testData.name} ${testData.subject} ${testData.message}`
        const hasSuspiciousContent = suspiciousPatterns.some((pattern) => pattern.test(content))

        if (hasSuspiciousContent) {
          console.warn("Suspicious content detected in test:", content)
        }
        break

      case "performance":
        // Simulate processing delay for large messages
        if (testData.message && testData.message.length > 1000) {
          await new Promise((resolve) => setTimeout(resolve, 2000))
        }
        break
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Test completed successfully",
      testId: `test_${Date.now()}`,
      processedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Email test error:", error)
    return NextResponse.json({ error: "Test failed", details: error.message }, { status: 500 })
  }
}
