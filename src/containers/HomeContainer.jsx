'use client';
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SearchMedicine from '@/components/SearchMedicine';
import ServicesList from '@/components/Services';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Reviews from '@/components/Reviews';
import Hiring from '@/components/Hiring';
import Cta from '@/components/CTA';
import Stats from '@/components/Stats';

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Features />
      <SearchMedicine />
      <ServicesList />
      <About />
      <Mission />
      <Reviews />
      <Hiring />
      <Cta />
      <Stats />
    </>
  );
};

export default HomeContainer;
