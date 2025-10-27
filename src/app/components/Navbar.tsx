"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger & close

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className="flex items-center justify-between py-4 b-2xl text-white ">
            
            {/* logo */}
            <p className="text-3xl font-bold tracking-wider font-[roboto]">Nirvana</p>
            {/* small hiden */}
            <ul className="hidden md:flex gap-6 none tracking-wider">
                <li className="hover:underline cursor-pointer text-sm"><a href="/">Home</a></li>
                <li className="hover:underline cursor-pointer text-sm">Register property</li>
                <li className="hover:underline cursor-pointer text-sm">Login</li>
                <li className="hover:underline cursor-pointer text-sm">SignUp</li>
            </ul>

            {/* Hamburger layar kecil */}
            {/* medium hiden */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>

            {/* Mneu Layar Kecil jika open */}
            {open && (
                <ul className="absolute flex-col gap-4 md:hidden top-10 right-4 w-full h-full bg-gray-800 text-white rounded-lg p-4 ">
                    <li className="hover:underline cursor-pointer text-sm">Home</li>
                    <li className="hover:underline cursor-pointer text-sm">Register property</li>
                    <li className="hover:underline cursor-pointer text-sm">Login</li>
                    <li className="hover:underline cursor-pointer text-sm">SignUp</li>
                </ul>
            )}
        </nav>

        
    )
}