"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  CreditCard,
  Search,
  Calendar,
  BarChart3,
  BookOpen
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Badge from './ui/Badge';
import { fadeUp, staggerContainer } from '@/lib/animations';

const features = [
  { icon: Users, title: "Core HR Management", description: "Centralized employee records, org structure, and digital document management.", stat: "10,000+", statLabel: "Employees managed" },
  { icon: CreditCard, title: "Payroll Processing", description: "Automated salary disbursements, tax computations, and instant payslip generation.", stat: "99.9%", statLabel: "Accuracy" },
  { icon: Search, title: "Recruitment & ATS", description: "Intelligent resume parsing, automated scheduling, and end-to-end applicant tracking.", stat: "40%", statLabel: "Less hiring time" },
  { icon: Calendar, title: "Attendance & Leave", description: "Biometric integration, flexible leave policies, and holiday calendar management.", stat: "Real-time", statLabel: "Tracking" },
  { icon: BarChart3, title: "Performance Management", description: "Dynamic goal setting, 360° feedback cycles, and appraisal workflows.", stat: "360°", statLabel: "Feedback" }
];

const FeaturesOverview = () => {
  return (
    <SectionWrapper id="features" bg="gray">
      <div className="text-center mb-12 md:mb-20">
        <Badge className="mb-4">Features</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 text-brand-dark dark:text-white mb-4 leading-tight">
          Everything HR, Unified in One Place
        </h2>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.01,
                delayChildren: 0.3,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-base sm:text-lg text-brand-gray dark:text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed flex flex-wrap justify-center"
        >
          {"From hire to retire, UNI5 covers the complete employee lifecycle with intelligent automation and data-driven insights.".split("").map((char, index) => (
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

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          if (index === 0) {
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative md:col-span-1 md:row-span-2 min-h-[340px] bg-brand-red dark:bg-brand-red rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #fff 0%, transparent 60%)' }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-white mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-800 text-white mb-3">{feature.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{feature.description}</p>
                </div>

                <div className="relative z-10 border-t border-white/20 pt-6 mt-8">
                  <div className="text-3xl font-800 text-white mb-1">{feature.stat}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider font-600">{feature.statLabel}</div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.07] rounded-2xl p-6 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-brand-red/5 transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(166,30,35,0.06) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <div className="text-right">
                  <div className="text-xl font-800 text-brand-red leading-none">{feature.stat}</div>
                  <div className="text-[10px] text-brand-gray dark:text-gray-400 uppercase tracking-wider font-600 mt-1">{feature.statLabel}</div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-lg font-700 text-brand-dark dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturesOverview;
