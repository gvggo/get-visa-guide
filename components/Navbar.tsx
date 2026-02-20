'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, PlaneTakeoff, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'How it Works', href: '#process' },
    { name: 'Visa Tips', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            <PlaneTakeoff size={24} />
          </div>
          <span className={`text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            GET VISA <span className="text-teal-500">GUIDE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onOpenModal}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-600/20"
          >
            Free Visa Assessment
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-slate-800 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <button onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold">
            Free Visa Assessment
          </button>
        </motion.div>
      )}
    </nav>
  );
}