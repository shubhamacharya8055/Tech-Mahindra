import { ArrowRight } from "lucide-react";
import React from "react";

export default function CareerHeading() {
  return (
    <div className="w-fit mt-32 flex flex-col gap-y-14">
      <h1 className="text-7xl leading-[90px] tracking-tight">
        Shape the{" "}
        <span className="bg-green-500 text-white px-5 tracking-tight">
          {" "}
          Future{" "}
        </span>{" "}
        <p> - Apply Today </p>
      </h1>

      <div className="flex flex-col gap-y-2">
        <p className="text-sm tracking-tight hover:text-green-800 hover:underline underline-offset-4 cursor-pointer"
        onClick={() => {
          const element = document.getElementById("JobSearch");
          if(element) {
            element.scrollIntoView({behavior: "smooth"})
          }
        }}
        >
          Find your dream Job
        </p>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}
