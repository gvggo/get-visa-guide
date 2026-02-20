'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Briefcase, Landmark, Users, 
  MapPin, Globe, ShieldCheck, Zap, Star, 
  TrendingUp, Calendar, CheckCircle, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Quiz from '@/components/Quiz';
import ConsultationModal from '@/components/ConsultationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { title: "Student Visa", icon: <GraduationCap />, desc: "Study at top universities globally." },
    { title: "Work & PR", icon: <Briefcase />, desc: "Fast-track your career and residency." },
    { title: "Business Visa", icon: <TrendingUp />, desc: "Grow your empire in new markets." },
    { title: "Family Sponsorship", icon: <Users />, desc: "Reunite with your loved ones." },
    { title: "Visitor Visa", icon: <Globe />, desc: "Explore the world without stress." },
    { title: "Citizenship", icon: <ShieldCheck />, desc: "Secure your future with dual nationality." }
  ];

  const destinations = [
    { name: "Canada", code: "CA" }, { name: "USA", code: "US" },
    { name: "UK", code: "GB" }, { name: "Australia", code: "AU" },
    { name: "Germany", code: "DE" }, { name: "UAE", code: "AE" },
    { name: "Ireland", code: "IE" }, { name: "New Zealand", code: "NZ" }
  ];

  return (
    <main className="min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="relative h-screen flex items-center justify-center hero-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-teal-500/20 text-teal-400 border border-teal-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">
              Trusted by 14,000+ Successful Applicants
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Get Your Visa.<br /> <span className="text-teal-400 underline decoration-white/20 underline-offset-8">Smarter & Faster.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
              Don't leave your immigration to chance. Our experts handle the complex paperwork while you plan your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 w-full sm:w-auto shadow-2xl shadow-teal-600/40"
              >
                Free Visa Assessment
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                Check My Eligibility
              </button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-300 border-t border-white/10 pt-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">98.7%</span>
                <span className="text-sm uppercase tracking-widest text-teal-500 font-bold">Success Rate</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-8">
                <span className="text-3xl font-bold text-white">14,291</span>
                <span className="text-sm uppercase tracking-widest text-teal-500 font-bold">Visas Approved</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-8">
                <span className="text-3xl font-bold text-white">24h</span>
                <span className="text-sm uppercase tracking-widest text-teal-500 font-bold">Support Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <button className="text-teal-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Top Immigration Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                  <MapPin size={24} />
                </div>
                <span className="font-bold text-xl">{dest.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Quiz />

      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900">Your Journey in 4 Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />
            {[
              { step: "01", title: "Consultation", desc: "Share your goals with our experts." },
              { step: "02", title: "Strategy", desc: "We design a personalized visa roadmap." },
              { step: "03", title: "Processing", desc: "We handle 100% of your documentation." },
              { step: "04", title: "Success", desc: "Pack your bags, your visa is ready!" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-teal-600/30">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-teal-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-24 opacity-10">
            <Globe size={300} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to start your new life?</h2>
          <p className="text-xl text-teal-50 opacity-90 mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of individuals who achieved their global dreams with Get Visa Guide.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-teal-600 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-50 transition-all hover:scale-105 relative z-10 shadow-xl"
          >
            Start Your Application Now
          </button>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <PlaneTakeoff className="text-teal-500" />
              <span className="text-white text-xl font-bold">GET VISA GUIDE</span>
            </div>
            <p className="text-sm leading-relaxed">
              Global headquarters in Dubai, UAE. Providing professional visa assistance for over 10 years across 45 countries.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Visas</h5>
            <ul className="space-y-4 text-sm">
              <li>Student Visa</li>
              <li>Skilled Migration</li>
              <li>Permanent Residency</li>
              <li>Investor Visa</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Success Stories</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li>+1 (555) 123-4567</li>
              <li>contact@getvisaguide.com</li>
              <li>Dubai, Business Bay, Tower A</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-xs">
          © 2026 Get Visa Guide. All rights reserved. Registered Immigration Consultants.
        </div>
      </footer>
    </main>
  );
}