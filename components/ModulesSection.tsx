"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CreditCard,
  Calendar,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Badge from './ui/Badge';
import { fadeUp } from '@/lib/animations';

const modules = [
  {
    id: "recruitment",
    icon: Search,
    label: "Recruitment",
    title: "Recruitment Management",
    description: "Streamline hiring with intelligent resume parsing, automated interview scheduling, and dynamic assessment forms. Track every applicant from sourcing to onboarding.",
    bullets: ["Resume Parsing", "Interview Scheduling", "Applicant Tracking", "Onboarding Automation"],
    image: "/images/recruitment.png"
  },
  {
    id: "payroll",
    icon: CreditCard,
    label: "Payroll",
    title: "Payroll & Compliance",
    description: "Process accurate payroll every cycle with zero errors. Automate tax calculations, generate payslips, and stay compliant with local regulations automatically.",
    bullets: ["Auto Salary Computation", "Tax & Deductions", "Payslip Generation", "Statutory Compliance"],
    image: "/images/dashboard.png"
  },
  {
    id: "attendance",
    icon: Calendar,
    label: "Attendance",
    title: "Attendance & Leave",
    description: "Real-time attendance powered by biometric integration. Manage leave policies, holiday calendars, and shift patterns with zero friction.",
    bullets: ["Biometric Integration", "Leave Policy Engine", "Holiday Calendar", "Shift Management"],
    image: "/images/dashboard-ui.png"
  },
  {
    id: "performance",
    icon: BarChart3,
    label: "Performance",
    title: "Performance Management",
    description: "Set goals, run 360° reviews, and automate appraisal cycles. Data-driven insights to build high-performing teams.",
    bullets: ["Goal Setting (OKR)", "360° Feedback", "Appraisal Workflows", "Analytics Dashboard"],
    image: "/images/dashboard.png"
  }
];

const ModulesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="modules" bg="white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <Badge className="mb-4">Modules</Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 text-brand-dark dark:text-white mb-4 leading-tight">
          Built for Every HR Function
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
          {"From sourcing top talent to running flawless payroll, our modular suite adapts to your growing team's unique needs.".split("").map((char, index) => (
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
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const isActive = active === i;
            return (
              <button
                key={mod.id}
                onClick={() => setActive(i)}
                className={`
                  flex items-center gap-2 rounded-full px-4 py-2 text-sm font-600 transition-all duration-300
                  ${isActive
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                    : 'bg-black/[0.04] dark:bg-white/[0.06] text-brand-gray hover:bg-black/[0.07] dark:hover:bg-white/[0.09]'}
                `}
              >
                <Icon size={16} />
                {mod.label}
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left: Image (Order 2 on mobile, 1 on desktop) */}
              <div className="order-2 lg:order-1 relative group w-full max-w-lg mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-brand-red/5 dark:bg-brand-red/10 rounded-3xl blur-2xl scale-95 -z-10 transition-transform duration-700 group-hover:scale-100" />

                <div className="relative bg-[#f4f5f7] dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[0.04] dark:to-white/[0.02] rounded-2xl p-4 md:p-6 border border-black/[0.08] dark:border-white/[0.08] shadow-2xl shadow-black/[0.04] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="flex items-center mb-5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-red/60 dark:bg-brand-red/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 dark:bg-yellow-400/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 dark:bg-green-400/40" />
                    </div>
                    <div className="h-5 w-48 bg-white dark:bg-white/[0.04] rounded-md ml-4 shadow-sm border border-black/[0.03] dark:border-transparent flex items-center px-2">
                      <Search size={10} className="text-gray-300 dark:text-gray-500" />
                    </div>
                  </div>

                  <Image
                    src={modules[active].image}
                    alt={modules[active].title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right: Text (Order 1 on mobile, 2 on desktop) */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-800 text-brand-dark dark:text-white mb-4">
                  {modules[active].title}
                </h3>
                <p className="text-base text-brand-gray dark:text-gray-400 mb-8 leading-relaxed">
                  {modules[active].description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  {modules[active].bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-sm font-600 text-brand-dark dark:text-gray-200">
                      <CheckCircle2 size={16} className="text-brand-red mr-2.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ModulesSection;
