'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ServicesList from '@/components/Services';
import Cta from '@/components/CTA';
import SearchMedicine from '@/components/SearchMedicine';

const ServicesContainer = () => {
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
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">Our Services</h1>
          <p className="text-[#F3E8FF] font-bold uppercase tracking-[0.4em] text-xs">Comprehensive Healthcare Solutions</p>
        </motion.div>
      </div>
      <SearchMedicine />
      <ServicesList />
      <Cta />
    </div>
  );
};

export default ServicesContainer;
