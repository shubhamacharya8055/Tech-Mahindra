"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Careers() {

    const contactRef = useRef(null)
    const carrersRef = useRef(null)
    const mainRef = useRef(null)

    useGSAP(() => {

        gsap.from(carrersRef.current , {
            opacity: 0 , 
            stagger: 1 , 
            x: -300 , 
            duration: 0.7 , 
            scrollTrigger: {
                trigger: mainRef.current , 
                start: "-20% 70%",
                end: "0% 50%",
                scrub: true , 
                toggleActions: "restart none none reverse",
            }
        })

        gsap.from(contactRef.current , {
            opacity: 0 , 
            stagger: 1 , 
            x: -300 , 
            duration: 0.7 , 
            scrollTrigger: {
                trigger: mainRef.current , 
                start: "-20% 70%",
                end: "0% 50%",
                scrub: true , 
                toggleActions: "restart none none reverse",
            }
        })

    } , [])


  return (
    <div className="w-full xl:h-[500px] h-fit bg-[#1E1E1E] text-white">
        <div className="xl:divide-x divide-y xl:divide-y-0 divide-gray-500 flex xl:flex-row flex-col h-full w-full xl:items-center xl:justify-between" ref={mainRef} >
            <div className="flex flex-col gap-y-8 xl:w-1/2 w-full xl:px-16 px-10 pt-5 pb-10" ref={carrersRef}>
                <div className="flex flex-col gap-y-4">
                <h1 className="xl:text-6xl text-4xl font-medium">Careers</h1>
                <p className="xl:text-xl text-lg">Gain a heritage. Leave a legacy</p>
                </div>
                <button className="border w-2/3 xl:w-1/2 xl:py-5 py-3 text-xs xl:text-base uppercase font-medium hover:bg-white hover:text-black transition-all duration-500">
                    Join us
                </button>
            </div>

            <div className="flex flex-col xl:items-center gap-y-8 w-full xl:w-1/2 xl:px-16  px-10 pt-5 pb-10" ref={contactRef}>
                <div className="flex flex-col gap-y-4">
                <h1 className="xl:text-6xl text-4xl font-medium">Contact Us</h1>
                <p className="xl:text-xl text-lg">What can we help you achieve.</p>
                </div>
                <button className="border w-2/3 xl:w-1/2 xl:py-5 py-3 text-xs xl:text-base uppercase font-medium hover:bg-white hover:text-black transition-all duration-500">
                    Speak with us
                </button>
            </div>
        </div>
    </div>
  )
}
