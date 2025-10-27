"use client"
import {CheckCircle} from "lucide-react"
import { Check } from "lucide-react"
export default function About(){
    return(
   <div className="container mx-auto px-6 md:px-20 py-16 font-[roboto]">
        <section>
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                    Why Choose <span className="text-blue-700">Nirvana</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                    Best price and simple booking with Nirvana — experience wellness like never before.
                </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Item */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Therapists</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                Our certified therapists ensure your session is safe, relaxing, and truly revitalizing.
                </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Packages</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                Get premium experiences at prices that make you smile — wellness shouldn’t break your wallet.
                </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Booking</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                Just a few clicks and your relaxation is booked — simple, fast, and stress-free.
                </p>
            </div>
            </div>

        </section>
    </div>

    )
}