"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { fadeUp, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    quote: "UNI5 transformed our HR completely. Payroll that used to take 3 days now takes 30 minutes.",
    author: "Rajesh M.",
    role: "HR Head, TechCorp India",
    img: "https://i.pravatar.cc/150?u=1"
  },
  {
    quote: "The recruitment module alone saved us 40% of hiring time. The UI is clean and the team is responsive.",
    author: "Priya S.",
    role: "Talent Acquisition, GrowFast",
    img: "https://i.pravatar.cc/150?u=2"
  },
  {
    quote: "Finally an HRMS that our employees actually enjoy using. Attendance and leaves are effortless.",
    author: "Anil K.",
    role: "Operations Director, ScaleUp Ltd",
    img: "https://i.pravatar.cc/150?u=3"
  }
];

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="overflow-hidden">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 text-brand-dark dark:text-white mb-4 leading-tight">
          What Our Customers Say
        </h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="p-8 bg-white dark:bg-white/5 rounded-2xl hover:shadow-xl transition-all duration-300 relative group"
          >
            <div className="text-brand-red mb-6">
              <Quote size={40} fill="currentColor" className="opacity-10 absolute top-6 left-6" />
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" className="text-[#f59e0b]" />
              ))}
            </div>

            <p className="text-base sm:text-lg text-brand-dark dark:text-white font-500 mb-8 italic relative z-10">
              "{t.quote}"
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src={t.img} alt={t.author} width={48} height={48} />
              </div>
              <div>
                <h4 className="font-700 text-brand-dark dark:text-white">{t.author}</h4>
                <p className="text-xs text-brand-gray dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
