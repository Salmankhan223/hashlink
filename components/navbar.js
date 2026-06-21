'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-gray-100 px-4 py-3.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
            <span className="text-white font-black text-xl select-none">#</span>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            Hash<span className="text-indigo-600 font-extrabold">Link</span>
          </span>
        </div>

        {/* Desktop Navigation Links (Bade screens ke liye) */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-600 text-sm">
          <a href="/" className="hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all">Home</a>
          <a href="/about" className="hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all">About</a>
          <a href="/shorten" className="hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all">Shorten</a>
          <a href="/contact" className="hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all">Contact Us</a>
        </div>

        {/* Right Side Action Button (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="/shorten" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm shadow-indigo-100"
          >
            Try Free ⚡
          </a>
        </div>

        {/* Mobile Hamburger Button (Chhote screens par dikhega) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 focus:outline-none p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Sirf open hone par dikhega) */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full border-b border-gray-100 px-4 py-4 space-y-3 shadow-lg flex flex-col font-semibold text-gray-700 animate-fade-in">
          <a href="/" className="hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-xl transition-all" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" className="hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-xl transition-all" onClick={() => setIsOpen(false)}>About</a>
          <a href="/shorten" className="hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-xl transition-all" onClick={() => setIsOpen(false)}>Shorten</a>
          <a href="/contact" className="hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-xl transition-all" onClick={() => setIsOpen(false)}>Contact Us</a>
          <div className="pt-2 border-t border-gray-100">
            <a 
              href="/shorten" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-sm transition-all text-center block"
              onClick={() => setIsOpen(false)}
            >
              Try Free ⚡
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}