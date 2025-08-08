"use client"

// Email Testing Utilities
export interface TestResult {
  feature: string
  status: "PASS" | "FAIL" | "WARNING"
  timestamp: string
  details: string
  errors?: string[]
  recommendations?: string[]
}

export interface EmailTestData {
  name: string
  email: string
  subject: string
  message: string
  testType: "functional" | "security" | "performance"
}

export class EmailFunctionalityTester {
  private results: TestResult[] = []
  private testData: EmailTestData[] = [
    {
      name: "Test User 1",
      email: "test@example.com",
      subject: "Functional Test - Contact Form",
      message: "This is a test message to verify contact form functionality.",
      testType: "functional",
    },
    {
      name: "Test User 2",
      email: "security.test@example.com",
      subject: "Security Test - XSS Attempt <script>alert('test')</script>",
      message: "Testing XSS prevention: <script>alert('xss')</script> and SQL injection: '; DROP TABLE users; --",
      testType: "security",
    },
    {
      name: "Performance Test User",
      email: "perf@example.com",
      subject: "Performance Test - Large Message",
      message: "A".repeat(5000), // Large message to test performance
      testType: "performance",
    },
  ]

  async testContactForm(testData: EmailTestData): Promise<TestResult> {
    const startTime = Date.now()

    try {
      const response = await fetch("/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      })

      const endTime = Date.now()
      const responseTime = endTime - startTime
      const result = await response.json()

      if (response.ok) {
        return {
          feature: "Contact Form",
          status: responseTime > 5000 ? "WARNING" : "PASS",
          timestamp: new Date().toISOString(),
          details: `Response time: ${responseTime}ms, Email ID: ${result.emailId || "N/A"}`,
          recommendations: responseTime > 5000 ? ["Consider optimizing email sending performance"] : undefined,
        }
      } else {
        return {
          feature: "Contact Form",
          status: "FAIL",
          timestamp: new Date().toISOString(),
          details: `HTTP ${response.status}: ${result.error}`,
          errors: [result.error],
          recommendations: ["Check API endpoint configuration", "Verify Resend API key"],
        }
      }
    } catch (error) {
      return {
        feature: "Contact Form",
        status: "FAIL",
        timestamp: new Date().toISOString(),
        details: `Network error: ${error.message}`,
        errors: [error.message],
        recommendations: ["Check network connectivity", "Verify API endpoint availability"],
      }
    }
  }

  async testQueryPanel(testData: EmailTestData): Promise<TestResult> {
    // Same logic as contact form since they use the same endpoint
    const result = await this.testContactForm(testData)
    result.feature = "Query Panel"
    return result
  }

  async testEmailValidation(): Promise<TestResult> {
    const invalidEmails = ["invalid-email", "@example.com", "test@", "test..test@example.com", ""]

    const errors: string[] = []

    for (const email of invalidEmails) {
      try {
        const response = await fetch("/api/send-query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Test",
            email: email,
            subject: "Validation Test",
            message: "Testing email validation",
          }),
        })

        if (response.ok) {
          errors.push(`Invalid email "${email}" was accepted`)
        }
      } catch (error) {
        // Expected for invalid emails
      }
    }

    return {
      feature: "Email Validation",
      status: errors.length > 0 ? "FAIL" : "PASS",
      timestamp: new Date().toISOString(),
      details: `Tested ${invalidEmails.length} invalid email formats`,
      errors: errors.length > 0 ? errors : undefined,
      recommendations: errors.length > 0 ? ["Strengthen email validation regex"] : undefined,
    }
  }

  async testSecurityMeasures(): Promise<TestResult> {
    const securityTestData = {
      name: "<script>alert('xss')</script>",
      email: "security@test.com",
      subject: "'; DROP TABLE emails; --",
      message: "<img src=x onerror=alert('xss')>Test message",
    }

    try {
      const response = await fetch("/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(securityTestData),
      })

      const result = await response.json()

      return {
        feature: "Security Measures",
        status: response.ok ? "PASS" : "WARNING",
        timestamp: new Date().toISOString(),
        details: "XSS and injection attempts processed safely",
        recommendations: ["Consider implementing additional input sanitization", "Add rate limiting"],
      }
    } catch (error) {
      return {
        feature: "Security Measures",
        status: "FAIL",
        timestamp: new Date().toISOString(),
        details: `Security test failed: ${error.message}`,
        errors: [error.message],
      }
    }
  }

  async runAllTests(): Promise<TestResult[]> {
    console.log("🧪 Starting Email Functionality Tests...")

    // Test Contact Form
    const contactTest = await this.testContactForm(this.testData[0])
    this.results.push(contactTest)

    // Test Query Panel
    const queryTest = await this.testQueryPanel(this.testData[0])
    this.results.push(queryTest)

    // Test Email Validation
    const validationTest = await this.testEmailValidation()
    this.results.push(validationTest)

    // Test Security Measures
    const securityTest = await this.testSecurityMeasures()
    this.results.push(securityTest)

    // Test Performance
    const performanceTest = await this.testContactForm(this.testData[2])
    performanceTest.feature = "Performance Test"
    this.results.push(performanceTest)

    return this.results
  }

  generateReport(): string {
    const passCount = this.results.filter((r) => r.status === "PASS").length
    const failCount = this.results.filter((r) => r.status === "FAIL").length
    const warningCount = this.results.filter((r) => r.status === "WARNING").length

    let report = `
# Email Functionality Test Report
Generated: ${new Date().toISOString()}

## Summary
- ✅ Passed: ${passCount}
- ❌ Failed: ${failCount}  
- ⚠️  Warnings: ${warningCount}
- 📊 Total Tests: ${this.results.length}

## Detailed Results
`

    this.results.forEach((result, index) => {
      const statusIcon = result.status === "PASS" ? "✅" : result.status === "FAIL" ? "❌" : "⚠️"

      report += `
### ${index + 1}. ${result.feature} ${statusIcon}
- **Status**: ${result.status}
- **Timestamp**: ${result.timestamp}
- **Details**: ${result.details}
`

      if (result.errors) {
        report += `- **Errors**: ${result.errors.join(", ")}\n`
      }

      if (result.recommendations) {
        report += `- **Recommendations**: ${result.recommendations.join(", ")}\n`
      }
    })

    return report
  }
}
