// components/Hero.tsx
// components/Hero.tsx
"use client";

import Navbar from "./Navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Categories from "./Categories";
import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";
import CustomLocationPicker from "./CustomLocationPicker";


const location = [
  {
    'id'    : 1,
    'name'  : 'Bali'
  },
  {
    'id'    : 2,
    'name'  : 'Lombok'
  },
  {
    'id'    : 3,
    'name'  : 'Surabaya'
  }
];

const categories = [
  {
    'id'          : 1,
    'name'        : 'Spa',
    'icon'        : 'Droplet'
  },
   {
    'id'          : 2,
    'name'        : 'Salon',
    'icon'        : 'Scissors'
  },
   {
    'id'          : 3,
    'name'        : 'Wellness',
    'icon'        : 'HeartHandshake'
  }
];



export default function Hero() {
  // const [date, setDate] = useState<Date | null>(null);
  // const [time, setTime] = useState<Date | null>(null);
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [activeLoc, setActiveLoc] = useState(location[0].id);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleSearch = () => {
    const query = new URLSearchParams({
      location  : activeLoc,
      date      : date ? date.toISOString().split("T")[0] : "",
      time      : time ? time : "",
      category  : activeCat ? activeCat : 'Spa'
    }).toString();

    window.location.href = `/filter?${query}`;
  }




  return (
    <section className="pb-16 h-75 md:h-91 text-white bg-[#153C87] rounded-b-2xl overflow-visible">
      <div className="container mx-auto px-20">
        <Navbar />
        <Categories cat={categories}
        activeCat={activeCat}
        setActiveCat={setActiveCat} />
        
        <div className="leading-none">
          {/* <h1 className="hidden md:block md:mt-15 md:text-5xl font-bold font-[roboto] font-semibold">
            Nirvana
          </h1> */}
          <p className="mt-16 md:mt-16 text-2xl md:text-4xl font-bold  tracking-wide font-[roboto] leading-none">
            Best Choice For Relaxation
          </p>
          <p className="mt-2 text-2xl md:font-normal tracking-wide font-[roboto] leading-none ">
            Book spa , salon, and wellness activity in one click ...
          </p>
        </div>

        {/* Search form */}
        <div className="flex mt-15 w-full h-10 md:h-20 text-gray-600 bg-white rounded-xl overflow-visible shadow-lg border-2 md:border-5 border-[#FFBD00]">

          <div className="flex-1 border-r-2 md:border-r-5 border-[#FFBD00] px-4 flex items-center">
            <CustomLocationPicker
              locations={location}
              value={activeLoc}
              onChange={(val) => setActiveLoc(val)}
            />
          </div>



          <div className="flex-1 border-r-2 md:border-r-5 border-[#FFBD00] px-4 flex items-center ">
            <CustomDatePicker   value={date} onChange={(d) => setDate(d)} />
          </div>


          {/* Time Picker */}
          <div className="flex-1 px-4 flex items-center">
            <CustomTimePicker value={time} onChange={setTime} />
          </div>


          <button
            onClick={handleSearch}
           className="flex items-center justify-center px-1 w-10 md:w-20 text-sm md:text-base bg-blue-600 text-white font-bold hover:bg-blue-800 rounded-lg">
            Find
          </button>

        </div>
      </div>
    </section>
  );
}
