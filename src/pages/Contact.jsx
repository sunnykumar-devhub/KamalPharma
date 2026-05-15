import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#F3E8FF] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7A3E9D] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-[#3B1E4D] mb-6">Contact Us</h1>
          <p className="text-[#7A3E9D] font-bold uppercase tracking-[0.4em] text-xs">Professional Care at Your Fingertips</p>
        </motion.div>
      </div>

      <section className="section-padding grid lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-[#3B1E4D] mb-8">Get In Touch</h2>
          <p className="text-gray-500 mb-12 font-medium">
            Have questions about our services or medication? Reach out to us via any of the channels below. 
            Our professional medical staff is ready to assist you.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <div className="p-8 bg-white rounded-[2rem] shadow-xl border-b-4 border-[#7A3E9D] hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#7A3E9D] mb-6">
                <Phone size={24} />
              </div>
              <h4 className="font-black text-[#3B1E4D] mb-2 uppercase text-xs tracking-widest">Call Us</h4>
              <p className="text-gray-500 font-bold text-sm">(62365) 2245 2781</p>
            </div>

            {/* WhatsApp */}
            <div className="p-8 bg-white rounded-[2rem] shadow-xl border-b-4 border-[#25D366] hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#25D366] mb-6">
                <MessageCircle size={24} />
              </div>
              <h4 className="font-black text-[#3B1E4D] mb-2 uppercase text-xs tracking-widest">WhatsApp</h4>
              <p className="text-gray-500 font-bold text-sm">+62 365 2245 2781</p>
            </div>

            {/* Email */}
            <div className="p-8 bg-white rounded-[2rem] shadow-xl border-b-4 border-[#3B1E4D] hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[#3B1E4D] mb-6">
                <Mail size={24} />
              </div>
              <h4 className="font-black text-[#3B1E4D] mb-2 uppercase text-xs tracking-widest">Email</h4>
              <p className="text-gray-500 font-bold text-sm">contact@kamalphar.com</p>
            </div>

            {/* Hours */}
            <div className="p-8 bg-white rounded-[2rem] shadow-xl border-b-4 border-[#5E2F7A] hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6">
                <Clock size={24} />
              </div>
              <h4 className="font-black text-[#3B1E4D] mb-2 uppercase text-xs tracking-widest">Timings</h4>
              <p className="text-gray-500 font-bold text-sm">08:00 - 18:00 (Mon-Sat)</p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-black text-[#3B1E4D] text-lg">Our Location</h4>
              <p className="text-gray-500 font-medium">Jl. Raya Mas Ubud No. 86, Gianyar, Bali, Indonesia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(122,62,157,0.15)] border border-[#F3E8FF]"
        >
          <h3 className="text-3xl font-black text-[#3B1E4D] mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-[#7A3E9D] outline-none transition-all font-medium" />
              <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-[#7A3E9D] outline-none transition-all font-medium" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-[#7A3E9D] outline-none transition-all font-medium" />
            <textarea placeholder="How can we help you?" rows="5" className="w-full bg-gray-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-[#7A3E9D] outline-none transition-all font-medium"></textarea>
            <button className="btn-primary w-full py-6 text-[11px]">Submit Message</button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
