// components/DateRangeInput.tsx
import { useState } from 'react';
// import DatePicker from 'react-tailwindcss-datepicker';
import DatePicker from "react-datepicker";
type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export default function DateRangeInput({ label }: { label?: string }) {
  const [value, setValue] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: { startDate: Date | null; endDate: Date | null }) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-md mx-auto">
      {label && <label className="block text-gray-700 font-medium mb-2">{label}</label>}
      <DatePicker
        primaryColor="blue"
        asSingle={false}  // false supaya bisa pilih range (start & end)
        value={value}
        onChange={handleValueChange}
        inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        displayFormat="DD MMM YYYY"
        placeholder="Select date range"
      />
    </div>
  );
}
