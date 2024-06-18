"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { STUDIES } from "../_lib/constants";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export default function Studies() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [progressWidth, setProgressWidth] = useState(0); 
    const scrollRef = useRef();
    const studyRef = useRef();

    useGSAP(() => {
        gsap.from(studyRef.current , {
            opacity: 0 , 
            y: 300 , 
            duration: 0.2 , 
            scrollTrigger: {
                trigger: studyRef.current , 
                start: "-700% 90%" , 
                end: "-500% 70%" , 
                toggleActions: "restart none none reverse",
            }
        })
    } , [])

    const scrollToItem = () => {
        if(scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / STUDIES.length;
            scrollRef.current.scrollTo({
                left: activeIndex * itemWidth , 
                behavior: "smooth"
            })
        }
    }

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % STUDIES.length)
        scrollToItem()
    }

    const handlePrevious = () => {
        setActiveIndex(prev => (prev - 1 + STUDIES.length) % STUDIES.length )
        scrollToItem()
    }

    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
          scrollToItem();
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, [activeIndex]); 

    useEffect(() => {
        const newProgressWidth = ((activeIndex + 1) / STUDIES.length) * 100; 
        setProgressWidth(newProgressWidth)
    } , [activeIndex])

  


  return (
    <div className="min-w-full min-h-full ">
        
        <div className="xl:px-20 xl:pt-32 xl:pb-24 px-10 pt-24 pb-8 flex justify-between items-center">
            <h1 className="xl:text-5xl text-2xl font-semibold xl:font-medium"
            ref={studyRef}
            >Case Studies</h1>

            <div className="xl:flex gap-x-5 hidden ">
                <button className="p-5 border border-gray-600 rounded-full hover:scale-75 transition-all duration-300"
                onClick={handlePrevious}
                >
                    <ChevronLeft className="h-8 w-8" />
                </button>

                <button className="p-5 border border-gray-600 rounded-full hover:scale-75 transition-all duration-300"
                onClick={handleNext}
                >
                    <ChevronRight className="h-8 w-8" />
                </button>
                
            </div>
        </div>


        <div className="min-w-[100%] flex  overflow-x-scroll no-scrollbar" ref={scrollRef}>
        {STUDIES.map((item,index) => (
              <div className="xl:min-w-[33.3%]  min-h-[500px] group relative border border-white" key={item.label}>
              <div className={`h-[380px] ${activeIndex ===index ? "group-hover:h-[300px]" : ""} group-hover:h-[300px] transition-all duration-700 aspect-square w-full relative`}>
                      <Image 
                      src={item.img}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
              <div className="h-1 bg-red-600 absolute z-[9999] inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="h-[120px] bg-gray-100 group-hover:bg-white flex items-center justify-center">
                  <p className="text-lg w-2/3 text-center pt-2 pb-0 ">
                    {item.label}
                  </p>
          </div>          
          </div>
        ))}
        </div>

        <div className="border border-gray-800 my-10 h-1 mx-10 relative overflow-hidden">
            <div className="bg-red-600 h-2 absolute inset-x-0 transition-all duration-300 "
            style={{
                width: `${progressWidth}%`
            }}
            />
        </div>


    </div>
  )
}
