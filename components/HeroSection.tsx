"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Sparkles, CheckCircle2, Award, TrendingUp, Zap } from 'lucide-react';
import Button from './ui/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';

const HeroSection = () => {
  const logos = [
    { id: 1, name: "CINE Line", url: "/patnership comp/CINELine.png" },
    { id: 2, name: "Holiday Inn", url: "/patnership comp/HolidayInn.png" },
    { id: 3, name: "PT Ecological", url: "/patnership comp/PT ecological.png" },
    { id: 4, name: "Prakriti Hospital", url: "/patnership comp/Prakriti_hospital.png" },
    { id: 5, name: "TErado", url: "/patnership comp/TErado.png" },
    { id: 6, name: "Viva Group", url: "/patnership comp/Viva_group_butterfly.png" },
    { id: 7, name: "Simpolo", url: "/patnership comp/simpolo.png" },
  ];

  const words1 = ["Empowering", "Workforces,"];
  const words2 = ["Simplifying", "HR."];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center"
    >
      {/* Radiant Background - Animated Mesh & Dot Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated mesh blobs */}
        <div className="
          absolute top-[-20%] left-[10%]
          w-[600px] h-[600px] rounded-full
          bg-brand-red/[0.08] dark:bg-brand-red/[0.12]
          blur-[120px] animate-blob
        " />
        <div className="
          absolute top-[30%] right-[-10%]
          w-[500px] h-[500px] rounded-full
          bg-blue-400/[0.06] dark:bg-blue-600/[0.08]
          blur-[100px] animate-blob animation-delay-2000
        " />
        <div className="
          absolute bottom-[-10%] left-[30%]
          w-[400px] h-[400px] rounded-full
          bg-brand-red/[0.05] dark:bg-brand-red/[0.09]
          blur-[90px] animate-blob animation-delay-4000
        " />

        {/* Subtle dot-grid noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center max-w-7xl">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center w-full flex flex-col items-center"
          style={{ perspective: '800px' }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-[10px] md:text-xs font-700 mb-6 uppercase tracking-wider"
          >
            <Sparkles size={12} className="text-brand-red" />
            <span>#1 HR Platform for Growing Teams</span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1 }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-800 text-[#1a1a1a] dark:text-white leading-tight mb-4 tracking-tight"
          >
            <span className="block">
              {words1.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, rotateX: -60, filter: 'blur(8px)', transformPerspective: 800 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: 'blur(0px)',
                      transformPerspective: 800,
                      transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className="inline-block mr-3"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2 md:mt-3">
              {words2.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, rotateX: -60, filter: 'blur(8px)', transformPerspective: 800 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: 'blur(0px)',
                      transformPerspective: 800,
                      transition: { duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className="inline-block mr-3"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  <span className="text-gradient-brand pb-1">{word}</span>
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed min-h-[5rem] sm:min-h-[3rem] flex justify-center text-center"
          >
            <TypeAnimation
              sequence={[
                'The all-in-one HR platform built to simplify hiring, payroll, compliance, and workforce management.',
                2500,
                'One powerful workspace to manage employees, automate operations, and scale your business with confidence.',
                2500,
                'Streamline HR, boost productivity, and run your entire people operations from a single smart platform.',
                2500,
              ]}
              wrapper="p"
              speed={50}
              deletionSpeed={70}
              className="typewriter-cursor"
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button className="w-full sm:w-auto px-7 py-3 rounded-full group shadow-lg shadow-brand-red/20 font-700">
              Book a Demo
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-7 py-3 rounded-full border-gray-200 dark:border-white/20 font-700 bg-white dark:bg-[#0f0f14]">
              Explore Platform
            </Button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-6 text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-600 uppercase tracking-wide"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-green-500" />
              Setup in minutes
            </span>
          </motion.div>
        </motion.div>

        {/* Center Mockup & Floating Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center px-4 mt-16 mb-24 perspective-1000"
        >
          {/* Pixel Perfect Composite iPhone Mockup */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotateY: [-4, 4, -4],
              rotateX: [2, -2, 2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10 w-[140px] md:w-[170px] lg:w-[190px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_40px_80px_rgba(255,255,255,0.05)]"
          >
            {/* The iPhone Frame (Truly Transparent PNG) */}
            <Image
              src="/images/iphone-frame.png"
              alt="iPhone Frame"
              width={600}
              height={1200}
              className="relative z-20 w-full h-auto pointer-events-none"
              priority
            />

            {/* The Dashboard UI (Layered Behind the Frame) */}
            <div className="absolute inset-0 z-10 p-[4%] flex items-center justify-center">
              <div className="w-[92%] h-[98%] rounded-[1.8rem] overflow-hidden bg-white">
                <Image
                  src="/images/dashboard-ui.png"
                  alt="UNI5 Dashboard"
                  width={600}
                  height={1200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Cards - Left Side */}
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-0 md:left-4 lg:left-12 z-20 hidden md:block w-48 transition-all hover:scale-105 bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl border border-white/80 dark:border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shadow-inner">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-700 uppercase tracking-widest">Attendance</p>
                <p className="text-base font-800 text-[#1a1a1a] dark:text-white">98.2%</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-500">this month</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0], rotate: [1, -1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] left-4 md:left-8 lg:left-16 z-20 hidden md:block w-48 transition-all hover:scale-105 bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl border border-white/80 dark:border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shadow-inner">
                <Award size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-700 uppercase tracking-widest">Recognition</p>
                <p className="text-base font-800 text-[#1a1a1a] dark:text-white">+24</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-500">this week</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Cards - Right Side */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-0 md:right-4 lg:right-12 z-20 hidden md:block w-48 transition-all hover:scale-105 bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl border border-white/80 dark:border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shadow-inner">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-700 uppercase tracking-widest">Payroll</p>
                <p className="text-base font-800 text-[#1a1a1a] dark:text-white whitespace-nowrap">Processed</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-500">₹4.2L paid</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[15%] right-4 md:right-8 lg:right-16 z-20 hidden md:block w-48 transition-all hover:scale-105 bg-white/60 dark:bg-white/[0.04] backdrop-blur-2xl border border-white/80 dark:border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shadow-inner">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-700 uppercase tracking-widest">Tasks</p>
                <p className="text-base font-800 text-[#1a1a1a] dark:text-white">12 done</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-500">today</p>
              </div>
            </div>
          </motion.div>

          {/* Central Radiant Glow behind elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-red/5 rounded-full -z-10 blur-[120px] opacity-60" />
        </motion.div>

      </div>

      {/* Integrated LogoStrip - Moved outside container for full-width effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full mt-20 pb-6 md:pb-8 relative z-10"
      >
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-[10px] md:text-xs font-800 text-brand-gray dark:text-gray-400 uppercase tracking-[0.3em]">
            Partnering with top industry experts
          </p>
        </div>

        <div className="relative w-full">
          {/* Gradient Overlays for deep hidden effect - Widths balanced to bring fog closer to center */}
          <div className="absolute inset-y-0 left-0 w-[24%] md:w-[40%] bg-gradient-to-r from-white dark:from-[#0f0f14] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[24%] md:w-[40%] bg-gradient-to-l from-white dark:from-[#0f0f14] to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-x-hidden">
            <div className="infinite-scroll py-4 flex items-center">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center h-16 md:h-20">
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={180}
                    height={60}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 scale-100 md:scale-110 dark:invert dark:brightness-200 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;











