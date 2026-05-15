import React from 'react';
import { motion } from 'framer-motion';
import ServicesList from '../components/Services';
import SearchMedicine from '../components/SearchMedicine';
import CTA from '../components/CTA';
import Stats from '../components/Stats';

const Services = () => {
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
          <h1 className="text-5xl lg:text-7xl font-black text-[#3B1E4D] mb-6">Our Services</h1>
          <p className="text-[#7A3E9D] font-bold uppercase tracking-[0.4em] text-xs">Premium Medical Solutions for You</p>
        </motion.div>
      </div>

      <SearchMedicine />
      <ServicesList />
      <Stats />
      <CTA />
    </div>
  );
};

export default Services;
