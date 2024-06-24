import { CITIES } from "@/app/_lib/constants";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Cities() {
  return (
    <div className="flex flex-col gap-y-4 w-1/4">
      <label className="text-xs tracking-[4px] uppercase font-bold">
        Location
      </label>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Mumbai" />
        </SelectTrigger>
        <SelectContent>
          {CITIES.map((city) => (
            <SelectItem value={city.value} key={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
