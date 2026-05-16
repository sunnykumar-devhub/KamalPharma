'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin as MapPinIcon, Phone as PhoneIcon, Clock, Menu, X, AlertCircle, HandHeart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './ui/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const SocialIcon = ({ d, size = 12 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="cursor-pointer hover:text-secondary transition-colors"
    >
      <path d={d} />
    </svg>
  );

  return (
    <header className="w-full fixed top-0 z-[100] transition-all duration-300">
      {/* Top Bar - Premium Dark Purple */}
      <div className="bg-[#5E2F7A] text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <HandHeart size={14} className="text-secondary" />
              <span>Premium Pharma Care</span>
            </div>
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <MapPinIcon size={12} className="text-secondary" />
              <span>Govind Mitra, Patna</span>
            </div>
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <PhoneIcon size={12} className="text-secondary" />
              <span>9570001222</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <SocialIcon d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            {/* Twitter/X */}
            <X size={12} className="cursor-pointer hover:text-secondary transition-colors" />
            {/* LinkedIn */}
            <SocialIcon d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
            {/* Instagram */}
            <SocialIcon d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zM18.406 3.994a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </div>
        </div>
      </div>

      {/* Main Nav - Glassmorphism */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Logo variant="full" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-black tracking-[0.2em] text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                className="relative group py-2"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Pulse & Gradient */}
          <div className="hidden md:flex items-center">
            <motion.button 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-gradient-to-r from-[#7A3E9D] to-[#9B64C0] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all border border-white/20"
            >
              Free Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={28} className="text-primary" /> : <Menu size={28} className="text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-[110] bg-primary-dark flex flex-col items-center justify-center p-10 space-y-8"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-10 right-10 text-white"
              >
                <X size={40} />
              </button>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-white hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl mt-10">
                Book Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
