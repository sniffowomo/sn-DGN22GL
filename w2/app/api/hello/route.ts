import { cookies } from "next/headers"
import { limiter } from "../config/limiter"

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get("token")

  // For the limiter
  const remaining = await limiter.removeTokens(1)
  console.log("remaining: ", remaining)

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  })
}
