import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#7A3E9D] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Commitment</p>
            <h2 className="text-4xl lg:text-6xl font-black text-[#3B1E4D] leading-tight mb-12">
              We Always Serve you <br /> Better Everydays
            </h2>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-[#F3E8FF] rounded-2xl text-[#7A3E9D] group-hover:bg-[#7A3E9D] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Target size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#3B1E4D] mb-2">Our Mission & Vizzion</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed max-w-sm">
                    To provide accessible, high-quality medical services and medication to our local community with integrity and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-[#F3E8FF] rounded-2xl text-[#7A3E9D] group-hover:bg-[#7A3E9D] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Users size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#3B1E4D] mb-2">Professional Staff</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed max-w-sm">
                    Our team consists of highly qualified pharmacists and healthcare professionals dedicated to your wellbeing.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#7A3E9D] to-[#3B1E4D] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl">
              View All Details
            </button>
          </motion.div>
        </div>

        {/* Right: Images and Experience Badge */}
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                alt="Pharmacist Work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Image - Fixed Placeholder */}
            <div className="absolute -bottom-10 -right-10 w-72 h-80 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl z-20">
              <img 
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop" 
                alt="Pharmacy Consultation" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge - More Impactful */}
            <div className="absolute top-10 left-10 bg-gradient-to-br from-[#7A3E9D] to-[#3B1E4D] p-10 rounded-[2.5rem] text-white text-center shadow-2xl z-30 border border-white/20">
              <div className="text-7xl font-black leading-none drop-shadow-lg">20</div>
              <div className="text-[11px] font-black uppercase tracking-[0.2em] mt-3 opacity-90">Year Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
