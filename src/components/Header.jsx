import React from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Menu, X, HeartPulse } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#007A71] text-white py-2 px-6 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon-Sat: 8am-6pm WITA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contact@naturn.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="opacity-70">Follow Us:</span>
            <Facebook size={14} className="cursor-pointer hover:text-gray-300" />
            <Twitter size={14} className="cursor-pointer hover:text-gray-300" />
            <Linkedin size={14} className="cursor-pointer hover:text-gray-300" />
            <Instagram size={14} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <HeartPulse size={32} className="text-[#00A99D]" />
            <span className="text-2xl font-black text-[#00A99D] tracking-tight">KamalPhar</span>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-700">
            <a href="#" className="hover:text-[#00A99D]">HOME</a>
            <a href="#about" className="hover:text-[#00A99D]">ABOUT US</a>
            <a href="#service" className="hover:text-[#00A99D]">SERVICE</a>
            <a href="#pages" className="hover:text-[#00A99D]">PAGES</a>
            <a href="#contact" className="hover:text-[#00A99D]">CONTACT US</a>
          </div>

          {/* Consultation Button Box */}
          <div className="hidden md:flex items-center bg-[#00A99D] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#007A71] transition-all cursor-pointer">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <Phone size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold opacity-80 uppercase leading-none">Free Consultation</div>
              <div className="text-sm font-black">(62365) 2245 2781</div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} className="text-[#00A99D]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-6 flex flex-col space-y-4 shadow-xl">
            <a href="#" className="font-bold text-gray-800">HOME</a>
            <a href="#about" className="font-bold text-gray-800">ABOUT US</a>
            <a href="#service" className="font-bold text-gray-800">SERVICE</a>
            <a href="#pages" className="font-bold text-gray-800">PAGES</a>
            <a href="#contact" className="font-bold text-gray-800">CONTACT US</a>
            <div className="pt-4 border-t">
              <button className="w-full bg-[#00A99D] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3">
                <Phone size={20} />
                <span>(62365) 2245 2781</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
