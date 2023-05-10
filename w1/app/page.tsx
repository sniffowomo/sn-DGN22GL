import Image from "next/image"
import E2 from "./components/desc"

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4">
      <h1 className="text-justify text-5xl text-fuchsia-700">
        {" "}
        Whatup Ma Homie{" "}
      </h1>
      <h2> YoHoHo </h2>
      <p className="flex">
        This is going to be just a test of shit <br /> And yet we will see what
        is happening
      </p>
      <E2 />
    </main>
  )
}
