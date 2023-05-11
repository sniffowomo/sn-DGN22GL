import { NextResponse } from "next/server"

export function middleware(request: Request) {
  // The following is a secondary method of isolating the api routes

  console.log("Middleware!")

  console.log(request.method)
  console.log(request.url)

  const origin = request.headers.get("origin")
  console.log(origin)

  return NextResponse.next()
}

export const config = {
  matcher: "/api/:paths*",
}
