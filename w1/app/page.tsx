import Image from "next/image"
import E2 from "./components/desc"

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4">
      <h1 className="text-justify text-5xl"> Whatup </h1>
      <h2> YoHoHo </h2>
      <p>This is going to be just a test of shit</p>
      <E2 />
    </main>
  )
}
