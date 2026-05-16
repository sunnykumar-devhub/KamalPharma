'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2000&auto=format&fit=crop" 
          alt="Complete Medicine" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            We Have The Most Complete <br />
            Medicine and Vitamins
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            Providing premium pharmaceuticals and health supplements to keep you at your best.
          </p>
          <button className="btn-primary px-10 py-4">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
