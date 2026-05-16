'use client';
import React from 'react';
import { Syringe, ClipboardList, Package, ArrowRight, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Generic Medicine',
    description: 'A wide range of affordable and high-quality generic medications for all your needs.',
    icon: <Package size={40} className="text-primary" />,
    tag: 'Best Seller'
  },
  {
    title: 'Medical Check-Up',
    description: 'Professional health screenings and consultations with our experienced medical staff.',
    icon: <ClipboardList size={40} className="text-primary" />,
    tag: 'Popular'
  },
  {
    title: 'Vaccination',
    description: 'Safe and efficient vaccination services for flu, travel, and general wellness.',
    icon: <Syringe size={40} className="text-primary" />,
    tag: 'New'
  }
];

const ServicesList = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
             <HandHeart className="text-[#7A3E9D]" size={20} />
             <p className="text-[#7A3E9D] font-black uppercase tracking-widest text-[10px]">Our Expertise</p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#3B1E4D]">What We Offer</h2>
        </div>
        <button className="bg-gradient-to-r from-[#7A3E9D] to-[#3B1E4D] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">
          View All Services
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-[#7A3E9D] group relative overflow-hidden"
          >
            {/* Tag */}
            <div className="absolute top-6 right-6 bg-[#F3E8FF] text-[#7A3E9D] text-[9px] font-black uppercase px-3 py-1 rounded-full">
              {service.tag}
            </div>

            <div className="mb-8 transition-transform group-hover:scale-110 duration-300 bg-[#F3E8FF] w-20 h-20 rounded-2xl flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black text-[#3B1E4D] mb-4">{service.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">
              {service.description}
            </p>
            <button className="flex items-center space-x-2 text-[10px] font-black text-[#7A3E9D] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              <span>Read More</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Product Banner Style Callout */}
      <div className="mt-20 bg-[#3B1E4D] rounded-[4rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5"></div>
        <div className="flex-1 relative z-10">
          <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Special Offer</span>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">Premium Vitamins <br /> & Supplements</h3>
          <p className="text-gray-400 text-sm mb-8 max-w-lg font-medium">
            Boost your immunity with our curated selection of high-grade supplements. 
            Now available with same-day delivery across Bali.
          </p>
          <button className="btn-primary">Shop Collection</button>
        </div>
        <div className="flex-1 relative z-10 w-full lg:w-auto">
          <div className="relative h-[300px] lg:h-[400px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop" 
              alt="Supplements" 
              fill
              className="rounded-[3rem] shadow-2xl border-4 border-white/10 object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
