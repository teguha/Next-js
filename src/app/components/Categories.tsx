"use client";
import { LeafyGreen } from "lucide-react";
import { Droplet } from "lucide-react";
import { useState } from "react";
import { HeartHandshake } from "lucide-react";
import { ScissorsLineDashed } from "lucide-react";
import { Scissors } from "lucide-react";

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoriesProps {
  cat: Category[];
  activeCat: number | null;
  setActiveCat: (id: number) => void;
}

export default function Categories({ cat, activeCat, setActiveCat } : CategoriesProps){

    // const [activeCat, setActiveCat] = useState(cat[0].id)

    const iconMap: Record<string, JSX.Element> = {
        Droplet: <Droplet className="w-5 h-5" />,
        Scissors: <Scissors className="w-5 h-5" />,
        HeartHandshake: <HeartHandshake className="w-5 h-5" />,
    };


    return(
        <>
        <div className="flex justify-start items-center w-full py-2 gap-3 text-xs md:text-sm">
            {/* Spa */}
            {
                cat.map((item) => (
                    <button  className={`flex justify-center items-center gap-2 min-w-[90px] md:w-30 h-8 md:h-11 rounded-full cursor-pointer transition-all
                            ${
                            activeCat === item.id
                                ? "font-medium border border-white bg-white/15 hover:bg-white/10"
                                : "text-white border border-transparent hover:bg-white/10"
                            }`}
                            onClick={() => setActiveCat(item.id)}
                            >
                        
                            {iconMap[item.icon] ?? <Droplet className="w-5 h-5" />}
                            <p  key={item.id} 
                                className="tracking-widest"
                                >{item.name}
                            </p>
                        
                    </button>
                ))
            }

            {/* Salon */}
            {/* <div className="flex justify-center items-center gap-2 min-w-[90px] h-8 md:w-30 md:h-12 text-white rounded-full border border-transparent  hover:bg-white/10 hover:border-[1px] transition-all cursor-pointer">
                <Scissors className="w-5 h-5"/>
                <p className="tracking-widest">Salon</p>
            </div> */}

            {/* Wellness */}
            {/* <div className="flex justify-center items-center gap-2 min-w-[90px] h-8 md:w-30 md:h-12 text-white rounded-full border border-transparent hover:border-[1px] hover:bg-white/10 active:border-2 transition-all cursor-pointer">
                <HeartHandshake className="w-5 h-5"/>
                <p className="tracking-widest">Wellness</p>
            </div> */}
        </div>

        </>
    )
}