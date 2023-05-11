import { cookies } from "next/headers"
import { limiter } from "../config/limiter"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const origin = request.headers.get("origin")

  const cookieStore = cookies()
  const token = cookieStore.get("token")

  // For the limiter
  const remaining = await limiter.removeTokens(1)
  console.log("remaining: ", remaining)

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Bastard Stop",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-type": "text/plain",
      },
    })
  }

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  })
}
