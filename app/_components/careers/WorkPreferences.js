import { workPreferences } from '@/app/_lib/constants'
import { Checkbox } from '@/components/ui/checkbox'
import { Building, Earth, HomeIcon } from 'lucide-react'
import React from 'react'

export default function WorkPreferences() {
  return (
    <div className="flex gap-x-5">

    {workPreferences.map((work) => (
      <div className="flex items-center space-x-2" key={work.label}>
           <Checkbox id={work.value} />
           <label
             htmlFor={work.value}
             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
           >
             {work.label}
           </label>
          {work.icon === "home" && <HomeIcon className="w-4 h-4" />}
          {work.icon === "globe" && <Earth className="w-4 h-4" />}
          {work.icon === "office" && <Building className="w-4 h-4" />}
         </div>
         
    ))}
   
  </div>
  )
}
