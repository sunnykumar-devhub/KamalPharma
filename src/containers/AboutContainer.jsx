'use client';
import React from 'react';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';

const AboutContainer = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#F3E8FF] py-24 text-center">
        <h1 className="text-5xl lg:text-7xl font-black text-[#3B1E4D]">About Us</h1>
        <p className="text-[#7A3E9D] font-bold uppercase tracking-[0.4em] text-xs mt-4">Heritage of Healing</p>
      </div>
      <About />
      <Mission />
      <Stats />
    </div>
  );
};

export default AboutContainer;
