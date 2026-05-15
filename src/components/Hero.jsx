import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[700px] lg:h-[850px] overflow-hidden flex items-center bg-[#1A0B2E]">
      {/* Background Image with Deep Theme-Purple Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2000&auto=format&fit=crop" 
          alt="Pharmacy Background" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        {/* Theme-Consistent Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E] via-[#1A0B2E]/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2 mb-6"
          >
            <ShieldCheck className="text-[#7A3E9D]" size={18} />
            <span className="text-[#F3E8FF] font-black text-[10px] uppercase tracking-[0.4em] block">Certified Healthcare Excellence</span>
          </motion.div>

          <h1 className="text-6xl lg:text-[84px] font-black text-white leading-[1] mb-8 tracking-tighter">
            Your Health, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A3E9D] to-[#9B64C0]">Our Priority.</span>
          </h1>
          
          <p className="text-gray-400 text-sm lg:text-base mb-12 max-w-xl leading-relaxed font-medium">
            Experience premium pharmaceutical services with KamalPharma. 
            From expert consultations to rapid home delivery, we provide 
            comprehensive healthcare solutions tailored to your needs.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button className="btn-primary group flex items-center space-x-3 px-12 py-5">
              <span>EXPLORE SERVICES</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white font-black text-[10px] uppercase tracking-widest border-b-2 border-white/20 pb-1 hover:border-[#7A3E9D] transition-all">
              Our Locations
            </button>
          </div>

          <div className="mt-16 flex items-center space-x-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1A0B2E] overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="text-xl font-black">2.5k+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Patients</div>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:flex justify-end relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Theme-Purple Pulse Circles */}
            <div className="absolute inset-0 bg-[#7A3E9D] rounded-full animate-ping opacity-20 scale-150"></div>
            <div className="absolute inset-0 bg-[#7A3E9D] rounded-full animate-pulse opacity-10 scale-125"></div>
            
            <div className="w-32 h-32 bg-gradient-to-br from-[#7A3E9D] to-[#3B1E4D] rounded-full flex items-center justify-center text-white cursor-pointer relative shadow-[0_0_50px_rgba(122,62,157,0.5)] border border-white/10 group">
              <Play size={40} className="fill-white group-hover:scale-110 transition-transform ml-2" />
            </div>
          </motion.div>
          
          {/* Floating Award/Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-12 -right-12 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="text-white text-2xl font-black">99.9%</div>
            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Satisfaction Rate</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
