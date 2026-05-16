'use client';
import React from 'react';
import { Search, Filter, Pill, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchMedicine = () => {
  return (
    <section className="section-padding bg-white">
      <div className="bg-gradient-to-br from-[#7A3E9D] to-[#3B1E4D] rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Find Your <br /> Medicine Quickly
            </h2>
            <p className="text-white/80 text-sm mb-10 max-w-lg leading-relaxed">
              Search through our extensive database of certified medications, vitamins, 
              and healthcare products. Available for home delivery.
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto lg:mx-0 group">
              <input 
                type="text" 
                placeholder="Search by medicine name, symptoms..." 
                className="w-full bg-white rounded-2xl py-6 pl-14 pr-32 outline-none text-gray-800 shadow-2xl font-medium"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#7A3E9D] transition-colors" size={24} />
              <button className="absolute right-3 top-3 bottom-3 bg-[#7A3E9D] text-white px-8 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#3B1E4D] transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {['Vitamins', 'Pain Relief', 'Cold & Flu', 'Diabetes'].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#7A3E9D] mb-6 group-hover:bg-[#7A3E9D] group-hover:text-white transition-all">
                  <Pill size={24} />
                </div>
                <h4 className="text-white font-black text-lg mb-2">{cat}</h4>
                <div className="flex items-center text-white/60 text-[10px] font-bold tracking-widest uppercase">
                  Explore <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMedicine;
