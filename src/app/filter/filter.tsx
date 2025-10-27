"use client";

import { container } from "googleapis/build/src/apis/container";
import { useState } from "react";


  const city = [
    {
      id    : '1',
      name  : 'Jakarta',
    },
    {
      id    : '2',
      name  : 'Denpasar',
    },
    {
      id    : '3',
      name  : 'Mataram',
    },
    {
      id    : '4',
      name  : 'Surabaya',
    },
    {
      id    : '5',
      name  : 'Jakarta',
    },
    {
      id    : '6',
      name  : 'Denpasar',
    },
    {
      id    : '7',
      name  : 'Mataram',
    },
    {
      id    : '8',
      name  : 'Surabaya',
    }
  ]

export default function filterPage(){
    const [priceStart, setPriceStart] = useState(0);
    const [priceEnd, setPriceEnd] = useState(1000000);
    const [dataCity, setDataCity] = useState([]);
    return(
        <div className="relative h-[95vh] w-full mt-2 mb-10">
            <div className="container mx-auto px-20">
                <div className="flex flex-row justify-between gap-4">

                    <div className="flex-3/2 p-4 h-full bg-gray-50 rounded-lg border border-black-100 border-1">
                        <form action="" id="filterForm">
                            <div className="row p-2">
                                
                                <div className="col col-md-6 flex flex-col gap-2">
                                    <label className="text-black text-sm">Price Start</label>
                                    <input type="number" className="form form-control rounded-lg border border-gray-400 text-black font-normal p-2 text-center" value ={priceStart} max={priceEnd} onChange={(e) => setPriceStart(0)} />
                                </div>

                                <div className="col col-md-6 mt-2 flex flex-col gap-2">
                                    <label className="text-black text-sm">Price End</label>
                                    <input type="number" className="form form-control rounded-lg border border-gray-400 text-black font-normal p-2 text-center" value={priceEnd} min={priceStart} onChange={(e) => setPriceEnd(0)} />
                                </div>

                                <div className="col col-md-6 mt-2">
                                    <label className="text-black">City</label>
                                    <ul>
                                    {city.map((ex) => (
                                        <li key={ex.id} className="mt-2">
                                        <label className="text-normal font-[roboto] text-black">
                                            <input type="checkbox" className="mr-2" onChange={dataCity.some((c) => c.id === ex.id)}
                                                    onChange ={(e) => {
                                                    if(e.target.checked){
                                                        setDataCity([...dataCity, {id: ex.id , value: ex.name}]);
                                                    }else{
                                                        setDataCity(dataCity.filter((c) => c.id !== ex.id));
                                                    }
                                                }
                                            }  
                                            />
                                            {ex.name}
                                        </label>
                                        </li>
                                    ))}
                                    </ul>
                                </div>  

                                <div className="col col-md-6 mt-2">
                                    <label className="text-black">Search Package</label>
                                    <input type="text" className="border p-2 rounded-lg text-black font-normal" value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className="flex-3/1 p-4 h-full bg-blue-100 rounded-lg">
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 