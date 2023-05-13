import Posts from "./components/Posts"

export const revalidate = 20

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Sniff n Lick 👅🍑&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Sniffo</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
