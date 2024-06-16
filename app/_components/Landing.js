"use client"
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
function Landing() {

    const titleRef = useRef(null);
    const paragraphRef =  useRef(null);

    useGSAP(() => {
       
    gsap.from([titleRef.current , paragraphRef.current] , {
        y:50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.7,
    })
    } , [])

  return (
    <div className="relative min-h-[885px] w-screen overflow-hidden">
        <div className="flex flex-col w-fit xl:h-[300px] xl:w-[840px] xl:gap-y-5 gap-y-3 px-10 py-4">
            <h1 ref={titleRef} className="xl:text-8xl text-4xl xl:font-semibold font-medium text-zinc-800 tracking-tight">Scale at Speed</h1>
            <p ref={paragraphRef}
            className="xl:text-lg text-sm text-gray-700"
            >Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.</p>
        </div>

        <div className="absolute z-[70] text-white xl:right-32 xl:bottom-32 bottom-56 right-10">
            <div className="h-full w-full flex flex-col items-end xl:gap-y-3 gap-y-2">
                <p className="xl:text-4xl text-2xl font-medium">The Tech Mahindra</p>
                <p className="xl:text-4xl text-2xl font-medium">Promise</p>

                <button className="py-4 px-6 border border-gray-50 xl:mt-7 mt-4">
                    KNOW MORE
                </button>
            </div>
        </div>

    {/* Black Diagonal Line */}
    <div
      className="relative h-1 xl:top-[1rem] top-[10rem] z-50 left-0 w-full bg-black transform -skew-y-[18deg]"
    >    
        <video
          className="absolute top-0 right-0 min-w-full z-0  h-[800px] object-cover object-right-top"
          autoPlay
          loop
          muted
        >
          <source src="./techm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  </div>
  );
}

export default Landing;
