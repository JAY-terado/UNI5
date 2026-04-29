"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Badge from './ui/Badge';
import { fadeUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    number: "01",
    title: "Sign Up & Configure",
    icon: "🚀",
    description: "Create your workspace, add departments, and configure HR policies in minutes."
  },
  {
    number: "02",
    title: "Import Your Team",
    icon: "⚙️",
    description: "Bulk import employees or add them one by one. Integrate with your existing tools."
  },
  {
    number: "03",
    title: "Go Live",
    icon: "📊",
    description: "Start managing HR operations from day one with real-time dashboards and reports."
  }
];

const HowItWorks = () => {
  return (
    <SectionWrapper id="how" bg="gray">
      <div className="text-center mb-16 md:mb-24">
        <Badge className="mb-4">How It Works</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 text-brand-dark dark:text-white mb-4 leading-tight px-4">
          Up and Running in 3 Simple Steps
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative"
      >
        {/* Animated Connector Line — desktop only */}
        <div className="hidden md:block absolute top-8 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-[2px] z-0">
          <div className="relative w-full h-full">
            {/* Static track */}
            <div className="absolute inset-0 border-t-2 border-dashed border-brand-red/10 dark:border-white/10" />
            {/* Animated fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 origin-left border-t-2 border-dashed border-brand-red/50"
            />
          </div>
        </div>

        {steps.map((step, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: '-20%' });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={fadeUp}
              className="relative z-10 text-center"
            >
              {/* Step circle — with activation glow */}
              <div className="relative flex items-center justify-center mx-auto mb-8 w-16 h-16">
                {/* Animated ping ring — activates on enter viewport */}
                {isInView && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.2 }}
                    className="absolute inset-0 rounded-full border-2 border-brand-red"
                  />
                )}
                <div className="
                  relative w-16 h-16
                  bg-white dark:bg-[#1a1a1f]
                  border-2 border-brand-red
                  text-brand-red text-xl font-800
                  rounded-full flex items-center justify-center
                  shadow-xl shadow-brand-red/20 z-10
                ">
                  {step.number}
                </div>
              </div>

              {/* Card — add a subtle entry highlight */}
              <motion.div
                className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                animate={isInView ? { borderColor: 'rgba(166,30,35,0.2)' } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-xl font-700 text-brand-dark dark:text-white mb-3">{step.title}</h3>
                <p className="text-base text-brand-gray dark:text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default HowItWorks;
