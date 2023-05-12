import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET(request: Request) {
  const origin = request.headers.get("origin")

  const res = await fetch(DATA_SOURCE_URL)

  const todos: Todo[] = await res.json()

  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  })
}

export async function DELETE(request: Request) {
  // ---- Rate limiting code ----
  const origin = request.headers.get("origin")
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
  // ----- Rate Limiter code ------

  const { id }: Partial<Todo> = await request.json()

  if (!id) return NextResponse.json({ message: `${id} Wrong 😡` })

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
  })

  return NextResponse.json({ message: `Todo ${id} fucked ❌` })
}

export async function POST(request: Request) {
  // ---- Rate limiting code ----
  const origin = request.headers.get("origin")
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
  // ----- Rate Limiter code ------

  const { userId, title }: Partial<Todo> = await request.json()

  if (!userId || !title)
    return NextResponse.json({
      message: `${userId} or ${title} Missing Bastard😡`,
    })

  const res = await fetch(DATA_SOURCE_URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  })

  const newTodo: Todo = await res.json()

  return NextResponse.json(newTodo)
}

export async function PUT(request: Request) {
  // ---- Rate limiting code ----
  const origin = request.headers.get("origin")
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
  // ----- Rate Limiter code ------

  const { userId, id, title, completed }: Todo = await request.json()

  if (!userId || !id || !title || typeof completed !== "boolean")
    return NextResponse.json({
      message: `${userId} or ${title} Missing Bastard😡`,
    })

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  })

  const updatedTodo: Todo = await res.json()

  return NextResponse.json(updatedTodo)
}
