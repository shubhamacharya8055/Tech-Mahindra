"use client"

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../_lib/constants";
import { Menu, Search, X } from "lucide-react";
import FullPageNav from "./FullPageNav";
import { useState } from "react";


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (e) => {
        
    }

  return (
    // <div className="relative">
    <nav className="sticky z-[100] inset-x-0 top-0 w-full backdrop-blur-lg transition-all px-10 h-20 py bg-white min-w-full shadow-sm
    ">
        <div className="h-full w-full flex justify-between items-center">
            <Link href={"/"} className="relative">
            <Image 
            src = "./batman.svg"
            className="object-cover"
            width={70}
            alt="Tech Mahindra Logo"
            height={70}
            />
            </Link>

            <ul className="items-center gap-x-14 hidden xl:flex">
                {NAV_LINKS.map((nav) => (
                    <li key={nav.label} className="relative group">
                        <Link href={nav.href} className="font-semibold text-sm relative z-10"
                        onClick={(e) => {
                            e.preventDefault(); 
                            const targetId = nav.href.split('#')[1]; 
                            const element = document.getElementById(targetId);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' }); 
                            }
                        }}
                        >
                        {nav.label}
                        </Link>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800 scale-x-0 group-hover:scale-x-90 origin-left transition-transform duration-300 delay-100"></div>
                    </li>
                ))}
            </ul>
            <div className="flex gap-x-3 items-center">
            <Search className="h-7 w-7 xl:h-5 xl:w-5 xl:mr-7 hover:scale-125 transition-transform duration-150 delay-100"/>
            <button 
            onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? (
            <X className="h-8 w-8 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                ) : (
            <Menu className="h-8 w-8 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                )}

            </button>
            
            </div>
        </div>
        {isOpen ? <FullPageNav isOpen = {isOpen} /> : null}
    </nav>

// </div>
  )
}
