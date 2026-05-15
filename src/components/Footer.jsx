import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <HeartPulse size={32} className="text-[#00A99D]" />
            <span className="text-2xl font-black tracking-tight">KamalPhar</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Your trusted partner in healthcare. Providing premium quality medicine 
            and professional services to keep you and your family healthy.
          </p>
          <div className="flex items-center space-x-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#00A99D] transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#00A99D]">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Home', 'About Us', 'Our Services', 'Medical Center', 'Contact Us'].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#00A99D] transition-colors flex items-center space-x-2">
                  <span>›</span>
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#00A99D]">Contact Info</h4>
          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <MapPin className="text-[#00A99D] shrink-0" size={20} />
              <p className="text-gray-400">
                Jl. Raya Mas Ubud No. 86, <br />
                Gianyar, Bali, Indonesia
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-[#00A99D] shrink-0" size={20} />
              <p className="text-gray-400">(62365) 2245 2781</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-[#00A99D] shrink-0" size={20} />
              <p className="text-gray-400">contact@naturn.com</p>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#00A99D]">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-6">
            Subscribe to our newsletter for latest updates and health tips.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-14 focus:ring-2 focus:ring-[#00A99D] outline-none transition-all text-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#00A99D] rounded-lg flex items-center justify-center hover:bg-[#007A71] transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2024 Kamalpharma. All Rights Reserved.
        </p>
        <div className="flex space-x-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
