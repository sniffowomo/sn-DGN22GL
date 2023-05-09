import Image from "next/image";
import E2 from "./components/desc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl text"> Whatup </h1>
        <p>This is going to be just a test of shit</p>
      </div>
      <E2 />
    </main>
  );
}
