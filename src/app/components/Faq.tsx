"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Faq(){

    const faqs = [
        {
        question: "Apa itu Nirvana?",
        answer: "Nirvana adalah platform booking spa & salon dengan harga terbaik dan proses mudah.",
        },
        {
        question: "Apakah Nirvana gratis?",
        answer: "Ya, pengguna bisa mencari & membandingkan tanpa biaya. Biaya hanya berlaku saat booking.",
        },
        {
        question: "Kenapa memilih Nirvana?",
        answer: "Karena kami menyediakan harga transparan, layanan simpel, dan booking terpercaya.",
        },
    ];

    function Dropdown({ question, answer }) {
        const [open, setOpen] = useState(false);

        return (
            <div className="border border-gray-300 rounded-lg bg-white shadow">
            <button
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800"
                onClick={() => setOpen(!open)}
            >
                {question}
                <ChevronDown
                className={`w-5 h-5 transition-transform ${
                    open ? "rotate-180" : ""
                }`}
                />
            </button>

            {/* jika open berikan naswer */}
            {open && (
                <div className="px-4 pb-4 text-gray-600 text-sm text-start">
                {answer}
                </div>
            )}
            </div>
        );
    }

    return(
        <div className="bg-[#153C87]">
            <div className="w-full h-full flex flex-row justify-between items-start container mx-auto py-10">
                <div className="w-full text-white font-semibold text-3xl text-center">
                    FAQ ?
                </div>


                <div className="w-full flex flex-col gap-3 text-white font-semibold text-normal text-center ">
                    {faqs.map((faq, index) => (
                        <Dropdown key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

            </div>
        </div>
    )


}

