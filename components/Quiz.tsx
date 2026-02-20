'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Trophy, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, title: "Nationality", question: "Where are you currently located?", options: ["India", "Nigeria", "Pakistan", "Philippines", "UAE", "Others"] },
  { id: 2, title: "Purpose", question: "What is your main goal?", options: ["Study", "Work", "Permanent Residency", "Investment", "Family"] },
  { id: 3, title: "Education", question: "Highest level of education?", options: ["High School", "Bachelor's", "Master's", "PhD", "Vocational"] },
  { id: 4, title: "Experience", question: "Work experience in your field?", options: ["None", "1-2 Years", "3-5 Years", "5-8 Years", "10+ Years"] },
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Check Your Eligibility</h2>
          <p className="text-slate-600 mt-4">Discover your chances of success in under 60 seconds.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-slate-100">
          {!showResult ? (
            <div>
              <div className="flex justify-between mb-8 items-center">
                <span className="text-teal-600 font-bold text-sm uppercase tracking-wider">Step {currentStep + 1} of {steps.length}</span>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${i <= currentStep ? 'bg-teal-500' : 'bg-slate-100'}`} />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-800">{steps[currentStep].question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps[currentStep].options.map((option) => (
                      <button 
                        key={option}
                        onClick={() => handleOption(option)}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-left font-semibold text-slate-700"
                      >
                        {option}
                        <ChevronRight className="text-slate-300 group-hover:text-teal-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-8 flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
                >
                  <ArrowLeft size={16} /> Back to previous step
                </button>
              )}
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Great News!</h3>
              <p className="text-lg text-slate-600 mt-4 max-w-md mx-auto">
                Based on your profile, you have a <span className="text-emerald-600 font-bold">92% success probability</span> for your visa application.
              </p>
              <button className="mt-8 bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20">
                Claim My Free Strategy Session
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}