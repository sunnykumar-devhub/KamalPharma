import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    content: 'Kamalpharma has been my go-to for all medications. Their staff is incredibly professional and the delivery is always on time.',
    stars: 5
  },
  {
    name: 'Michael Chen',
    role: 'Health Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    content: 'The medicine search feature made it so easy to find exactly what I needed. Highly recommend their consultation services.',
    stars: 5
  },
  {
    name: 'Emma Williams',
    role: 'Local Resident',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    content: 'Exceptional service! They truly care about their patients. The "safety white" clean aesthetic of the pharmacy is also very reassuring.',
    stars: 5
  }
];

const Reviews = () => {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="text-center mb-16">
        <p className="text-[#7A3E9D] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Patient Stories</p>
        <h2 className="text-4xl lg:text-5xl font-black text-[#3B1E4D]">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl relative group hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute top-8 right-10 text-[#F3E8FF] group-hover:text-[#7A3E9D] transition-colors">
              <Quote size={60} fill="currentColor" />
            </div>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-[#7A3E9D]">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-[#3B1E4D]">{review.name}</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>

            <div className="flex space-x-1 mb-6">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-500 text-xs leading-relaxed italic">
              "{review.content}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
