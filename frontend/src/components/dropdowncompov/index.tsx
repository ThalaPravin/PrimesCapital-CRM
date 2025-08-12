import React, { useState } from "react";
// import "./CustomDropdown.css"; // Assuming you have a CSS file for the custom dropdown styles

interface CustomDropdownProps {
  label: string;
  options: string[]; // Assuming options are strings, adjust the type as needed
}

function CustomDropdown({ label, options }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <label className="text-sm text-navy-700 dark:text-white ">{label}</label>
      <div className="mt-2 flex h-12 w-full  rounded-xl border bg-white/0 p-3 text-sm outline-none" onClick={toggleDropdown}>
        {selectedOption || "Select"}
      </div>
      {isOpen && (
        <div className="options mt-2 shadow-xl">
          {options.map((option: string, index: number) => (
            <div
              key={index}
              className=" flex h-12 w-full   border bg-white/0 p-3 text-sm outline-none"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
