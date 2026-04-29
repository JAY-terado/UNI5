"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50/80 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white pt-16 md:pt-20 pb-10 relative border-t border-black/5 dark:border-white/5">
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30 dark:opacity-60 absolute top-0 left-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
          {/* Brand Col */}
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <Link href="/" className="relative h-10 w-32 transition-opacity hover:opacity-90">
              <Image
                src="/logos/logo-dark.png"
                alt="UNI5 Logo"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/logos/logo-light.png"
                alt="UNI5 Logo"
                fill
                className="object-contain hidden dark:block"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              The modern HRMS platform designed for growing organizations to unify their entire employee lifecycle.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Instagram size={18} />
              </Link>
            </div>

            <div className="w-full mt-2">
              <p className="text-xs text-gray-500 mb-3 font-500">Get HR insights in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="
                    flex-1 min-w-0 px-3 py-2 text-xs rounded-lg
                    bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
                    text-gray-900 dark:text-white placeholder:text-gray-500
                    focus:outline-none focus:border-brand-red/50
                    transition-colors
                  "
                />
                <button className="
                  px-4 py-2 text-xs font-700 rounded-lg
                  bg-brand-red text-white
                  hover:bg-brand-red/90 transition-colors
                  whitespace-nowrap flex-shrink-0
                ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-lg font-700 mb-8">Product</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li><Link href="#features" className="hover:text-brand-red transition-colors">Features</Link></li>
              <li><Link href="#modules" className="hover:text-brand-red transition-colors">Modules</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Releases</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-lg font-700 mb-8">Company</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Partner Program</Link></li>
              <li><Link href="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:text-brand-red transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-700 mb-8">Contact</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-brand-red mt-1" />
                <span>hello@uni5tech.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-brand-red mt-1" />
                <span>+91 800 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-brand-red mt-1" />
                <span>MOON,<br />Chand 560102</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-500 text-center md:text-left">
          <p>© 2026 UNI5 Tech LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
            <Link href="#" className="hover:text-brand-red dark:hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-red dark:hover:text-white transition-colors whitespace-nowrap">Terms of Service</Link>
            <Link href="#" className="hover:text-brand-red dark:hover:text-white transition-colors whitespace-nowrap">Cookie Policy</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
              group flex items-center gap-2
              text-xs font-600 text-gray-500 dark:text-gray-400
              hover:text-brand-red dark:hover:text-brand-red
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            Back to top
            <span className="
              w-7 h-7 rounded-full border border-current
              flex items-center justify-center
              group-hover:-translate-y-0.5 transition-transform duration-200
            ">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
