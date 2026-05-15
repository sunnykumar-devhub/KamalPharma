import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Menu, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/ui/Logo';

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
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-[100] transition-all duration-300">
      {/* Top Bar - Premium Dark Purple */}
      <div className="bg-[#5E2F7A] text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock size={12} className="text-secondary" />
              <span>Mon-Sat: 8am-6pm WITA</span>
            </div>
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <AlertCircle size={12} className="text-red-400" />
              <span className="text-red-400">Emergency:</span>
              <span>(62365) 2245 9999</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={12} className="cursor-pointer hover:text-secondary transition-colors" />
            <Twitter size={12} className="cursor-pointer hover:text-secondary transition-colors" />
            <Linkedin size={12} className="cursor-pointer hover:text-secondary transition-colors" />
            <Instagram size={12} className="cursor-pointer hover:text-secondary transition-colors" />
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
          <Link to="/">
            <Logo variant="full" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-black tracking-[0.2em] text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
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
                  to={link.path} 
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
