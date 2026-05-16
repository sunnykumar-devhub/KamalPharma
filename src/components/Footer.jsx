import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Logo from './ui/Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Hiring', path: '/contact' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#1A0B2E] text-white pt-20 overflow-hidden">
      {/* SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10 pt-10">
        {/* Column 1: Branding & Bio */}
        <div className="space-y-8">
          <Logo variant="footer" />
          <p className="text-gray-400 text-xs font-medium leading-relaxed">
            Your trusted partner in health and wellness. Providing fast & reliable delivery to your doorstep.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/kamalpharma.patna" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#7A3E9D] hover:border-[#7A3E9D] transition-all duration-300">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#7A3E9D] hover:border-[#7A3E9D] transition-all duration-300">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Contact */}
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-[#7A3E9D]">Get In Touch</h4>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-[#7A3E9D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-lg shadow-[#7A3E9D]/20">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Our Store</p>
                <p className="text-white text-sm font-bold">Govind Mitra, Patna</p>
              </div>
            </div>
            <a href="tel:9570001222" className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-lg shadow-primary/20">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Call Us</p>
                <p className="text-white text-sm font-bold">9570001222</p>
              </div>
            </a>
            <a href="https://wa.me/9570001222" className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">WhatsApp</p>
                <p className="text-white text-sm font-bold">Chat with us</p>
              </div>
            </a>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-[#7A3E9D]">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-[11px] font-bold">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path} className="hover:text-white transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-[#7A3E9D] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-[#7A3E9D]">Newsletter</h4>
          <p className="text-gray-400 text-xs mb-6 font-medium">
            Join our elite healthcare community for the latest medical updates.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 focus:border-[#7A3E9D] focus:ring-1 focus:ring-[#7A3E9D] outline-none transition-all text-xs font-medium"
            />
            <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#7A3E9D] rounded-full flex items-center justify-center hover:bg-[#3B1E4D] transition-all shadow-lg">
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          © 2024 Kamalpharma. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          <span>Designed with Care</span>
          <Heart size={10} className="text-[#7A3E9D] fill-[#7A3E9D]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
