// components/Hero.tsx
// components/Hero.tsx
"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Categories from "../components/Categories";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomTimePicker from "../components/CustomTimePicker";
import CustomLocationPicker from "../components/CustomLocationPicker";
import Filter from "../filter/filter";


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



export default function Search() {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [activeLoc, setActiveLoc] = useState(location[0].id);

  return (
    <section className="pb-16 h-75 md:h-65 text-white bg-[#153C87] rounded-b-2xl overflow-visible">
      
      <div className="container mx-auto px-20 mb-10">
        <Navbar />
        <Categories cat={categories}
        activeCat={activeCat}
        setActiveCat={setActiveCat} />
        
        <div className="leading-none">
          <p className="mt-10 md:mt-10 text-2xl md:text-4xl font-bold  tracking-wide font-[roboto] leading-none">
            Best Choice For Relaxation
          </p>
          <p className="mt-2 text-2xl md:font-normal tracking-wide font-[roboto] leading-none ">
            Book spa , salon, and wellness activity in one click ...
          </p>
        </div>
      </div>

      <Filter />
    </section>

    
  );
}
