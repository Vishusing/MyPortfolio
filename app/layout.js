
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
        <div className="bg-white">
          <Navbar /> 
          {children}
        </div>
      </body>
    </html>
  );
}
