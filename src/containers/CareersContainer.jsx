'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, GraduationCap, Users } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Pharmacist',
    type: 'Full Time',
    location: 'Ubud, Bali',
    salary: 'Competitive',
    description: 'We are looking for an experienced pharmacist to lead our medical team and ensure excellence in pharmaceutical care.'
  },
  {
    title: 'Pharmacy Assistant',
    type: 'Full Time',
    location: 'Gianyar, Bali',
    salary: 'Competitive',
    description: 'Assist our pharmacists in daily operations and provide exceptional service to our valued customers.'
  },
  {
    title: 'Medical Sales Representative',
    type: 'Commission Based',
    location: 'Remote / Bali',
    salary: 'Performance Based',
    description: 'Expand our reach by connecting healthcare providers with our premium medical supplies.'
  }
];

const CareersContainer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-[#1A0B2E] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7A3E9D] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">Join Our Team</h1>
          <p className="text-[#F3E8FF] font-bold uppercase tracking-[0.4em] text-xs">Build Your Future with Kamal Pharma</p>
        </motion.div>
      </div>

      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border-b-8 border-[#7A3E9D]">
            <Users size={40} className="text-[#7A3E9D] mb-6" />
            <h3 className="text-xl font-black text-[#3B1E4D] mb-4">Great Culture</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Work in a supportive environment that values professional growth and teamwork.</p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border-b-8 border-[#3B1E4D]">
            <GraduationCap size={40} className="text-[#3B1E4D] mb-6" />
            <h3 className="text-xl font-black text-[#3B1E4D] mb-4">Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Continuous learning opportunities and medical training for all our staff members.</p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border-b-8 border-secondary">
            <Briefcase size={40} className="text-secondary mb-6" />
            <h3 className="text-xl font-black text-[#3B1E4D] mb-4">Benefits</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Enjoy competitive salaries, health insurance, and a premium workspace experience.</p>
          </div>
        </div>

        <h2 className="text-4xl font-black text-[#3B1E4D] mb-12 text-center">Open Positions</h2>
        
        <div className="space-y-6 max-w-5xl mx-auto">
          {jobs.map((job) => (
            <motion.div 
              key={job.title}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-lg border border-[#F3E8FF] flex flex-col lg:flex-row lg:items-center justify-between gap-8 group hover:shadow-2xl transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-[#F3E8FF] text-[#7A3E9D] text-[10px] font-black uppercase px-4 py-1.5 rounded-full">{job.type}</span>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={12} className="mr-1" />
                    {job.location}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#3B1E4D] mb-3 group-hover:text-[#7A3E9D] transition-colors">{job.title}</h3>
                <p className="text-gray-500 text-sm max-w-2xl font-medium">{job.description}</p>
              </div>
              <button className="bg-[#3B1E4D] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center group-hover:bg-[#7A3E9D] transition-colors">
                Apply Now <ArrowRight size={14} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Contact Banner */}
      <section className="bg-[#7A3E9D] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Don't see a perfect fit?</h2>
          <p className="text-white/80 mb-10 font-medium">Send us your CV anyway! We're always looking for exceptional talent to join our growing family.</p>
          <a href="mailto:careers@kamalpharma.com" className="bg-white text-[#7A3E9D] px-12 py-5 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-transform inline-block">
            Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersContainer;
