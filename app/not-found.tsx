"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f14]">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden px-4 py-20">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 dark:bg-brand-red/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Large 404 text with gradient */}
            <h1 className="text-[120px] md:text-[200px] font-900 leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-brand-red/40 select-none">
              404
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4"
            >
              <h2 className="text-2xl md:text-4xl font-800 text-brand-dark dark:text-white mb-6">
                Lost in the Orbit?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                The page you're looking for seems to have vanished into deep space. 
                Don't worry, your data and HR operations are still safe on our servers.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/">
                <Button className="px-8 py-4 rounded-full font-700 shadow-xl shadow-brand-red/20 group">
                  <Home size={18} className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
                  Back to Earth
                </Button>
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="flex items-center text-brand-gray dark:text-gray-400 hover:text-brand-red dark:hover:text-white font-600 transition-colors px-6 py-3"
              >
                <ArrowLeft size={18} className="mr-2" />
                Previous Page
              </button>
            </motion.div>
          </motion.div>

          {/* Search Suggestion or Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 pt-10 border-t border-black/5 dark:border-white/5 text-sm text-gray-400 dark:text-gray-600 font-500"
          >
            Need immediate help? Visit our <Link href="/contact" className="text-brand-red hover:underline">Support Center</Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
