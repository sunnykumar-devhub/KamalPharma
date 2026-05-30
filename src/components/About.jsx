'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Overlapping Images */}
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 w-full"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
              <Image 
                src="/storefront.jpg" 
                alt="Kamal Pharma Storefront" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -left-10 z-20 w-48 h-48 lg:w-64 lg:h-64 border-[15px] border-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop" 
              alt="Hand with Pills" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight mb-8">
              Keep yourself Healthy and Fit With Right Medicine.
            </h2>
            
            {/* Quote Box */}
            <div className="mb-10 relative">
              <span className="text-8xl text-secondary font-serif absolute -top-10 -left-4 z-0">“</span>
              <div className="relative z-10">
                <p className="text-lg font-bold text-primary-dark italic leading-relaxed mb-4">
                  "Your trusted partner in health and wellness, providing fast and reliable delivery across Patna."
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-md">
                  Kamal Pharma is committed to excellence in pharmaceutical care. We leverage modern technology to ensure you get your medicine when you need it most.
                </p>
                <div className="mt-8">
                  <div className="text-3xl font-serif text-gray-400 opacity-50">Kamal Pharma</div>
                  <div className="text-[10px] font-black uppercase text-primary tracking-widest mt-1">Trusted Healthcare Since 2024</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Read More
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Phone size={14} />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
