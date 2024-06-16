"use client"
import Image from "next/image";
import { CAPABILITIES } from "../_lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Capabilities() {

    const capRef = useRef();

    useGSAP(()=> {
        gsap.from(capRef.current , {
            y:100,
            opacity: 0 , 
            duration: 0.6,
            scrollTrigger: {
                start: "1100px 80%",
                toggleActions: "restart none none restart"
            }
        })
    } , [])

  return (
    <div
    className="min-w-full"
    >
        <div className="px-20 py-20 w-full h-full space-y-10">
            <div className="flex items-start justify-center" ref={capRef}>
                <p className="flex-1 text-5xl font-semibold">Capabilities</p>
                <p className="flex-1 text-lg leading-8">
                We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance customer experiences, and transform industries at scale and with unparalleled speed.
                </p>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-3">
                {CAPABILITIES.map((item) => (
                    <div key={item.label} className="w-full h-[450px] relative group">
                        <div className="relative h-full w-full overflow-hidden">
                            <Image 
                            src={item.img}
                            alt={item.label}
                            className="object-cover h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            fill
                            />
                        </div>
                        <p className="text-white text-2xl absolute inset-x-0 font-medium w-52 z-20 top-10 left-10">{item.label}</p>
                        <p className="absolute z-10 text-white top-[50%] px-6 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">{item.desc}</p>
                        <div className="absolute inset-0 group-hover:bg-black/40 group-hover:backdrop-blur-[2px] transition-all duration-500"></div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}
