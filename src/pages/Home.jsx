import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SearchMedicine from '../components/SearchMedicine';
import ServicesList from '../components/Services';
import About from '../components/About';
import Mission from '../components/Mission';
import Reviews from '../components/Reviews';
import Hiring from '../components/Hiring';
import CTA from '../components/CTA';
import Stats from '../components/Stats';

const Home = () => {
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
      <CTA />
      <Stats />
    </>
  );
};

export default Home;
