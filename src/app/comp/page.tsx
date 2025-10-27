"use client";
import PackageGallery from "./PackageGallery";

import DateRangeInput from "./DateRangeInput";
import { useState } from "react";

export default function Home(){
    const images = [
        "https://images.trvl-media.com/lodging/7000000/6490000/6488000/6487920/b8a62efe.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp",
        "https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp",
        "https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp",
        "https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp",
        "https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp"
    ];

    const [quantity, updateQuantity] = useState(0);

    return(
        <div>
            <div className="relative md:h-[10vh] w-full bg-white flex flex-row justify-between items-center container mx-auto px-10 mt-5 border border-gray-300 border-1 rounded-lg shadow-lg shadow-gray-300">
                <div className="flex-1 text-black text-xl font-semibold font-[roboto] leading-none">Logo</div>

                <div className="flex-1 flex flex-col md:flex-row justify-end md:items-center gap-2 px-2 py-5 md:py-1">
                    <a href="#" className="text-gray-500 font-semibold leading-[1.5] font-[roboto] text-sm hover:text-blue-500 transition-all duration-300 px-3">Login</a>

                    <a href="#" className="text-gray-500 font-semibold leading-[1.5] font-[roboto] text-sm hover:text-blue-500 transition-all duration-300 px-3">About</a>

                    <a href="#" className="text-gray-500 font-semibold leading-[1.5] font-[roboto] text-sm hover:text-blue-500 transition-all duration-300 px-3">Package</a>

                    <a href="#" className="text-gray-500 font-semibold leading-[1.5] font-[roboto] text-sm hover:text-blue-500 transition-all duration-300 px-3">Menu</a>
                </div>

                
            </div>

            {/* filter */}
            <div className="h-[10vh] w-full border border-gray-300 rounded-lg shadow-lg shadow-gray-300 mt-5 mb-10 container mx-auto px-10 bg-white">
                {/* <DateRangeInput label="Choose your dates:" /> */}
            </div>


            {/* package */}
            <div className="relative grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 container mx-auto mt-5">
                <div className="w-full">
                    <div className="relative h-[30vh] md:h-[50vh] border border-gray-100 border-1 rounded-lg p-2 shadow-lg shadow-gray-300 mb-2">

                        {/* image */}
                        <div className="relative flex flex-col md:flex-row gap-1 overflow-hidden">
                            {/* Gambar Utama */}

                            <div className="w-full md:w-1/2">
                                <img
                                className="w-full h-auto object-cover rounded-sm shadow-lg shadow-gray-300"
                                src="https://ak-d.tripcdn.com/images/0225t12000849sd7h7DF1_R_600_400_R5.webp"
                                alt="tripimg"
                                
                                />
                            </div>

                            {/* Thumbnail */}
                            <div className="w-full md:w-1/2 grid grid-cols-3 gap-1">
                                {images.map((image, index) => (
                                <div key={index} className="w-full">
                                    <img
                                    className="w-full h-full object-cover rounded-sm shadow-md shadow-gray-300"
                                    src={image}
                                    alt={`thumb-${index}`}
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-5 mt-10 px-1">
                            
                            <div className="md:w-1/2 flex flex-col space-y-2">
                            <p className="inline-flex items-center space-x-2 px-5 text-black text-md font-semibold font-[roboto] leading-none">
                                Rafting River Sidemen
                            </p>
                            <label className="inline-flex items-center space-x-2 mt-1">
                                <input 
                                type="radio" 
                                name="option" 
                                value="1" 
                                className="form-radio h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-gray-700 text-[14px] leading-normal bg-blue-500 p-2 rounded-sm text-white font-normal">Package 1 / IDR 1200.000</span>
                            </label>

                            <label className="inline-flex items-center space-x-2">
                                <input 
                                type="radio" 
                                name="option" 
                                value="2" 
                                className="form-radio h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-gray-700 text-[14px] leading-normal">Package 2 / IDR 1200.000</span>
                            </label>
                            </div>


                            <div className="relative md:w-2/2 flex flex-col justify-between border border-gray-300 rounded-lg px-4 py-4">
                                <p className="absolute -top-5 left-2 bg-blue-500 px-5 py-1 rounded-sm text-sm text-white font-normal leading-normal">
                                    Selected Package
                                </p>
                                <div className="flex flex-row justify-between">
                                    <p className="text-gray-800 font-semibold text-xl font-[roboto] leading-normal">Package 1</p>

                                    <p className="text-gray-800 font-semibold text-xl font-[roboto] leading-normal">IDR 1200.000 / Pax</p>
                                </div>

                                <div className="flex flex-row mt-1">
                                    <div className="w-full">

                                        <ul>
                                            <li className="text-sm font-[roboto] text-gray-700">Day 1 Go To Home</li>

                                            <li className="text-sm font-[roboto] text-blue-700 mt-1">View More</li>
                                        </ul>
                                    </div>

                                    <div className="w-full flex justify-end">
                                        <div className="flex flex-row justify-between items-center border border-gray-300 rounded-lg w-[72%] overflow-hidden">
                                            <button
                                            type="button"
                                            className="px-3 py-2 bg-blue-500 text-white text-xl font-bold"
                                            onClick={() => updateQuantity(q => Math.max(0, q - 1))}
                                            disabled={quantity <= 0}
                                            >
                                            −
                                            </button>

                                            <div className="px-3 py-2 text-black font-medium min-w-[2rem] text-center">
                                            {quantity}
                                            </div>

                                            <button
                                            type="button"
                                            className="px-3 py-2 bg-blue-500 text-white text-xl  font-bold"
                                            onClick={() => updateQuantity(q => q + 1)}
                                            >
                                            +
                                            </button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        {/* image */}
                        {/* <PackageGallery images={images} /> */}

                    </div>




                    <div className="h-[30vh] border border-gray-100 border-1 rounded-lg p-4 shadow-lg shadow-gray-100 mb-2">

                    </div>

                    <div className="h-[30vh] border border-gray-100 border-1 rounded-lg p-4 shadow-lg shadow-gray-100 mb-2">

                    </div>

                    <div className="h-[30vh] border border-gray-100 border-1 rounded-lg p-4 shadow-lg shadow-gray-100 mb-2">

                    </div>

                </div>

                <div className="sticky top-[10vh] z-30 h-[30vh] w-full border border-gray-300 border-1 rounded-lg p-4 shadow-lg shadow-gray-300">

                </div>
            </div>

           

            {/* <div className="bg-cover bg-center h-64">
                        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl md:text-5xl font-bold">Discover & Book Your Next Activity</h1>
                        </div>
                </div> */}
        </div>
    )
}