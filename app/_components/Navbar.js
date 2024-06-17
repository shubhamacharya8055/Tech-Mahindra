"use client"

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../_lib/constants";
import { Menu, Search, X } from "lucide-react";
import FullPageNav from "./FullPageNav";
import { useState } from "react";


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
    <nav className="sticky z-[100] inset-x-0 top-0 w-full backdrop-blur-lg transition-all px-10 h-28 py bg-white min-w-full shadow-sm
    ">
        <div className="h-full w-full flex justify-between items-center">
            <div className="relative">
            <Image 
            src = "./batman.svg"
            className="object-cover"
            width={90}
            alt="Tech Mahindra Logo"
            height={90}
            />
            </div>

            <ul className="items-center gap-x-14 mt-2 hidden xl:flex">
                {NAV_LINKS.map((nav) => (
                    <li key={nav.label} className="relative group">
                        <Link href={nav.href} className="font-semibold text-lg relative z-10 ">
                        {nav.label}
                        </Link>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800 scale-x-0 group-hover:scale-x-90 origin-left transition-transform duration-300 delay-100"></div>
                    </li>
                ))}
            </ul>
            <div className="flex gap-x-3 items-center">
            <Search className="h-8 w-8 xl:h-6 xl:w-6 mt-2 xl:mr-7 hover:scale-125 transition-transform duration-150 delay-100"/>
            <button 
            onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? (
            <X className="h-8 w-8 mt-2 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                ) : (
            <Menu className="h-8 w-8 mt-2 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                )}

            </button>
            
            </div>
        </div>
    </nav>
    {isOpen ? <FullPageNav isOpen = {isOpen} /> : null}

</div>
  )
}
