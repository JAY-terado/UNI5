"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const faqs = [
  {
    question: "What is UNI5?",
    answer: "UNI5 is a cloud-based HRMS designed for growing organizations to manage the full employee lifecycle — from recruitment and onboarding to payroll, attendance, and performance management."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial."
  },
  {
    question: "Can I integrate UNI5 with my existing tools?",
    answer: "Absolutely. UNI5 supports seamless integrations with popular tools via robust REST APIs and webhooks, allowing you to connect with your existing ecosystem."
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, UNI5 is available on both iOS and Android platforms with full feature parity, ensuring your HR operations are accessible on the go."
  },
  {
    question: "How is data security handled?",
    answer: "Data security is our top priority. All data is encrypted in transit and at rest. We are SOC 2 compliant and host our platform on enterprise-grade cloud infrastructure with 99.9% uptime."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const filtered = faqs.filter(f =>
    f.question.toLowerCase().includes(query.toLowerCase()) ||
    f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-800 text-brand-dark dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-gray dark:text-gray-300">Everything you need to know about UNI5.</p>
        </div>

        <div className="relative mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="
              w-full pl-11 pr-4 py-3.5 rounded-xl text-sm
              bg-white dark:bg-white/5
              border border-brand-border dark:border-white/10
              text-brand-dark dark:text-white
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-brand-red/20
              focus:border-brand-red/40 transition-all
            "
          />
        </div>

        <motion.div 
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4"
        >
          {filtered.length === 0 && (
            <p className="text-center text-brand-gray dark:text-gray-500 py-8 text-sm">
              No results for "{query}"
            </p>
          )}
          {filtered.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.97 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index
                  ? 'border-brand-red/30 bg-gray-50 dark:bg-white/10'
                  : 'border-brand-border dark:border-white/10 bg-white dark:bg-white/5 hover:border-brand-red/20'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-700 text-brand-dark dark:text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={openIndex === index ? 'text-brand-red' : 'text-brand-gray dark:text-gray-400'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-gray dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            mt-12 p-8 rounded-2xl text-center
            bg-gradient-to-br from-brand-red/[0.04] to-transparent
            dark:from-brand-red/[0.08] dark:to-transparent
            border border-brand-red/10 dark:border-brand-red/20
          "
        >
          <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a61e23" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-700 text-brand-dark dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-brand-gray dark:text-gray-400 mb-6 max-w-xs mx-auto leading-relaxed">
            Our team is ready to help you get the most out of UNI5.
          </p>
          <a
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-full
              bg-brand-red text-white text-sm font-700
              hover:bg-brand-red/90 transition-colors
              shadow-lg shadow-brand-red/20
            "
          >
            Talk to our team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
