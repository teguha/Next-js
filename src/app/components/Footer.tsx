"use client";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-black text-white">

      {/* Bottom Footer */}
      <div className="py-6 container mx-auto px-6">
        <div className="grid md:grid-cols-3 text-center md:text-left place-items-center">
          
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2 text-center">Categories</h3>
            <ul className="space-y-1 text-gray-300 text-sm text-left flex flex-row gap-2">
              <li>Spa</li>
              <li>Wellness</li>
              <li>Salon</li>
            </ul>
          </div>

          {/* Nirvana Social */}
          <div>
            <h3 className="font-semibold mb-2 text-center">Nirvana</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2 text-center">Contact</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm">
              <Mail className="w-4 h-4" /> Support@nirvana.com
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm mt-1">
              <Phone className="w-4 h-4" /> +162888
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


