import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-red-600 dark:border-red-600 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={"https://i.ibb.co/TgRhQPp/Cover-36755402.webp"}
        width={300}
        height={300}
        alt="Sniff"
        priority={true}
      />
    </section>
  )
}
