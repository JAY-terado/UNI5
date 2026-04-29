"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
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
  },
  {
    quote: "Our productivity increased by 30% after implementing UNI5. The analytics are top-notch.",
    author: "Marc Spector",
    role: "Software Engineer",
    img: "https://i.pravatar.cc/150?u=4"
  },
  {
    quote: "Finally, an app that has it all. From payroll to performance tracking? I'm never going back.",
    author: "Samantha Stewart",
    role: "HR Manager",
    img: "https://i.pravatar.cc/150?u=5"
  },
  {
    quote: "I'm so glad to have found this platform. I now recommend it to everyone in my network.",
    author: "Michael Green",
    role: "Entrepreneur",
    img: "https://i.pravatar.cc/150?u=6"
  },
  {
    quote: "The mobile app experience is unmatched. Our field staff can now check-in with just one tap.",
    author: "Sarah J.",
    role: "Operations Lead",
    img: "https://i.pravatar.cc/150?u=7"
  },
  {
    quote: "Customer support is incredible. Any time we had a question during onboarding, they were there.",
    author: "David L.",
    role: "CEO, Nexa",
    img: "https://i.pravatar.cc/150?u=8"
  },
  {
    quote: "The automated compliance reports have saved our legal team hours of manual work every month.",
    author: "Elena V.",
    role: "Compliance Officer",
    img: "https://i.pravatar.cc/150?u=9"
  }
];

const TestimonialCard = ({ testimonial: t }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4, scale: 1.015 }}
    className="
      group relative p-7
      bg-white dark:bg-[#16161a]
      rounded-[2rem]
      border border-black/[0.06] dark:border-white/[0.07]
      shadow-sm hover:shadow-xl hover:shadow-black/[0.07]
      dark:hover:shadow-brand-red/[0.05]
      transition-all duration-300 cursor-default
      overflow-hidden
    "
  >
    {/* Left accent bar — appears on hover */}
    <div className="
      absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full
      bg-brand-red scale-y-0 group-hover:scale-y-100
      transition-transform duration-300 origin-center
    " />

    {/* Stars */}
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>

    {/* Quote */}
    <p className="text-sm md:text-[15px] text-[#1a1a1a] dark:text-white font-600 leading-[1.65] tracking-tight mb-6">
      "{t.quote}"
    </p>

    <div className="w-full h-[1px] bg-black/[0.06] dark:bg-white/10 mb-5" />

    {/* Author */}
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-brand-red/10">
        <Image src={t.img} alt={t.author} width={40} height={40} />
      </div>
      <div>
        <h4 className="font-700 text-xs text-[#1a1a1a] dark:text-white leading-none">{t.author}</h4>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-500 mt-1">{t.role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCta = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 text-[#1a1a1a] dark:text-white mb-4 leading-tight tracking-tight">
            Trusted by Leaders <span className="text-gradient-brand">Everywhere</span>
          </h2>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.008,
                  delayChildren: 0.2,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center"
          >
            {"Join 500+ organizations already using UNI5 to streamline their HR operations and empower their teams.".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Testimonials Grid with Fading Effect */}
        <div className="relative mb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {testimonials.slice(0, 3).map((t, index) => (
                <TestimonialCard key={index} testimonial={t} />
              ))}
            </div>

            {/* Column 2 - Offset Down */}
            <div className="flex flex-col gap-4 md:gap-6 md:mt-24">
              {testimonials.slice(3, 6).map((t, index) => (
                <TestimonialCard key={index} testimonial={t} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {testimonials.slice(6, 9).map((t, index) => (
                <TestimonialCard key={index} testimonial={t} />
              ))}
            </div>
          </motion.div>

          {/* Fading Gradient Overlay for Blending */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-[#0f0f14] via-white/90 dark:via-[#0f0f14]/90 to-transparent z-20 pointer-events-none" />
        </div>

        {/* CTA Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-black min-h-[450px] md:min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-12 shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1500674425944-246524149962?q=80&w=2070&auto=format&fit=crop"
              alt="Landscape background"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-800 text-white mb-6 leading-[1.1] tracking-tight"
            >
              Start your HR transformation <span className="text-gradient-brand">today</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-white/80 mb-10 font-500"
            >
              The whole process takes seconds. No waiting around for manual document checks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="w-full sm:w-auto bg-brand-red dark:bg-white text-white dark:text-brand-red hover:bg-brand-red/90 dark:hover:bg-white/90 px-10 py-4 text-base font-700 shadow-xl">
                Start Free Trial
              </Button>
              <Button variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-brand-red px-10 py-4 text-base font-700">
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCta;
