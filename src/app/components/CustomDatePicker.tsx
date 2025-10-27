import React, { useState, useEffect } from "react";

const CustomDatePicker = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value || null);
  const [showCalendar, setShowCalendar] = useState(false);

  const minDate = new Date();
  const maxDate = new Date(minDate.getFullYear() + 2, 11, 31);

  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("id-ID", { month: "long" })
  );

  useEffect(() => {
    onChange && onChange(selectedDate);
  }, [selectedDate]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay() || 7;

  const renderDays = () => {
    const days = [];
    let dayCount = 1 - (firstDayIndex - 1);

    for (let row = 0; row < 6; row++) {
      const rowCells = [];
      for (let col = 0; col < 7; col++) {
        const currentDay = new Date(year, month, dayCount);
        
        const isCurrentMonth = currentDay.getMonth() === month;
        
        // const lastDay    = currentDay.toDateString() < new Date().toDateString();
        const isToday    =
          currentDay.toDateString() === new Date().toDateString();
        
        const isSelected =
          selectedDate &&
          currentDay.toDateString() === selectedDate.toDateString();

        rowCells.push(
          <td
            key={col + row * 7}
            className={`text-center cursor-pointer ${
              !isCurrentMonth ? "text-gray-300" : ""
            }`}
            onClick={() => {
              if (isCurrentMonth) {
                  
                  setSelectedDate(currentDay);
                  setShowCalendar(false);
                
              }
            }}
          >
            <span
              className={`inline-block w-8 h-8 leading-8 rounded-full transition-all ${
                isSelected
                  ? "bg-[#FFBD00] text-white font-bold" : isToday
                  ? "border-2 border-[#153C87] text-[#153C87] font-semibold"
                  : "hover:bg-[#153C87] hover:text-white"
              }`}
            >
              {currentDay.getDate()}
            </span>
          </td>
        );
        dayCount++;
      }
      days.push(<tr key={row}>{rowCells}</tr>);
    }
    return days;
  };

  return (
    <div className="relative w-full font-[Roboto] z-[100]">
      {/* Input Display */}
      <input
        type="text"
        readOnly
        value={
          selectedDate
            ? selectedDate.toLocaleDateString("id-ID")
            : "Pilih tanggal"
        }
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full text-xs md:text-base font-semibold tracking-wider outline-none px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-[#FFBD00] transition"
      />

      {showCalendar && (
        <div className="absolute top-12 left-0 w-80 bg-white border border-gray-200 rounded-2xl shadow-lg z-100 animate-fadeIn">
          <div className="flex justify-between items-center bg-[#153C87] text-white px-4 py-2 rounded-t-2xl">
            
            {/* month */}
            <button
              onClick={() => setMonth(month === 0 ? 11 : month - 1)}
              className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/25"
            >
              ‹
            </button>

            <div className="flex gap-2">

              {/* month */}
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="bg-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none"
              >
                {months.map((m, i) => (
                  <option key={i} value={i} className="text-black">
                    {m}
                  </option>
                ))}
              </select>

              {/* year */}
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="bg-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none"
              >
                {Array.from(
                  { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
                  (_, i) => minDate.getFullYear() + i
                ).map((y) => (
                  <option key={y} value={y} className="text-black">
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* month */}
            <button
              onClick={() => setMonth(month === 11 ? 0 : month + 1)}
              className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/25"
            >
              ›
            </button>

          </div>

          <table className="w-full text-center text-sm">
            <thead>
              <tr className="bg-gray-100">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <th key={d} className="py-2 font-semibold text-gray-600">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{renderDays()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
