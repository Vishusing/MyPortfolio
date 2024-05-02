"use client"

import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="h-15 flex items-center justify-between fixed w-full backdrop-blur-sm">
            <div className="logo rounded-full p-2">
                <Link href={'/'}>
                    <img src="/Coding.gif" width={60} alt="Coder" className="rounded-full" />
                </Link>
            </div>
            <ul className="flex gap-2 p-1">
                <li onClick={() => window.open("https://www.instagram.com/_vishu.19_/", "_blank")}>
                        <img src="/Instagram.svg" width={30} alt="Instagram" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
