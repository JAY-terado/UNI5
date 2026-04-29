"use client";

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { 
  LogIn, 
  FileText, 
  CheckCircle, 
  Calendar, 
  Award, 
  Settings,
  LucideIcon
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Image from 'next/image';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  screen: string;
  // Keep legacy fields for backward compatibility as requested
  side?: string;
  rotate?: number;
}

const features: Feature[] = [
  {
    id: 'check-in',
    title: "Check-In / Out",
    description: "One-tap, geo-fenced attendance tracking for your workforce.",
    icon: LogIn,
    side: 'left',
    color: '#a61e23',
    rotate: -15,
    screen: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400&h=800'
  },
  {
    id: 'payslips',
    title: "Payslips",
    description: "Access and download your payslips securely, anywhere, anytime.",
    icon: FileText,
    side: 'left',
    color: '#3b82f6',
    rotate: -10,
    screen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=800'
  },
  {
    id: 'approvals',
    title: "Single-Click Approvals",
    description: "Streamline workflows with instant approval of requests on the go.",
    icon: CheckCircle,
    side: 'left',
    color: '#10b981',
    rotate: -5,
    screen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=800'
  },
  {
    id: 'attendance',
    title: "Attendance & Leaves",
    description: "Apply for leaves and track your attendance history effortlessly.",
    icon: Calendar,
    side: 'right',
    color: '#f59e0b',
    rotate: 5,
    screen: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400&h=800'
  },
  {
    id: 'recognition',
    title: "Recognition",
    description: "Celebrate milestones and recognize your peers' achievements.",
    icon: Award,
    side: 'right',
    color: '#8b5cf6',
    rotate: 10,
    screen: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=400&h=800'
  },
  {
    id: 'regularization',
    title: "Regularization",
    description: "Fix attendance records and discrepancies in seconds.",
    icon: Settings,
    side: 'right',
    color: '#ec4899',
    rotate: 15,
    screen: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400&h=800'
  }
];

  const PhoneComponent = ({ activeIndex }: { activeIndex: number }) => {
  const feature = features[activeIndex];

  return (
    <motion.div 
      key="phone-frame"
      animate={{ y: [0, -5, 0] }}
      transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      className="relative w-[280px] h-[580px] will-change-transform z-10"
    >
      {/* FRONT FACE */}
      <div 
        className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-[3rem] border-[10px] border-gray-950 ring-2 ring-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
        style={{ backfaceVisibility: 'hidden', zIndex: 2 }}
      >
        {/* Dynamic Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-950 rounded-full z-30 flex items-center justify-center">
          <div className="w-10 h-1 bg-white/10 rounded-full" />
        </div>
        
        {/* Status Bar */}
        <div className="flex justify-between items-center px-9 pt-6 pb-2 z-20">
          <span className="text-white text-[11px] font-bold">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2 bg-white/30 rounded-sm" />
            <div className="w-5 h-2.5 bg-white rounded-sm" />
          </div>
        </div>

        {/* Screen Area */}
        <div className="flex-1 overflow-hidden relative mx-1.5 mb-1.5 rounded-[2.2rem] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 1.1, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0"
            >
              <Image 
                src={feature.screen} 
                alt={feature.title} 
                fill 
                className="object-cover"
                sizes="280px"
                priority={activeIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="absolute bottom-10 left-6 right-6"
              >
                <div className="h-1 w-8 bg-brand-red mb-3 rounded-full" />
                <p className="text-white font-bold text-lg leading-tight">{feature.title}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BACK FACE */}
      <div 
        className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-[3rem] border-[10px] border-gray-950 ring-2 ring-white/5 flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          backfaceVisibility: 'hidden', 
          transform: 'rotateY(180deg)',
          zIndex: 1
        }}
      >
        {/* Camera Module */}
        <div className="absolute top-12 left-8 w-24 h-24 bg-gray-950 rounded-2xl p-3 grid grid-cols-2 gap-2 shadow-inner border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 shadow-lg" />
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 shadow-lg" />
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 shadow-lg" />
          <div className="w-4 h-4 rounded-full bg-white/20 self-center justify-self-center animate-pulse" />
        </div>

        {/* Central Logo */}
        <div className="flex flex-col items-center gap-2 opacity-40">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-xl italic">U5</span>
          </div>
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">UNI5 GLOBAL</span>
        </div>

        {/* Bottom Detail */}
        <div className="absolute bottom-12 w-12 h-1 bg-white/10 rounded-full" />
      </div>
    </motion.div>
  );
};

const FeatureDescription = ({ index, feature, progressBarWidth }: { index: number; feature: Feature; progressBarWidth: any }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: isEven ? -20 : 20, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white dark:bg-white/5 shadow-2xl dark:shadow-none rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" 
          style={{ backgroundColor: `${feature.color}20` }}
        >
          <feature.icon size={28} style={{ color: feature.color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-brand-red font-bold text-xs tracking-widest uppercase mb-1">
            Feature {index + 1}
          </span>
          <span className="text-gray-400 dark:text-gray-500 font-medium text-[10px]">
            0{index + 1} / 06
          </span>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
        {feature.description}
      </p>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-100 dark:bg-white/5">
        <motion.div 
          className="h-full bg-brand-red"
          style={{ width: progressBarWidth, originX: 0 }}
        />
      </div>
    </motion.div>
  );
};


const MobileAppSection = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });




  // Map scroll to active feature index
  const activeFeatureIndex = useTransform(scrollYProgress, [0, 1], [0, features.length - 1], {
    clamp: true
  });

  // Calculate segment progress for individual progress bars
  const progressBarWidth = useTransform(scrollYProgress, (v) => {
    const segment = 1 / 6;
    const segmentProgress = (v % segment) / segment;
    return `${Math.max(0, Math.min(1, segmentProgress)) * 100}%`;
  });

  // Sync state for components that need simple index
  useMotionValueEvent(activeFeatureIndex, "change", (latest) => {
    const index = Math.min(Math.floor(latest + 0.5), 5);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section 
      ref={sectionRef}
      id="mobile-app" 
      className="bg-transparent transition-colors duration-500 relative"
    >
      {/* Section Header - Restored to static position at top */}
      <div className="pt-24 pb-12 px-4 text-center">
        <span className="text-brand-red text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
          Mobile Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
          Your Office, <br className="hidden md:block" />
          <span className="text-brand-red">In Your Pocket</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
          Seamlessly manage your professional life with our cutting-edge mobile application.
        </p>
      </div>

      {/* Main Scroll Container */}
      <div ref={scrollRef} className="relative h-[450vh] hidden md:block">
        {/* Sticky Inner Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />
          
          <div className="container mx-auto px-6 max-w-7xl relative h-full flex flex-col items-center justify-center">
            
            {/* Parallax Content - Now always visible within the sticky zone */}
            <div className="w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-16 min-h-[600px]">
                {/* Left Column */}
                <div className="flex items-center justify-end h-full min-h-[500px] z-20">
                  <AnimatePresence mode="wait">
                    {activeIndex % 2 === 0 && (
                      <FeatureDescription 
                        key={activeIndex}
                        index={activeIndex} 
                        feature={features[activeIndex]} 
                        progressBarWidth={progressBarWidth}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Center Column: Phone */}
                <div className="flex justify-center relative px-8">
                  <div className="absolute inset-0 bg-brand-red/10 blur-[100px] rounded-full scale-125 -z-10" />
                  <PhoneComponent activeIndex={activeIndex} />
                </div>

                {/* Right Column */}
                <div className="flex items-center justify-start h-full min-h-[500px] z-20">
                  <AnimatePresence mode="wait">
                    {activeIndex % 2 !== 0 && (
                      <FeatureDescription 
                        key={activeIndex}
                        index={activeIndex} 
                        feature={features[activeIndex]} 
                        progressBarWidth={progressBarWidth}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>

      {/* Mobile Fallback: Standard List */}
      <div className="md:hidden flex flex-col gap-8 px-4 pb-20 mt-10">
        <div className="text-center pt-20 pb-8 px-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
            Mobile Experience
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Your Office,{" "}
            <span className="text-brand-red">In Your Pocket</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-sm mx-auto">
            Seamlessly manage your professional life with our cutting-edge mobile application.
          </p>
        </div>
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <feature.icon size={24} style={{ color: feature.color }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{feature.description}</p>
            
            <div className="relative w-full max-w-[200px] aspect-[9/18.5] bg-gray-900 rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-white/10">
              <Image 
                src={feature.screen} 
                alt={feature.title} 
                fill 
                className="object-cover" 
                sizes="200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

MobileAppSection.displayName = 'MobileAppSection';

export default MobileAppSection;
