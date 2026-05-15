import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Mission from '../components/Mission';
import Stats from '../components/Stats';
import Hiring from '../components/Hiring';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Premium Header - Matching Contact Style */}
      <div className="bg-[#F3E8FF] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7A3E9D] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-[#3B1E4D] mb-6">About Us</h1>
          <p className="text-[#7A3E9D] font-bold uppercase tracking-[0.4em] text-xs">Trusted Healthcare Excellence Since 1999</p>
        </motion.div>
      </div>

      <About />
      <Stats />
      <Mission />
      <Hiring />
    </div>
  );
};

export default AboutUs;
