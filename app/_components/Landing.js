"use client"
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HERO_VIDEO } from "../_lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger)
function Landing() {

    const titleRef = useRef(null);
    const paragraphRef =  useRef(null);
    const lineRef = useRef(null);
    const redRef = useRef(null)
    const landRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex(prev => prev === (HERO_VIDEO.length - 1) ? 0 : prev + 1)
    }

    const handlePrevious = () => {
        setActiveIndex(prev => prev === 0 ? (HERO_VIDEO.length - 1) : prev - 1)
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            handleNext()
        }, 5000);

        return () => clearTimeout(timer)
    } , [activeIndex])

    useGSAP(() => {
        gsap.fromTo(
          [titleRef.current, paragraphRef.current],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.2,
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 10%",  
              end: "top 50%",   
              toggleActions: "play none none restart",
            },
          }
        );

        gsap.from(redRef.current , {
            x: -1200,
            duration: 3 , 
            opacity: 1 , 
            scrollTrigger: {
                trigger: landRef.current , 
                toggleActions: "restart none none reverse",
                start: "0% 10%" , 
                end: "90% 50%",
                scrub: true
            }
        })
      }, []);

      useEffect(() => {
        const timeline = gsap.timeline();
        timeline.fromTo(
          [titleRef.current, paragraphRef.current],
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.5, duration: 0.7 } 
        );
      }, []);

   

  return (
    <div className="relative min-h-[885px] min-w-[100%] overflow-hidden" ref={landRef} id="mahindra">
        <div className="flex flex-col w-fit xl:h-[300px] xl:w-[840px] xl:gap-y-5 gap-y-3 px-10 py-4">
            <h1 ref={titleRef} className="xl:text-8xl text-4xl font-normal xl:font-semibold  text-zinc-800 tracking-tight">Scale at Speed</h1>
            <p ref={paragraphRef}
            className="xl:text-lg text-[13px] leading-5 text-gray-700"
            >Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.</p>
        </div>

        <div className="absolute z-[70] text-white xl:right-32 xl:bottom-32 bottom-56 right-10">
            {HERO_VIDEO.map((item, index) => (
                <div className={`h-full w-full flex flex-col items-end xl:gap-y-3 gap-y-2 ${activeIndex === index ? "block" : "hidden"}`} key={item.p1}>
                {item.p1 && <p className="xl:text-4xl text-2xl font-medium">{item.p1}</p>}
                {item.p2 && <p className="xl:text-4xl text-2xl font-medium">{item.p2}</p>}
                {item.p3 && <p className="xl:text-4xl text-2xl font-medium">{item.p3}</p>}
                {item.p4 && <p className="xl:text-4xl text-2xl font-medium">{item.p4}</p>}

                <button className="py-4 px-6 border border-gray-50 xl:mt-7 mt-4">
                    KNOW MORE
                </button>
            </div>
            ))}   
        </div>

        
        <div className="flex gap-x-5 absolute z-[999] xl:bottom-32 xl:left-60 bottom-14 left-10">
            <button className="border border-gray-200 p-3 rounded-full bg-white/85"
            onClick={handlePrevious}
            >
                <ChevronLeft />
            </button>
            <button className="border border-gray-200 p-3 rounded-full bg-white/85"
            onClick={handleNext}
            >
                <ChevronRight />
            </button>
        </div>

        <div className="flex gap-2 absolute xl:bottom-24 xl:left-24 bottom-5 left-5 z-[9999]">
            {HERO_VIDEO.map((item , index) => (
                <p key={item.url} className={`h-2 xl:w-24 w-14 border border-zinc-300 ${activeIndex === index ? "bg-gray-300" : ""}`} />
            ))}
        </div>

    

    {/* Black Diagonal Line */}
    <div
      className="relative h-1 xl:top-[1rem] top-[10rem] z-50 left-0 w-full bg-black transform -skew-y-[18deg]"
     ref={lineRef}
     >    

    <div className="absolute bg-red-600 h-2 -top-[8px]  z-50 inset-0" ref={redRef}/>


       {HERO_VIDEO.map((item, index) => (
         <video key={item.p1}
         className={`absolute top-0 right-0 min-w-full z-0  h-[800px] object-cover object-right-top ${activeIndex === index ? "block" : "hidden" }`}
         autoPlay
         loop
         muted
       >
         <source src={item.url} type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       ))}
    </div>
  </div>
  );
}

export default Landing;
