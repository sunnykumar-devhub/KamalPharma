import React from 'react';
import { Activity, UserCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="relative z-20 -mt-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-[0_20px_50px_rgba(122,62,157,0.3)] rounded-[3rem] overflow-hidden">
        {/* Card 1: Medicine */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#7A3E9D] p-12 text-white border-r border-white/10 text-center"
        >
          <div className="flex justify-center mb-6">
            <Activity size={56} className="text-white drop-shadow-lg" />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Medicine</h3>
          <p className="text-white/90 text-xs mb-8 leading-relaxed font-medium">
            Professional medication management and quality pharmaceuticals for your health.
          </p>
          <button className="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-white pb-1 hover:text-secondary transition-colors">
            Shop Online →
          </button>
        </motion.div>

        {/* Card 2: Consultation */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#5E2F7A] p-12 text-white border-r border-white/10 text-center"
        >
          <div className="flex justify-center mb-6">
            <UserCheck size={56} className="text-white drop-shadow-lg" />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Consultation</h3>
          <p className="text-white/90 text-xs mb-8 leading-relaxed font-medium">
            Expert medical advice from our professional pharmacists and staff.
          </p>
          <button className="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-white pb-1 hover:text-secondary transition-colors">
            Contact Us →
          </button>
        </motion.div>

        {/* Card 3: Join Member */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 text-[#3B1E4D] text-center"
        >
          <div className="flex justify-center mb-6">
            <CreditCard size={56} className="text-[#7A3E9D]" />
          </div>
          <h3 className="text-3xl font-black mb-4 leading-none">Join Member Now Get 40% Off</h3>
          <p className="text-gray-500 text-xs mb-8 leading-relaxed font-medium">
            Register today and get exclusive discounts on your first purchase.
          </p>
          <button className="bg-gradient-to-r from-[#7A3E9D] to-[#3B1E4D] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
            Join Member
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
