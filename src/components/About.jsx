import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Overlapping Images */}
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
              alt="Pharmacy" 
              className="rounded-2xl shadow-2xl w-[90%] h-[500px] object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -left-10 z-20 w-64 h-64 border-[15px] border-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=1000&auto=format&fit=crop" 
              alt="Hand with Pills" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight mb-8">
              Keep yourself Healthy and Fit With Right Medicine.
            </h2>
            
            {/* Quote Box */}
            <div className="mb-10 relative">
              <span className="text-8xl text-secondary font-serif absolute -top-10 -left-4 z-0">“</span>
              <div className="relative z-10">
                <p className="text-lg font-bold text-primary-dark italic leading-relaxed mb-4">
                  "We Provide you Good Quality Medicine, Give you more time to spend your fit and healthy life"
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-md">
                  Improve efficiency, leverage tech, and provide better customer experiences, 
                  with the modern technology services available all over the world. Our skilled personnel.
                </p>
                <div className="mt-8">
                  <div className="text-3xl font-serif text-gray-400 opacity-50">Margaret T.</div>
                  <div className="text-[10px] font-black uppercase text-primary tracking-widest mt-1">Margaret T., Kamalpharma CEO</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Read More
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Phone size={14} />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
