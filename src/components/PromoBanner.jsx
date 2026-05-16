'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <section className="section-padding">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] p-12 lg:p-20 overflow-hidden shadow-2xl"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Get Exclusive Benefits <br />
              <span className="text-purple-200">Join Our Membership</span>
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-xl">
              Become a part of our health community and enjoy special discounts, 
              priority consultations, and early access to new services.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-purple-50 transition-colors shadow-lg">
                Join Member Now
              </button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full flex flex-col items-center justify-center border-8 border-white/20 shadow-2xl transform hover:rotate-12 transition-transform cursor-pointer">
              <span className="text-white font-bold text-xl uppercase">Save Up To</span>
              <span className="text-white font-black text-6xl md:text-8xl">40%</span>
              <span className="text-white font-bold text-xl">OFF</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
