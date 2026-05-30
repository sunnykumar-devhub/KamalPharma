'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, GraduationCap, Users } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Pharmacist',
    type: 'Full Time',
    location: 'Govind Mitra Road, Patna',
    salary: 'Competitive',
    description: 'We are looking for an experienced pharmacist to lead our medical team and ensure excellence in pharmaceutical care.'
  },
  {
    title: 'Pharmacy Assistant',
    type: 'Full Time',
    location: 'Govind Mitra Road, Patna',
    salary: 'Competitive',
    description: 'Assist our pharmacists in daily operations and provide exceptional service to our valued customers.'
  },
  {
    title: 'Medical Sales Representative',
    type: 'Commission Based',
    location: 'Patna & Remote',
    salary: 'Performance Based',
    description: 'Expand our reach by connecting healthcare providers with our premium medical supplies.'
  }
];

const CareersContainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    position: '',
    cv: null,
  });
  const [cvFileName, setCvFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-gray-50/50">
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
        <div className="grid lg:grid-cols-3 gap-12 mb-24 max-w-7xl mx-auto">
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

        {/* 
        <h2 className="text-4xl font-black text-[#3B1E4D] mb-12 text-center">Open Positions</h2>
        
        <div className="space-y-6 max-w-5xl mx-auto mb-24">
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
              <button 
                onClick={() => handleApplyClick(job.title)}
                className="bg-[#3B1E4D] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center group-hover:bg-[#7A3E9D] transition-colors"
              >
                Apply Now <ArrowRight size={14} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
        */}
      </section>

      {/* Job Application Form Section */}
      <section ref={formRef} id="apply" className="py-20 px-6 bg-[#F9F6FC] border-t border-[#F3E8FF]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-16 rounded-[3rem] shadow-xl border border-[#F3E8FF] relative overflow-hidden">
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#F3E8FF] text-[#7A3E9D] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Briefcase size={36} />
                </div>
                <h3 className="text-3xl font-black text-[#3B1E4D] mb-4">Application Submitted!</h3>
                <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for applying, <span className="font-bold text-[#7A3E9D]">{formData.name}</span>. Our recruitment team will review your application for the <span className="font-bold text-[#7A3E9D]">{formData.position || 'General Application'}</span> position and get back to you shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', experience: '', position: '', cv: null });
                    setCvFileName('');
                  }}
                  className="bg-[#3B1E4D] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#7A3E9D] transition-colors"
                >
                  Apply for another role
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="text-center mb-12">
                  <p className="text-[#7A3E9D] font-black uppercase tracking-[0.3em] text-[10px] mb-3">Apply Today</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#3B1E4D]">Start Your Journey</h2>
                  <p className="text-gray-500 text-sm mt-3 font-medium">Please fill in the form below to submit your job application.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl border border-[#F3E8FF] focus:outline-none focus:border-[#7A3E9D] text-gray-700 font-medium placeholder-gray-400 bg-gray-50/50"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl border border-[#F3E8FF] focus:outline-none focus:border-[#7A3E9D] text-gray-700 font-medium placeholder-gray-400 bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl border border-[#F3E8FF] focus:outline-none focus:border-[#7A3E9D] text-gray-700 font-medium placeholder-gray-400 bg-gray-50/50"
                      />
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Position Applied For *</label>
                      <select 
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl border border-[#F3E8FF] focus:outline-none focus:border-[#7A3E9D] text-gray-700 font-medium bg-gray-50/50"
                      >
                        <option value="" disabled>Select a position</option>
                        <option value="Senior Pharmacist">Senior Pharmacist</option>
                        <option value="Pharmacy Assistant">Pharmacy Assistant</option>
                        <option value="Medical Sales Representative">Medical Sales Representative</option>
                        <option value="Other">Other / General Application</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Work Experience / Summary *</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Tell us about your relevant medical or sales experience..."
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-[#F3E8FF] focus:outline-none focus:border-[#7A3E9D] text-gray-700 font-medium placeholder-gray-400 bg-gray-50/50 resize-none"
                    ></textarea>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-[#3B1E4D] font-black text-[10px] uppercase tracking-widest mb-2.5">Upload CV / Resume *</label>
                    <div className="relative border-2 border-dashed border-[#F3E8FF] rounded-2xl p-8 text-center bg-gray-50/30 hover:bg-[#F3E8FF]/10 transition-colors cursor-pointer group">
                      <input 
                        type="file" 
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFormData({ ...formData, cv: file });
                            setCvFileName(file.name);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="space-y-2">
                        <div className="text-gray-400 font-medium text-sm">
                          {cvFileName ? (
                            <span className="text-[#7A3E9D] font-bold">{cvFileName}</span>
                          ) : (
                            <span>Drag and drop your file here, or <span className="text-[#7A3E9D] font-bold underline">browse</span></span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400">Supports PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 text-center">
                    <button 
                      type="submit" 
                      className="w-full bg-[#3B1E4D] text-white px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg hover:bg-[#7A3E9D] transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersContainer;
