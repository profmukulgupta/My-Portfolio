"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { EmailFunctionalityTester, type TestResult } from "@/lib/email-testing"
import { Play, Download, RefreshCw, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function EmailTestDashboard() {
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<TestResult[]>([])
  const [report, setReport] = useState("")

  const runTests = async () => {
    setIsRunning(true)
    setResults([])
    setReport("")

    try {
      const tester = new EmailFunctionalityTester()
      const testResults = await tester.runAllTests()
      const generatedReport = tester.generateReport()

      setResults(testResults)
      setReport(generatedReport)
    } catch (error) {
      console.error("Test execution failed:", error)
    } finally {
      setIsRunning(false)
    }
  }

  const downloadReport = () => {
    const blob = new Blob([report], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `email-test-report-${new Date().toISOString().split("T")[0]}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PASS":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "FAIL":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "WARNING":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      PASS: "bg-green-500/20 text-green-400 border-green-500/30",
      FAIL: "bg-red-500/20 text-red-400 border-red-500/30",
      WARNING: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    }

    return <Badge className={variants[status] || "bg-gray-500/20 text-gray-400"}>{status}</Badge>
  }

  const passCount = results.filter((r) => r.status === "PASS").length
  const failCount = results.filter((r) => r.status === "FAIL").length
  const warningCount = results.filter((r) => r.status === "WARNING").length

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Email Functionality Test Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive testing of all email notification features</p>
        </div>

        <div className="flex gap-2">
          <Button onClick={runTests} disabled={isRunning}>
            {isRunning ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Running Tests...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Run All Tests
              </>
            )}
          </Button>

          {report && (
            <Button variant="outline" onClick={downloadReport}>
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          )}
        </div>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{passCount}</p>
                  <p className="text-sm text-muted-foreground">Passed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <XCircle className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{failCount}</p>
                  <p className="text-sm text-muted-foreground">Failed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{warningCount}</p>
                  <p className="text-sm text-muted-foreground">Warnings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {results.length > 0 && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.status)}
                      <h3 className="font-semibold">{result.feature}</h3>
                    </div>
                    {getStatusBadge(result.status)}
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{result.details}</p>
                  <p className="text-xs text-muted-foreground">{new Date(result.timestamp).toLocaleString()}</p>

                  {result.errors && (
                    <div className="mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded">
                      <p className="text-sm text-red-400 font-medium">Errors:</p>
                      <ul className="text-sm text-red-300 list-disc list-inside">
                        {result.errors.map((error, i) => (
                          <li key={i}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {result.recommendations && (
                    <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                      <p className="text-sm text-yellow-400 font-medium">Recommendations:</p>
                      <ul className="text-sm text-yellow-300 list-disc list-inside">
                        {result.recommendations.map((rec, i) => (
                          <li key={i}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {report && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Generated Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={report}
              readOnly
              className="min-h-[400px] font-mono text-sm"
              placeholder="Test report will appear here..."
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
