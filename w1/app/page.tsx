import Image from "next/image"
import E2 from "./components/desc"

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 text-center">
      <h1 className="text-5xl text-fuchsia-700">Whatup Ma Homie</h1>
      <h2> YoHoHo </h2>
      <p className="bg-amber-800 font-extrabold">
        This is going to be just a test of shit <br /> And yet we will see what
        is happening <br /> This project is for testing out the
      </p>
      <E2 />
    </main>
  )
}
