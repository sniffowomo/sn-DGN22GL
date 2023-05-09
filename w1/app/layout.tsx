import "./globals.css";
import { Inter, Play } from "next/font/google";

/* This is not bein used now keeping it here for unknown 
errors
- Note the convention long ass commenting notation
*/
const inter = Inter({ subsets: ["latin"] });

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "BRAPI",
  description: "Build Rest API in nextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  );
}
