"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';

const CtaSection = () => {
  return (
    <SectionWrapper bg="red" className="relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Branded grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        {/* Floating circles — purely decorative */}
        {[
          { size: 300, top: '-10%', right: '-5%', opacity: 0.06 },
          { size: 200, bottom: '-15%', left: '5%', opacity: 0.04 },
          { size: 80, top: '20%', left: '15%', opacity: 0.1 },
          { size: 40, bottom: '30%', right: '20%', opacity: 0.12 },
        ].map((c, i) => (
          <div key={i} className="absolute rounded-full bg-white border border-white/20"
            style={{
              width: c.size, height: c.size,
              top: c.top, right: c.right, bottom: c.bottom, left: c.left,
              opacity: c.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-800 text-white mb-6 leading-tight">
            Ready to Transform Your HR?
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
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto flex flex-wrap justify-center"
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white !text-brand-red hover:bg-white/90 px-10 py-5 text-lg font-700">
              Start Free Trial
            </Button>
            <Button variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-brand-red px-10 py-5 text-lg font-700">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;
