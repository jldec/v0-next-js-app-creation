import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const serverTime = new Date().toLocaleString("en-US", {
    timeZoneName: "short",
  })

  return NextResponse.json({ serverTime })
}
