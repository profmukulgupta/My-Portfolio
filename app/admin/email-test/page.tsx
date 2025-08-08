"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailTestPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; emailId?: string; error?: string } | null>(
    null,
  )

  const sendTestEmail = async () => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch("/api/send-test-email", { method: "POST" })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Unknown error")
      }
      setResult({ success: true, message: data.message, emailId: data.emailId })
    } catch (err: any) {
      setResult({ success: false, message: "Failed to send test email", error: err.message })
    } finally {
      setLoading(false)
    }
  }

  const checkHealth = async () => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch("/api/email-health")
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Health check failed")
      setResult({
        success: data.hasKey,
        message: data.hasKey ? "RESEND_API_KEY is configured." : "RESEND_API_KEY is missing.",
      })
    } catch (err: any) {
      setResult({ success: false, message: "Health check failed", error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="section-padding">
      <Card className="glass-card max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Email Test Utilities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Use the actions below to verify that emails can be sent to mukulg283@gmail.com.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={sendTestEmail} disabled={loading}>
              {loading ? "Sending..." : "Send Test Email"}
            </Button>
            <Button variant="outline" onClick={checkHealth} disabled={loading}>
              {loading ? "Checking..." : "Check Email Health"}
            </Button>
            <Button variant="secondary" asChild>
              <a href="/api/send-test-email" target="_blank" rel="noopener noreferrer">
                Open Raw Test Endpoint
              </a>
            </Button>
          </div>

          {result && (
            <div
              className={`mt-4 rounded-md border p-3 text-sm ${
                result.success ? "border-green-500/30 bg-green-500/10 text-green-300" : "border-red-500/30 bg-red-500/10 text-red-300"
              }`}
            >
              <p className="font-medium">{result.message}</p>
              {result.emailId && <p className="mt-1">Email ID: {result.emailId}</p>}
              {result.error && <p className="mt-1">Error: {result.error}</p>}
            </div>
          )}

          <div className="mt-2 text-xs text-muted-foreground">
            Tip: Check Gmail Inbox and Spam/Promotions for “onboarding@resend.dev”.
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
