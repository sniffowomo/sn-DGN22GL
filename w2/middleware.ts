import { NextResponse } from "next/server"

// This is the cors being added
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://sniffowomo-scaling-dollop-j6gxxqv4vq62p566-3000.preview.app.github.dev/",
      ]
    : ["https://www.google.com"]

export function middleware(request: Request) {
  // The following is a secondary method of isolating the api routes
  // See the next09 about other options

  const origin = request.headers.get("origin")
  console.log(origin)

  if (origin && !allowedOrigins.includes(origin)) {
    // The line below is if you want to block tools also such as postman and thunderclient
    // if (origin && !allowedOrigins.includes(origin) || !origin) {
    return new NextResponse(null, {
      status: 400,
      statusText: "bastard fuck you",
      headers: {
        "Content-type": "text/plain",
      },
    })
  }

  console.log("Middleware!")

  console.log(request.method)
  console.log(request.url)

  return NextResponse.next()
}

export const config = {
  // This defines the path where the anove middleware code should be used
  matcher: "/api/:paths*",
}
