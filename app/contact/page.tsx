"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, Variants } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, MessageSquare, Clock, 
  CheckCircle2, Copy, Twitter, Linkedin, Github, ChevronDown, Check 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Toast, { ToastType } from '@/components/ui/Toast';

const CONTACT_INFO = [
  { icon: <MessageSquare size={20} />, title: "Chat with Us", desc: "Expect a response within 2 hours.", contact: "support@uni5tech.com" },
  { icon: <MapPin size={20} />, title: "Visit Our Office", desc: "Our doors are open for a coffee.", contact: "HSR Layout, Bangalore, KA" },
  { icon: <Phone size={20} />, title: "Call Us", desc: "Direct line to our support team.", contact: "+91 800 123 4567" }
];

const COUNTRY_CODES = [
  { code: '+91', label: 'IN (+91)' }, { code: '+1', label: 'US (+1)' }, { code: '+44', label: 'UK (+44)' },
  { code: '+971', label: 'UAE (+971)' }, { code: '+65', label: 'SG (+65)' }, { code: '+61', label: 'AU (+61)' }
];

// Premium animation variants - Typed correctly to resolve Ease error
const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const CustomSelect = ({ options, value, onChange, label, className = "" }: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const click = (e: any) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', click);
    return () => document.removeEventListener('mousedown', click);
  }, []);

  const selected = options.find((o: any) => o.value === value);

  return (
    <div className={`relative ${className}`} ref={ref}>
      {label && <label className="text-sm font-bold text-gray-900 dark:text-white ml-2 opacity-70 mb-3 block">{label}</label>}
      <button type="button" onClick={() => setOpen(!open)} className={`w-full px-4 md:px-6 py-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/20 rounded-2xl flex items-center justify-between text-left outline-none whitespace-nowrap transition-all duration-300 ${open ? 'bg-white dark:bg-white/10 border-brand-red/30 shadow-lg ring-1 ring-brand-red/20' : 'hover:border-white/30'} dark:text-white`}>
        <span className={selected ? "text-gray-900 dark:text-white" : "text-gray-400"}>{selected?.label || 'Select'}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="opacity-40"><ChevronDown size={18} /></motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 5, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }} className="absolute z-[100] w-full mt-2 bg-white/90 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-2xl shadow-2xl py-2 max-h-[240px] overflow-y-auto custom-scrollbar">
            {options.map((o: any) => (
              <button key={o.value} type="button" onClick={() => { onChange(o.value); setOpen(false); }} className={`w-full px-6 py-3 text-left flex items-center justify-between transition-colors ${value === o.value ? 'bg-brand-red/10 text-brand-red font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
                <span>{o.label}</span>
                {value === o.value && <Check size={16} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', countryCode: '+91', phone: '', subject: 'General Inquiry', message: '' });
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [status, setStatus] = useState({ submitting: false, submitted: false });
  const [toast, setToast] = useState<any>({ msg: '', type: 'success', show: false });

  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 50 }), sy = useSpring(my, { damping: 50 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const validate = (n: string, v: string) => {
    let e = '';
    if (n === 'name') {
      const charCount = v.replace(/\s/g, '').length;
      if (!v.trim() || charCount < 2) e = "Please enter your full name";
    }
    if (n === 'email') {
      if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) e = "Enter a valid email address";
    }
    if (n === 'phone') {
      if (v && !/^\d{10}$/.test(v)) e = "Invalid phone number (must be 10 digits)";
    }
    if (n === 'message') {
      if (v.length < 20) e = "Message must be at least 20 characters";
    }
    setErrors((p: any) => ({ ...p, [n]: e }));
    return e;
  };

  const handleAction = (name: string, value: string, isBlur = false) => {
    if (isBlur) setTouched((p: any) => ({ ...p, [name]: true }));
    setForm((p: any) => ({ ...p, [name]: value }));
    if (isBlur || touched[name]) validate(name, value);
  };

  const submit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.keys(form).forEach(k => {
      const err = validate(k, (form as any)[k]);
      if (err) newErrors[k] = err;
    });
    setTouched(Object.keys(form).reduce((acc: any, k) => ({ ...acc, [k]: true }), {}));
    
    if (Object.values(newErrors).some(v => v !== '')) {
      return setToast({ msg: 'Please fix the errors.', type: 'error', show: true });
    }

    setStatus({ ...status, submitting: true });
    setTimeout(() => {
      setStatus({ submitted: true, submitting: false });
      setToast({ msg: "Message sent! We'll reply soon.", type: 'success', show: true });
      setForm({ name: '', email: '', countryCode: '+91', phone: '', subject: 'General Inquiry', message: '' });
      setTouched({}); setErrors({});
    }, 1500);
  };

  const inputCls = (n: string) => `w-full px-8 py-5 bg-gray-50/50 dark:bg-white/5 border rounded-2xl outline-none transition-all duration-300 dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-white/10 ${touched[n] && errors[n] ? 'border-red-400 animate-shake' : touched[n] && !errors[n] ? 'border-green-400 shadow-lg shadow-green-500/5' : 'border-gray-200/60 dark:border-white/20 focus:border-brand-red/30'}`;

  if (!mounted) return <div className="min-h-screen bg-white dark:bg-[#0f0f14]" />;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f14] transition-colors duration-300 relative overflow-hidden">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="fixed inset-0 pointer-events-none z-0 dark:opacity-20" style={{ background: `radial-gradient(600px circle at ${sx.get()}px ${sy.get()}px, rgba(255, 77, 77, 0.12), transparent 80%)` }} />
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden" style={{ backgroundImage: 'radial-gradient(#ff4d4d 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <motion.section initial="initial" animate="animate" variants={staggerContainer} className="pt-40 pb-16 relative z-10 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-800 text-[#1a1a1a] dark:text-white mb-4">How can we <span className="text-brand-red">help you?</span></motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Reach out to our experts and discover how UNI5 can unify your HR workflow.</motion.p>
        </div>
      </motion.section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="lg:col-span-5 space-y-6">
            {CONTACT_INFO.map((c, i) => <ContactInfoCard key={i} {...c} delay={i * 0.1} />)}
            <motion.div variants={fadeUp} className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100/50 dark:border-white/5 shadow-sm">
              <h4 className="font-bold mb-6 dark:text-white">Connect with us</h4>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Github].map((I, i) => (
                  <motion.button whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }} key={i} className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-sm"><I size={20} /></motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-white/5 p-8 md:p-14 rounded-[3rem] border border-gray-200/80 dark:border-white/20 relative backdrop-blur-xl shadow-2xl shadow-gray-200/30 dark:shadow-none">
              <AnimatePresence mode="wait">{!status.submitted ? (
                <motion.form key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6 relative z-10" onSubmit={submit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {['name', 'email'].map(n => (
                      <div key={n} className="space-y-3"><label className="text-sm font-bold opacity-70 dark:text-white ml-2">{n === 'name' ? 'Your Name' : 'Email Address'}</label>
                        <div className="relative">
                          <input 
                            name={n} 
                            type={n === 'email' ? 'email' : 'text'} 
                            value={(form as any)[n]} 
                            onChange={(e) => handleAction(n, e.target.value)} 
                            onBlur={(e) => handleAction(n, e.target.value, true)} 
                            placeholder={n === 'name' ? "Alex Johnson" : "alex@company.com"} 
                            className={inputCls(n)} 
                          />
                          {touched[n] && !errors[n] && <CheckCircle2 size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-green-500 animate-in zoom-in" />}
                          {touched[n] && errors[n] && <p className="text-[11px] text-red-500 mt-1 ml-2">{errors[n]}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold opacity-70 dark:text-white ml-2">Phone Number</label>
                      <div className="flex gap-3">
                        <CustomSelect 
                          options={COUNTRY_CODES.map(c => ({ value: c.code, label: c.label }))} 
                          value={form.countryCode} 
                          onChange={(v: any) => setForm({ ...form, countryCode: v })} 
                          className="w-[110px] md:w-[130px]" 
                        />
                        <div className="relative flex-1">
                          <input 
                            name="phone" 
                            type="tel" 
                            maxLength={10} 
                            value={form.phone} 
                            onChange={(e) => handleAction('phone', e.target.value.replace(/\D/g, ''))} 
                            onBlur={(e) => handleAction('phone', e.target.value.replace(/\D/g, ''), true)} 
                            placeholder="78945 61237" 
                            className={inputCls('phone')} 
                          />
                          {touched.phone && !errors.phone && form.phone && <CheckCircle2 size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-green-500 animate-in zoom-in" />}
                          {touched.phone && errors.phone && <p className="text-[11px] text-red-500 mt-1 ml-2">{errors.phone}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold opacity-70 dark:text-white ml-2">Subject</label>
                      <CustomSelect 
                        options={['General Inquiry', 'Sales & Demo', 'Technical Support', 'Partnership'].map(v => ({ value: v, label: v }))} 
                        value={form.subject} 
                        onChange={(v: any) => setForm({ ...form, subject: v })} 
                      />
                    </div>
                  </div>
                  <div className="space-y-3"><label className="text-sm font-bold opacity-70 dark:text-white ml-2 flex justify-between">Message <span className={`text-[10px] ${form.message.length >= 20 ? 'text-green-500' : 'text-gray-400'}`}>{form.message.length} / 500</span></label>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        value={form.message} 
                        onChange={(e) => handleAction('message', e.target.value)} 
                        onBlur={(e) => handleAction('message', e.target.value, true)} 
                        rows={5} 
                        maxLength={500} 
                        placeholder="How can we help?" 
                        className={inputCls('message')} 
                      />
                      {touched.message && !errors.message && form.message.length >= 20 && <CheckCircle2 size={18} className="absolute right-6 bottom-6 text-green-500 animate-in zoom-in" />}
                      {touched.message && errors.message && <p className="text-[11px] text-red-500 mt-1 ml-2">{errors.message}</p>}
                    </div>
                  </div>
                  <Button disabled={status.submitting} className="w-full py-5 shadow-2xl shadow-brand-red/10 active:scale-[0.98] transition-transform">{status.submitting ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : <span className="flex items-center justify-center font-bold">Send Message <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={20} /></span>}</Button>
                </motion.form>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16"><motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }} className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="text-green-500" size={40} /></motion.div><h2 className="text-3xl font-bold dark:text-white mb-3">Message Sent!</h2><p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm mx-auto">Thanks! We'll reply within 2 business hours.</p><Button variant="outline" onClick={() => setStatus({ ...status, submitted: false })} className="px-10">Send Another</Button></motion.div>
              )}</AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer /><Toast isVisible={toast.show} message={toast.msg} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </main>
  );
};

const ContactInfoCard = ({ icon, title, desc, contact, delay }: any) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(contact); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }} className="flex items-start p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100/50 dark:border-white/5 hover:border-brand-red/20 group transition-all shadow-lg shadow-gray-100/50 dark:shadow-none cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mr-8 group-hover:bg-brand-red transition-all duration-500 text-brand-red group-hover:text-white shadow-sm">{icon}</div>
      <div className="flex-1"><h3 className="text-xl font-bold dark:text-white mb-2">{title}</h3><p className="text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{desc}</p><div className="flex items-center gap-3"><p className="text-brand-red font-bold text-lg">{contact}</p><button onClick={copy} className="p-2 rounded-lg bg-gray-50 dark:bg-white/10 text-gray-400 hover:text-brand-red transition-all active:scale-90">{copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}</button></div></div>
    </motion.div>
  );
};

export default ContactPage;
