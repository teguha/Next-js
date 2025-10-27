import React, { useState, useRef, useEffect } from "react";

const CustomLocationPicker = ({ locations = [], value, onChange }) => {
  // handle dropdown select   
  const [showDropdown, setShowDropdown] = useState(false);

  // handle set selected location   
  const [selected, setSelected] = useState(
    locations.find((l) => l.id === value)?.name || "Select Location"
  );

  // set use ref
  const ref = useRef();

  
  useEffect(() => {
    // klik di luar dropdown
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (loc) => {
    setSelected(loc.name);
    onChange?.(loc.id);
    setShowDropdown(false);
  };

  return (
    <div ref={ref} className="relative w-full font-[Roboto]">
      {/* Input Display */}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full text-xs md:text-base font-semibold tracking-wider outline-none px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFBD00] focus:border-[#153C87] transition flex items-center justify-between"
      >
        <span>{selected}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-200 ${
            showDropdown ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-2xl shadow-xl z-[9999] animate-fadeIn max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {locations.map((loc, i) => (
            <div
              key={i}
              onClick={() => handleSelect(loc)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#153C87] hover:text-white transition ${
                selected === loc.name ? "bg-[#FFBD00]/20 font-semibold text-[#153C87]" : ""
              }`}
            >
              {loc.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomLocationPicker;
