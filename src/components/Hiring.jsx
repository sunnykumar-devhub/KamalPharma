'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Hiring = () => {
  return (
    <section className="section-padding bg-[#1A0B2E] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-red-500 text-white text-[10px] font-black uppercase px-4 py-1 rounded-full animate-pulse">Hiring</span>
            <p className="text-[#F3E8FF] font-black uppercase tracking-[0.3em] text-[10px]">Join Our Medical Team</p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
            Make an Impact <br /> on Healthcare
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-lg leading-relaxed">
            We are looking for passionate pharmacists, lab technicians, and healthcare 
            assistants to join our growing family in Bali. Build your career with KamalPhar.
          </p>

          <div className="space-y-6 mb-12">
            {[
              'Professional Work Environment',
              'Competitive Salary & Benefits',
              'Continuous Medical Training',
              'Impact Local Community Health'
            ].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <CheckCircle className="text-[#7A3E9D]" size={20} />
                <span className="text-gray-300 font-bold text-xs uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-white text-[#3B1E4D] px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#7A3E9D] hover:text-white transition-all shadow-2xl">
            View Open Positions
          </button>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] border border-white/10 relative"
          >
            <Image 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
              alt="Hiring Pharmacists" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#7A3E9D]">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-[#3B1E4D]">12+</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Openings</div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 max-w-[150px]">Join Bali's fastest growing medical network.</p>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#7A3E9D] opacity-10 blur-[150px]"></div>
    </section>
  );
};

export default Hiring;
