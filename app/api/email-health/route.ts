import { NextResponse } from "next/server"

export async function GET() {
  try {
    const hasKey = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim().length > 0)
    return NextResponse.json({ ok: true, hasKey })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message || "Unknown error" }, { status: 500 })
  }
}
