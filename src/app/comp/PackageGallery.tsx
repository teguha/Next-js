import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";

interface Props{
    images : string[]; //nyimpen array url gambar
}

export default function PackageGallery({images} :Props){
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <div className="flex flex-col md:flex-row gap-4">
            {/* kolom gambar utama */}
            <div className="flex-1">
                <img src={images[currentIndex]}
                    alt ={`Image ${currentIndex}`}
                    className="w-[50%] h-auto object-cover rounded-lg shadow-lg" />
            </div>

            {/* kolom tumbnail */}
            <div className="flex flex-row md:flex-col md:w-1/4 gap-2 overflow-auto">
                {
                    images.map((image, index) => (
                        <button
                            key ={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`border rounded-lg overflow-hidden focus:outline-none ${index == currentIndex ? 'border-blue-500' : 'border-gray-300'}`}
                            >
                                <img src={image} alt={`Thumbnail ${index}`} className="w-20 h-20 object-cover"/>
                            </button>
                    ))
                }
            </div>
        </div>
    )
}