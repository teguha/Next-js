// components/Card.tsx
"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";
interface CardProps {
  title: string;
  location: string;
  price: string;
}

export default function Card({ title, location, price }: CardProps) {
const rating = 4;
  return (
    // <div className="w-80 h-100 mb-5 text-gray-500 bg-white rounded-xl overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)] transition ">
    //   <div className="w-full">
    //     <Image 
    //       src="/img/spa.jpg" 
    //       alt="spa" 
    //       width={800} 
    //       height={800} 
    //       className="w-full h-50 object-cover"
    //     />
    //   </div> 

    //   <div className="p-4 font-[roboto] shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)] transition">
    //     <div className="flex items-center justify-between ">

    //         <p className="gap-1 text-xs flex items-center "><span className="px-4 py-2 text-white font-bold text-xs rounded-full bg-blue-700  ">Wellines</span>
    //             {[...Array(5)].map((_, i) => (
    //                 <Star
    //                 key={i}
    //                 className={`w-5 h-5 ${
    //                     i < rating ? "text-yellow-400 fill-yellow-400 text-xs flext-row" : "text-gray-300"
    //                 }`}
    //                 />
    //             ))}
    //         </p>

    //         <p className="flex items-center gap-1 text-xs text-gray-500 font-semibold "><MapPin className="w-5 h-5"/> {location}</p>
    //     </div>
    //     <p className="mt-5 text-lg font-bold text-black">{title}</p>
    //     <p className="text-xs font-normal mt-1 font-[roboto]">Jln Kartika Plaza Nomor 11 Kuta Bali</p>
    //     <p className="mt-10 text-right text-black font-bold mt-2 text-2xl">{price}</p>
    //   </div>
    // </div>

  <div className="w-80 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
  {/* Image Section */}
  <div className="relative">
    <Image
      src="/img/spa.jpg"
      alt="spa"
      width={800}
      height={800}
      className="w-full h-48 object-cover"
    />

    {/* Category Tag */}
    <span className="absolute bottom-2 left-3 bg-blue-700 text-white text-[10px] uppercase font-semibold px-3 py-1 rounded-full shadow-md">
      Wellness
    </span>
  </div>

  {/* Card Body */}
  <div className="p-4 font-[roboto] flex flex-col justify-between h-52">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="flex items-center gap-1 text-xs text-gray-500 font-medium">
        <MapPin className="w-4 h-4" /> {location}
      </p>
    </div>

    {/* Title + Treatment */}
    <p className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
      {title}
    </p>
    <div>

      <p className="text-[18px]">
        <span className="font-semibold leading-snug text-blue-600">Sound Healing Packages</span>
      </p> 

      <p className="text-[12px] font-normal text-gray-500 mt-1">
        Time: <span className="font-medium text-gray-500">18:00</span>
      </p>
    </div>

    {/* Footer */}
    <div className="mt-2 flex items-center justify-between">
      <p className="text-xl font-bold text-gray-900">{price}</p>
      
      <button className="px-4 py-2 text-md font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  </div>
</div>

  );
}
