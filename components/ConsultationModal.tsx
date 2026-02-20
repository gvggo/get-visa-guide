'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { submitConsultation } from '@/actions/consultation';
import { toast } from 'sonner';

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is too short"),
  visaType: z.string().min(1, "Select a visa type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const result = await submitConsultation(data);
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      toast.success("Assessment request sent!");
      setTimeout(() => {
        setIsSuccess(false);
        reset();
        onClose();
      }, 3000);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <X size={20} />
            </button>

            <div className="p-8">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-4">
                    <CheckCircle2 size={64} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
                  <p className="text-slate-600 mt-2">Our visa expert will contact you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900">Free Visa Assessment</h3>
                  <p className="text-slate-500 mb-6">Fill in your details and we'll guide you through the process.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input 
                        {...register("fullName")}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input 
                          {...register("email")}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                        <input 
                          {...register("phone")}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                          placeholder="+1 234 567 890"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Visa Type</label>
                      <select 
                        {...register("visaType")}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="student">Student Visa</option>
                        <option value="work">Work Visa & PR</option>
                        <option value="business">Business / Investor</option>
                        <option value="family">Family Sponsorship</option>
                        <option value="visitor">Visitor / Tourist</option>
                      </select>
                      {errors.visaType && <p className="text-red-500 text-xs mt-1">{errors.visaType.message}</p>}
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Send My Request"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}