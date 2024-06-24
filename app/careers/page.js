"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import Home from "../_components/careers/Home";
import CareerHeading from "../_components/careers/CareerHeading";

import { Input } from "@/components/ui/input";

import SkillComponent from "../_components/careers/SkillComponent";
import Cities from "../_components/careers/Cities";
import { Checkbox } from "@/components/ui/checkbox";
import { Building, Earth, HomeIcon } from "lucide-react";
import { workPreferences } from "../_lib/constants";
import WorkPreferences from "../_components/careers/WorkPreferences";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-w-full min-h-full ">
      <div className="w-full h-full px-20 py-5">

        {/* back to home button */}
        <Home />

        {/* Career heading */}

        <CareerHeading />

        {/* Search Bar */}

        <div className="w-full mt-36 flex items-center" id="JobSearch">
          {/* Search Bar Items */}
          <div className="flex flex-col gap-y-4 w-[90%]">
            <form className="flex gap-x-16 w-full">
              <div className="flex flex-col gap-y-4 w-1/4">
                <label className="text-xs tracking-[4px] uppercase font-bold">
                  Keyword or Job id
                </label>
                <Input
                  className="placeholder:text-sm"
                  type="text"
                  placeholder="Keyword"
                />
              </div>

              <Cities />

              <SkillComponent />
            </form>

          <WorkPreferences />
          </div>

          {/* button */}
          <div className="w-[10%] ">
            <button className="w-full bg-green-500 text-white rounded-full py-2 px-2 capitalize tracking-wide">
                find
            </button>
          </div>
        </div>


        {/* People Working  Image */}

        <div className="w-full relative aspect-video mt-20">
          <Image 
            src={"/Group.jpg"}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
