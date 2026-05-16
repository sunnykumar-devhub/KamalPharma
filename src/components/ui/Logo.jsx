'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Logo = ({ variant = 'full', className = '' }) => {
  const isFooter = variant === 'footer';
  
  return (
    <div className={`flex items-center space-x-3 group cursor-pointer ${className}`}>
      {/* Icon Container - Using the new Favicon SVG */}
      <motion.div 
        whileHover={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{ backgroundColor: isFooter ? 'rgba(255, 255, 255, 0.1)' : '#7A3E9D' }}
        className={`
          relative flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden
          ${isFooter ? 'w-10 h-10' : 'w-11 h-11 shadow-lg shadow-primary/20'}
        `}
      >
        <Image 
          src="/favicon.svg" 
          alt="Kamal Pharma Logo" 
          width={isFooter ? 30 : 34}
          height={isFooter ? 30 : 34}
          className="object-contain"
        />
      </motion.div>

      {/* Text Branding - Hidden on mobile for Navbar variant */}
      {(variant === 'full' || variant === 'footer') && (
        <div className={`flex flex-col leading-none ${variant === 'full' ? 'hidden sm:flex' : 'flex'}`}>
          <span className="font-black tracking-tighter transition-colors text-2xl" style={{ color: isFooter ? '#FFFFFF' : '#3B1E4D' }}>
            Kamal<span style={{ color: '#7A3E9D' }}>Pharma</span>
          </span>
          <span className={`
            text-[9px] font-bold uppercase tracking-[0.2em] mt-1
            ${isFooter ? 'text-gray-500' : 'text-gray-400'}
          `}>
            Healthcare Excellence
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
