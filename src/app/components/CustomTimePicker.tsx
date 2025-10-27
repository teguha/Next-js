import React, { useState, useEffect, useRef } from "react";

const CustomTimePicker = ({ value, onChange }) => {
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value || "");
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowTime(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const minute = m === 0 ? "00" : m;
      const ampm = h < 12 ? "AM" : "PM";
      times.push(`${hour}:${minute} ${ampm}`);
    }
  }

  const handleSelect = (t) => {
    setSelectedTime(t);
    onChange?.(t);
    setShowTime(false);
  };

  return (
    <div ref={ref} className="relative w-full font-[Roboto]">
      {/* Input Field */}
      <div
        onClick={() => setShowTime(!showTime)}
        className="w-full text-xs md:text-base font-semibold tracking-wider outline-none px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFBD00] focus:border-[#153C87] transition flex items-center justify-between"
      >
        <span>{selectedTime || "Select Time"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-200 ${
            showTime ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Time Dropdown */}
      {showTime && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-2xl shadow-xl z-[9999] animate-fadeIn max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {times.map((t, i) => (
            <div
              key={i}
              onClick={() => handleSelect(t)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#153C87] hover:text-white transition ${
                selectedTime === t ? "bg-[#FFBD00]/20 font-semibold text-[#153C87]" : ""
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
