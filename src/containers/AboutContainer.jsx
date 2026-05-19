'use client';
import React from 'react';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';

const AboutContainer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1A0B2E] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7A3E9D] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">About Us</h1>
          <p className="text-[#F3E8FF] font-bold uppercase tracking-[0.4em] text-xs">Heritage of Healing</p>
        </motion.div>
      </div>
      <About />
      <Mission />
      <Stats />
    </div>
  );
};

export default AboutContainer;
