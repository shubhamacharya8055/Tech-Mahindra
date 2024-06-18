"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);

export default function Sustainibility() {

    const boxRef = useRef(null);

    useGSAP(() => {
        gsap.from(boxRef.current , {
            opacity: 0 , 
            y: 300 , 
            duration: 0.6 , 
            scrollTrigger: {
                trigger: boxRef.current ,
                toggleActions: "restart none none reverse",
                start: "-40% 70%",
                end: "40% 40%",
                scrub: true
            }
        })
    } , [])

  return (
    <div className='min-w-full min-h-[1000px] xl:my-10 overflow-hidden relative'>
        <div className='h-[500px] bg-white relative' />
        <div ref={boxRef} className='bg-black gap-y-10 absolute xl:left-20 left-4 h-[500px] w-[400px] xl:w-[500px] z-40 top-40 flex justify-center flex-col text-white items-center'>
            <h1 className='w-2/3 text-3xl'>
            Towards a Sustainable Future
            </h1>
            <p className='w-2/3 text-base'>Learn how we maintain a balance between sustainability and overall business profitability.</p>
            <div className='w-2/3'>
            <button className='border border-white px-5 py-4'>
                OUR SUSTAINIBILITY EFFORTS
            </button>
            </div>
        </div>

        <div className='relative h-1 -skew-y-[18deg] transform bg-black'>
            <div className='min-h-screen relative aspect-video'>
            <Image 
            src={"/sustainabilityhompage.jpg"}
            fill
            className='object-cover absolute'
            />
            </div>
        </div>
    </div>
  )
}
