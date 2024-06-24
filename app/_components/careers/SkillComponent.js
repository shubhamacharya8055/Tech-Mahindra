import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

export default function SkillComponent() {
  const [skills, setSkills] = useState([]);
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addSkill();
    }
  };

  const handleBlur = () => {
    addSkill();
  };

  const addSkill = () => {
    const newSkill = inputRef.current.value.trim();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      inputRef.current.value = ""; // Clear input
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="flex flex-col gap-y-4 w-1/4">
      <label className="text-xs tracking-[4px] uppercase font-bold">
        Skills
      </label>
      <Input
        className="placeholder:text-sm"
        type="text"
        ref={inputRef}
        placeholder="All Skills"
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      <div className="flex flex-nowrap gap-2 overflow-x-scroll no-scrollbar">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-green-500 text-green-100 px-3 py-1 text-sm font-medium"
          >
            {skill}
            <button
              type="button"
              className="ml-2 -mr-1 p-1 text-gray-900 hover:text-gray-900"
              onClick={() => removeSkill(skill)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
