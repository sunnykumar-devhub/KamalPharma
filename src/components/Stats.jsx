import React from 'react';
import { motion } from 'framer-motion';
import { Users, Pill, UserPlus, Stethoscope } from 'lucide-react';

const stats = [
  {
    label: 'Professional Staff',
    value: '120',
    icon: <Users size={48} className="text-[#7A3E9D]" />
  },
  {
    label: 'Kinds Of Medicine',
    value: '200',
    icon: <Pill size={48} className="text-[#7A3E9D]" />
  },
  {
    label: 'Doctor Specialist',
    value: '50',
    icon: <Stethoscope size={48} className="text-[#7A3E9D]" />
  },
  {
    label: 'Active Member',
    value: '150',
    icon: <UserPlus size={48} className="text-[#7A3E9D]" />
  }
];

const Stats = () => {
  return (
    <section className="bg-white py-24 border-b border-[#F3E8FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-8 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12">
                <div className="p-6 bg-[#F3E8FF] rounded-3xl group-hover:bg-[#7A3E9D] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {React.cloneElement(stat.icon, { 
                    className: "transition-colors duration-300 group-hover:text-white" 
                  })}
                </div>
              </div>
              <div className="text-5xl font-black text-[#3B1E4D] mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-[11px] font-black uppercase text-gray-400 tracking-[0.25em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
