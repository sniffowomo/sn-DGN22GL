import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params: { id } }: Props) {
  // const id = request.url.slice(request.url.lastIndexOf(`/`) + 1) by author
  /*
  Note This was mentioned in the vid , that the above method with the type props is the next js way of getting the id not e
  the export async function GET(new additions here to unerstand)
  */

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

  const todo: Todo = await res.json()

  if (!todo.id) return NextResponse.json({ message: "🥊 F O" })

  return NextResponse.json(todo)
}
