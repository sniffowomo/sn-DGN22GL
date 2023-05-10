import Image from "next/image"
import E2 from "./components/desc"
import Tab from "./components/tab1"

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-5 text-center container mx-auto">
      <h1 className="text-5xl text-fuchsia-700">Whatup Ma Homie</h1>
      <h2> YoHoHo </h2>
      <p className="bg-amber-800 font-extrabold">
        This is going to be just a test of shit <br /> And yet we will see what
        is happening <br /> This project is for testing out the
      </p>
      <h2>
        OK good enough, Way too much styling was done on this Now we will get
        back to the actual course work
      </h2>
      <div className="flex">
        <div className="flex-none ...">
          <Tab />
        </div>
        <div className="flex-auto w-64 ...">
          <E2 />
        </div>
        <div className="flex-1 w-32 ...">
          <p className="bg-teal-900 font-extrabold">
            This is going to be just a test of{" "}
            <a className="underline decoration-sky-500">My Company, Inc</a>shit{" "}
            <br /> And yet we will see what is happening <br /> This project is
            for testing out the
          </p>
        </div>
      </div>
    </main>
  )
}
