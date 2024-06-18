"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { EXPLORE } from "../_lib/constants";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Explore() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [progressWidth, setProgressWidth] = useState(0);
    const scrollRef = useRef(null)
    const exploreRef = useRef(null)
    const textRef = useRef(null)


    useGSAP(() => {
        gsap.from(textRef.current , {
            opacity: 0 , 
            y: 300 , 
            duration: 0.5 , 
            scrollTrigger: {
                trigger: exploreRef.current , 
                start: "0% 70%",
                end: "20% 50%",
                toggleActions: "restart none none reverse",
                scrub: true
            }
        })
    })

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % EXPLORE.length); 
      };
    
      const handlePrevious = () => {
        setActiveIndex((prev) => (prev - 1 + EXPLORE.length) % EXPLORE.length);
      };
    
      useEffect(() => {
        scrollToItem();
      }, [activeIndex]);

      useEffect(() => {
        const newProgressWidth = ((activeIndex + 1) / EXPLORE.length) * 100;
        setProgressWidth(newProgressWidth)
      } , [activeIndex])

      useEffect(() => {
        let interval = setInterval(() => {
            handleNext()
            scrollToItem()
        }, 3000)
      
        return () => clearInterval(interval)
      }, [activeIndex])
      


    
      function scrollToItem () {
        if (scrollRef.current) {
          const itemWidth = scrollRef.current.scrollWidth / EXPLORE.length;
          scrollRef.current.scrollTo({
            left: activeIndex * itemWidth,
            behavior: "smooth",
          });
        }
      };

    console.log({activeIndex})



  return (
    <div className="bg-black min-w-full min-h-fit">
        <div className="w-full h-full px-10 py-16 pb-32">

            <div className="w-full h-fit flex justify-between items-center" ref={exploreRef}>
                <h2 className="xl:text-5xl text-3xl text-white font-semibold" ref={textRef}>Explore More</h2>
                <div className="xl:flex gap-x-5 hidden">
                    <button className="p-5 border border-white rounded-full hover:scale-75 transition-transform duration-300"
                    onClick={handlePrevious}
                    >
                        <ChevronLeft className="h-8 w-8 text-white" />
                    </button>
                    <button className="p-5 border border-white rounded-full hover:scale-75 transition-transform duration-300"
                    onClick={handleNext}
                    >
                        <ChevronRight className="h-8 w-8 text-white" />
                    </button>
                </div>
            </div>

            <div className="xl:mt-20 mt-10 h-[400px] gap-x-5 flex overflow-x-scroll no-scrollbar transition-all duration-500" ref={scrollRef}>

                    {EXPLORE.map((item,index) => (
                        <div className={`group xl:min-w-[40%] transition-all duration-500 ${activeIndex === index ? "h-full" : "h-[300px]"}`} key={index}>
                        <div className="relative h-full w-full aspect-square overflow-hidden ">
                            <Image 
                            src={item.img}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                            />
                        <h3 className="absolute text-white bottom-8 left-10 text-2xl font-medium tracking-normal">{item.label}</h3>
                        </div>
                    </div>
                    ))}
            </div>

            <div className="mt-10 border border-white bg-gray-400/50 h-2 relative overflow-hidden">
                <div className="absolute bg-red-500 inset-0 h-3"
                style={{width: `${progressWidth}%`}}
                />
            </div>

        </div>
    </div>
  )
}
