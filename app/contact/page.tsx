"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Copy, Twitter, Linkedin, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mouse tracking for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f14] transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      {/* Dynamic Background Glow */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 77, 77, 0.08), transparent 80%)`,
        } as any}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ 
            '--x': springX.get() + 'px', 
            '--y': springY.get() + 'px' 
          } as any}
        />
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ff4d4d 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl lg:text-5xl font-800 text-[#1a1a1a] dark:text-white mb-4 leading-[1.2] tracking-tight"
            >
              How can we <span className="text-brand-red">help you?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-xs sm:text-sm md:text-base lg:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              Reach out to our experts and discover how UNI5 can unify your HR workflow and maximize efficiency.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <ContactInfoCard 
                  icon={<MessageSquare size={20} />}
                  title="Chat with Us"
                  description="Expect a response within 2 hours."
                  contact="support@uni5tech.com"
                  delay={0}
                />
                <ContactInfoCard 
                  icon={<MapPin size={20} />}
                  title="Visit Our Office"
                  description="Our doors are open for a coffee."
                  contact="HSR Layout, Bangalore, KA"
                  delay={0.05}
                />
                <ContactInfoCard 
                  icon={<Phone size={20} />}
                  title="Call Us"
                  description="Direct line to our support team."
                  contact="+91 800 123 4567"
                  delay={0.1}
                />
              </div>

              {/* Social Connect */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100/50 dark:border-white/5 shadow-sm"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Connect with us</h4>
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Github].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red transition-all duration-300 hover:scale-110 shadow-sm">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white/80 dark:bg-white/5 p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-200/80 dark:border-white/20 relative overflow-hidden backdrop-blur-xl group/form"
              >
                {/* Accent Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-32 -mt-32 blur-[80px] group-hover/form:bg-brand-red/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full -ml-32 -mb-32 blur-[80px] group-hover/form:bg-brand-red/10 transition-colors duration-500" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 relative z-10" 
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-gray-900 dark:text-white ml-2 opacity-70">Your Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Alex Johnson"
                            className="w-full px-8 py-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/20 rounded-2xl outline-none transition-all dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-lg focus:shadow-brand-red/5 focus:border-brand-red/20"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-gray-900 dark:text-white ml-2 opacity-70">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="alex@company.com"
                            className="w-full px-8 py-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/20 rounded-2xl outline-none transition-all dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-lg focus:shadow-brand-red/5 focus:border-brand-red/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-900 dark:text-white ml-2 opacity-70">Subject</label>
                        <div className="relative">
                          <select className="w-full px-8 py-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/20 rounded-2xl outline-none transition-all dark:text-white appearance-none cursor-pointer focus:bg-white dark:focus:bg-white/10 focus:border-brand-red/20">
                            <option>General Inquiry</option>
                            <option>Sales & Demo</option>
                            <option>Technical Support</option>
                            <option>Partnership</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                            <Clock size={16} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-900 dark:text-white ml-2 opacity-70">Message</label>
                        <textarea 
                          required
                          rows={5}
                          placeholder="How can we help your business?"
                          className="w-full px-8 py-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/20 rounded-2xl outline-none transition-all dark:text-white resize-none placeholder:text-gray-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-lg focus:shadow-brand-red/5 focus:border-brand-red/20"
                        ></textarea>
                      </div>

                      <Button 
                        disabled={isSubmitting}
                        className="w-full py-5 text-lg font-bold group overflow-hidden relative shadow-xl shadow-brand-red/20"
                      >
                        <span className={`flex items-center justify-center transition-transform duration-200 ${isSubmitting ? '-translate-y-20' : 'translate-y-0'}`}>
                          Send Message
                          <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                        </span>
                        {isSubmitting && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          </div>
                        )}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-16 relative z-10"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                        className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="text-green-500" size={40} />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                        Thanks for reaching out. Our team will get back to you within 2 business hours.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)} className="px-10">
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const ContactInfoCard = ({ icon, title, description, contact, delay }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex items-start p-8 bg-white dark:bg-white/5 rounded-3xl shadow-lg shadow-gray-100/50 dark:shadow-none transition-all duration-300 group border border-gray-100/50 dark:border-white/5 hover:border-brand-red/20"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mr-8 group-hover:scale-110 group-hover:bg-brand-red transition-all duration-500 shadow-sm">
        <div className="text-brand-red group-hover:text-white transition-colors duration-500">{icon}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-base mb-3 leading-relaxed">{description}</p>
        <div className="flex items-center gap-3">
          <p className="text-brand-red font-bold text-lg">{contact}</p>
          <button 
            onClick={handleCopy}
            className="p-2 rounded-lg bg-gray-50 dark:bg-white/10 text-gray-400 hover:text-brand-red transition-all"
            title="Copy to clipboard"
          >
            {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
