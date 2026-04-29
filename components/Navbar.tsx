"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Button from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const sections = ['home', 'features', 'modules', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const scrollUnsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });

    return () => {
      observer.disconnect();
      scrollUnsubscribe();
    };
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Features', href: '/#features' },
    { name: 'Modules', href: '/#modules' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? (typeof window !== 'undefined' && window.innerWidth < 768 ? "100%" : "max-content") : "100%",
          borderRadius: scrolled ? (typeof window !== 'undefined' && window.innerWidth < 768 ? "0px" : "100px") : "0px",
          backgroundColor: scrolled
            ? (mounted && resolvedTheme === 'dark' ? "rgba(10, 10, 15, 0.95)" : "rgba(255, 255, 255, 0.95)")
            : (mounted && resolvedTheme === 'dark' ? "rgba(15, 15, 20, 0.4)" : "rgba(255, 255, 255, 0.4)"),
          border: (scrolled && typeof window !== 'undefined' && window.innerWidth >= 768)
            ? (mounted && resolvedTheme === 'dark' ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.08)")
            : "none",
          borderBottom: !scrolled
            ? (mounted && resolvedTheme === 'dark' ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)")
            : undefined,
          boxShadow: scrolled
            ? (mounted && resolvedTheme === 'dark' ? "0 25px 50px -12px rgba(0, 0, 0, 0.6)" : "0 20px 40px -10px rgba(0, 0, 0, 0.1)")
            : (mounted && resolvedTheme === 'dark' ? "inset 0 1px 0 rgba(255,255,255,0.05)" : "inset 0 1px 0 rgba(255,255,255,0.4)"),
          y: scrolled ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 12) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1
        }}
        className="pointer-events-auto relative backdrop-blur-2xl flex items-center justify-center"
      >
        <motion.div
          className={`flex items-center justify-center md:justify-between w-full max-w-7xl mx-auto relative ${scrolled ? 'h-16 md:h-14 space-x-6 md:space-x-10 px-6 md:px-12' : 'h-20 space-x-12 px-6 md:px-6'
            }`}
        >
          {/* Logo */}
          <motion.div className="relative h-10 w-28 md:h-10 md:w-32 transition-none hover:opacity-80 flex-shrink-0">
            <Image
              src="/logos/logo-dark.png"
              alt="UNI5 Logo"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/logos/logo-light.png"
              alt="UNI5 Logo"
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative text-xs lg:text-sm font-600
                  transition-all px-3 py-2 rounded-full
                  hover:bg-black/5 dark:hover:bg-white/10
                  ${activeSection === link.name.toLowerCase()
                    ? 'text-brand-red'
                    : scrolled ? 'text-brand-dark dark:text-gray-300' : 'text-brand-dark dark:text-white'
                  }
                `}
              >
                {link.name}
                {activeSection === link.name.toLowerCase() && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <motion.div
              animate={{
                width: scrolled ? 0 : "auto",
                opacity: scrolled ? 0 : 1,
                marginRight: scrolled ? 0 : 8
              }}
              transition={{ duration: 0 }}
              className="overflow-hidden flex items-center"
            >
              <Button
                variant="ghost"
                className="px-3 py-1.5 text-xs lg:text-sm whitespace-nowrap"
              >
                Login
              </Button>
            </motion.div>
            <motion.div>
              <Button
                className={`flex items-center justify-center whitespace-nowrap ${scrolled ? 'px-5 py-2 text-xs h-9 rounded-full min-w-[100px]' : 'px-6 py-2.5 text-sm h-10 rounded-full min-w-[140px]'
                  }`}
              >
                {scrolled ? 'Get Started' : 'Get Started Free'}
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden absolute right-6 text-brand-dark dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden overflow-hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0f0f14] border-t border-black/5 dark:border-white/10 shadow-2xl p-6`}
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-700 text-brand-dark dark:text-white hover:text-brand-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-600 text-gray-500">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" className="w-full py-3">Login</Button>
                  <Button className="w-full py-3">Get Started Free</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;

