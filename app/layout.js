import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Myself Vishal Singh, This is my portfolio which contains all information about me",
  icons: {
    icon: "/Vfavicon.jpeg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 p-0'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
      linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
