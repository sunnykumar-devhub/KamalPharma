'use client';
import React from 'react';
import ServicesList from '@/components/Services';
import Cta from '@/components/CTA';
import SearchMedicine from '@/components/SearchMedicine';

const ServicesContainer = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#1A0B2E] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7A3E9D] opacity-10"></div>
        <h1 className="text-5xl lg:text-7xl font-black text-white relative z-10">Our Services</h1>
        <p className="text-[#F3E8FF] font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">Comprehensive Healthcare Solutions</p>
      </div>
      <SearchMedicine />
      <ServicesList />
      <Cta />
    </div>
  );
};

export default ServicesContainer;
