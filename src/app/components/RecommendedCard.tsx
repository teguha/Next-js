// components/Popular.tsx
"use client";

import { container } from "googleapis/build/src/apis/container";
import Card from "./PopularCard";
import { Star } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const citys = [
    {
        'id'    : 1,
        'name'  : 'Kuta'
    },
    {
        'id'    : 2,
        'name'  : 'Seminyak'
    },
    {
        'id'    : 3,
        'name'  : 'Ubud'
    },
    {
        'id'    : 4,
        'name'  : 'Sanur'
    },
];


const packages = [
    {
        'id'            : 1,
        'name'          : 'Lagoon Spa',
        'location_id'   : 1,
        'city_id'       : 1,
        'city_name'     : 'Kuta',
        'price'         : '250.000',
    },
    {
        'id'            : 2,
        'name'          : 'Bali Spa',
        'location_id'   : 1,
        'city_id'       : 2,
        'city_name'     : 'Seminyak',
        'price'         : '200.000',
    },
    {
        'id'            : 3,
        'name'          : 'Sunset Spa',
        'location_id'   : 1,
        'city_id'       : 3,
        'city_name'     : 'Ubud',
        'price'         : '300.000',
    },
    {
        'id'            : 4,
        'name'          : 'Heal Spa',
        'location_id'   : 1,
        'city_id'       : 4,
        'city_name'     : 'Sanur',
        'price'         : '250.000',
    }, 
    {
        'id'            : 5,
        'name'          : 'Sunrise Spa',
        'location_id'   : 1,
        'city_id'       : 1,
        'city_name'     : 'Kuta',
        'price'         : '250.000',
    },
    {
        'id'            : 6,
        'name'          : 'Lombok Spa',
        'location_id'   : 2,
        'city_id'       : 2,
        'city_name'     : 'Kuta',
        'price'         : '250.000',
    },
    {
        'id'            : 7,
        'name'          : 'Lombok Spa',
        'location_id'   : 2,
        'city_id'       : 2,
        'city_name'     : 'Seminyak',
        'price'         : '200.000',
    },
    {
        'id'            : 8,
        'name'          : 'Lombok Spa',
        'location_id'   : 2,
        'city_id'       : 3,
        'city_name'     : 'Ubud',
        'price'         : '300.000',
    },
    {
        'id'            : 9,
        'name'          : 'Lombok Spa',
        'location_id'   : 2,
        'city_id'       : 4,
        'city_name'     : 'Sanur',
        'price'         : '250.000',
    }, 
    {
        'id'            : 10,
        'name'          : 'Lombok Spa',
        'location_id'   : 2,
        'city_id'       : 1,
        'city_name'     : 'Kuta',
        'price'         : '250.000',
    }
];

export default function Recommended() {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if(scrollRef.current){
            const {scrollLeft , clientWidth} = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({left: scrollTo, behavior: "smooth"});
        }
    }

    const [activeLoc , setActiveLoc] = useState(location[0].id);
    const filterPackages = activeLoc ? packages.filter((i) => i.location_id == activeLoc) : packages;

    return (
    <div className="container mx-auto px-20">

        <section className="py-25">
            <div className="flex justify-bentween items-center">
                <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 border rounded-full border-1 p-1 border-blue-700 bg-blue-700"/>
                <h2 className="px-2 text-2xl font-bold font-[roboto]">  Recommended For You</h2>
            </div>
            <p className="px-12 text-gray-500 mb-6 font-[roboto]">
                Best price and simple booking with nirvana
            </p>

            {/* filter buttons */}
            <div className="flex gap-3 mb-6 px-8 font-[roboto]">
                {location
                .filter((l) => packages.some((p) => p.location_id === l.id ))
                .map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveLoc(item.id)}
                    className={`px-6 py-2 text-blue-600 rounded-full hover:bg-blue-700 hover:text-white ${activeLoc == item.id ? 'bg-blue-700 text-white': 'bg-blue-100'}`}
                >
                    {item.name}
                </button>
                ))}
            </div>

            {/* Tombol kiri */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-45 md:left-60 top-350 -translate-y-1/2 z-10 bg-white/70 hover:bg-white border border-gray-300 
                        rounded-full shadow p-2"
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

             {/* Wrapper Card Scroll */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-8"
            >
                {
                    filterPackages.map((item, index) => (
                        <div className="flex-shrink-0">
                            <Card key={item.id} title={item.name} location={item.city_name} price={"IDR "+item.price} />
                        </div>
                    ))
                }
                {/* <div className="flex-shrink-0">
                <Card title="Lagoon Spa" location="Bali" price="IDR 200.000" />
                </div>
                <div className="flex-shrink-0">
                <Card title="Sunset Spa" location="Seminyak" price="IDR 250.000" />
                </div>
                <div className="flex-shrink-0">
                <Card title="Ocean Spa" location="Sanur" price="IDR 300.000" />
                </div>
                <div className="flex-shrink-0">
                <Card title="Sky Spa" location="Ubud" price="IDR 220.000" />
                </div> */}
            </div>

            <button
                onClick={() => scroll("right")}
                className="absolute right-35 md:right-65 top-350 -translate-y-1/2 z-10 bg-white/70 hover:bg-white  border border-gray-300 
                rounded-full shadow p-2"
            >
            <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
        </section>
    </div>
  );
}
