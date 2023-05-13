import "./globals.css"
import Navbar from "./components/Navbar"
import MyProfilePic from "./components/MyProfilePic"

export const metadata = {
  title: "Sniffo Blog",
  description: "Sniffer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-800 ">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
