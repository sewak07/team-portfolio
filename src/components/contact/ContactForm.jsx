import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Sparkles, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get('package');

  const availableServices = [
    "Web Development",
    "E-Commerce Storefront",
    "Custom Web App & Admin Panel",
    "Social Media Management",
    "Content & Video Reels",
    "SEO & Google Business Profile",
    "Meta Paid Advertising",
    "Hosting & Maintenance"
  ];

  const budgetRanges = [
    "Starter (Rs. 15,000 - 30,000)",
    "Medium (Rs. 30,000 - 60,000)",
    "Scale (Rs. 60,000 - 150,000+)",
    "Custom Quote / Flexible"
  ];

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    selectedServices: [],
    budget: budgetRanges[0],
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preselect services if package parameter exists in URL
  useEffect(() => {
    if (packageParam === 'starter') {
      setFormData(prev => ({
        ...prev,
        selectedServices: ["Web Development", "SEO & Google Business Profile"],
        budget: budgetRanges[0]
      }));
    } else if (packageParam === 'business') {
      setFormData(prev => ({
        ...prev,
        selectedServices: ["Web Development", "Custom Web App & Admin Panel", "E-Commerce Storefront"],
        budget: budgetRanges[1]
      }));
    } else if (packageParam === 'growth') {
      setFormData(prev => ({
        ...prev,
        selectedServices: ["Web Development", "Social Media Management", "Content & Video Reels", "Meta Paid Advertising"],
        budget: budgetRanges[2]
      }));
    }
  }, [packageParam]);

  const toggleService = (service) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== service)
          : [...prev.selectedServices, service]
      };
    });
    if (errors.selectedServices) {
      setErrors(prev => ({ ...prev, selectedServices: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required.";
    }
    if (formData.selectedServices.length === 0) {
      errs.selectedServices = "Please select at least one service.";
    }
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      errs.details = "Please share a brief summary of your project requirements (min 10 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing for client-side feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      selectedServices: [],
      budget: budgetRanges[0],
      details: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  // Generate WhatsApp prefill URL based on filled details
  const generateWhatsAppMessageUrl = () => {
    const text = `Hi Nexa Digital!\n\n*Name:* ${formData.name}\n*Business:* ${formData.businessName || 'N/A'}\n*Services:* ${formData.selectedServices.join(', ')}\n*Budget:* ${formData.budget}\n*Details:* ${formData.details}`;
    return `https://wa.me/9779825933443?text=${encodeURIComponent(text)}`;
  };

  if (submitted) {
    return (
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/40 text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-white">
            Inquiry Prepared Successfully!
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your project summary has been recorded in our system.
          </p>
        </div>

        {/* Action to also send via WhatsApp for immediate chat */}
        <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800 max-w-lg mx-auto space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Fast Track Option
            </span>
            <span className="text-[10px] text-slate-400">Direct Chat</span>
          </div>
          <p className="text-xs text-slate-300">
            For instant confirmation, you can forward this exact inquiry to our team on WhatsApp with a single tap:
          </p>
          <a
            href={generateWhatsAppMessageUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-dark-950 font-bold text-xs transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details to WhatsApp</span>
          </a>
        </div>

        <div className="pt-4">
          <button
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 mx-auto font-medium transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit another inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">
          Tell Us About Your Project
        </h3>
        <p className="text-slate-400 text-sm">
          Fill in the details below and we'll prepare an actionable proposal and timeline.
        </p>
      </div>

      {/* Basic Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Marcus Vance"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: null });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-white text-sm focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-indigo'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Business / Brand Name
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Retail Store"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 focus:border-brand-indigo text-white text-sm focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-white text-sm focus:outline-none transition-colors ${
              errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-indigo'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Phone / WhatsApp Number <span className="text-rose-400">*</span>
          </label>
          <input
            type="tel"
            placeholder="+977 9800000000"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: null });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-white text-sm focus:outline-none transition-colors ${
              errors.phone ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-indigo'
            }`}
          />
          {errors.phone && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
        </div>
      </div>

      {/* Services Multi-Select */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-300">
          Services Required <span className="text-rose-400">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {availableServices.map((service) => {
            const isSelected = formData.selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                  isSelected
                    ? 'bg-brand-indigo/20 border-brand-indigo text-white shadow-sm'
                    : 'bg-dark-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{service}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />}
              </button>
            );
          })}
        </div>
        {errors.selectedServices && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.selectedServices}
          </p>
        )}
      </div>

      {/* Budget Range Selector */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-300">
          Estimated Budget Range
        </label>
        <select
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 focus:border-brand-indigo text-white text-sm focus:outline-none transition-colors"
        >
          {budgetRanges.map((range) => (
            <option key={range} value={range} className="bg-dark-900 text-white">
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Project Details Textarea */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-300">
          Project Summary & Requirements <span className="text-rose-400">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Briefly describe what you are building, any reference websites, key features, and your target timeline..."
          value={formData.details}
          onChange={(e) => {
            setFormData({ ...formData, details: e.target.value });
            if (errors.details) setErrors({ ...errors, details: null });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-white text-sm focus:outline-none transition-colors resize-y ${
            errors.details ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-brand-indigo'
          }`}
        />
        {errors.details && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.details}
          </p>
        )}
      </div>

      {/* Form Submit Action */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        icon={Send}
        className="w-full justify-center shadow-xl shadow-brand-indigo/30"
      >
        {isSubmitting ? "Submitting Inquiry..." : "Submit Project Inquiry"}
      </Button>

      <p className="text-[11px] text-slate-400 text-center">
        Direct technical intake. No spam or third-party data sharing.
      </p>
    </form>
  );
}
