import React from 'react';
import { MessageSquare, Mail, Phone, Clock, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../../data/socialLinks';
import Button from '../common/Button';

export default function ContactInfo() {
  return (
    <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-8">
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
          Direct Communications
        </span>
        <h3 className="text-2xl font-bold text-white">
          Reach Us Directly
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Need a fast response? Tap our WhatsApp line or send us your scope details. We review all inquiries promptly.
        </p>
      </div>

      {/* WhatsApp Feature Box */}
      <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Direct WhatsApp Line</h4>
            <span className="text-xs text-emerald-400 font-medium">{contactInfo.responseWindow}</span>
          </div>
        </div>

        <p className="text-xs text-slate-300">
          Chat directly with our lead engineer and designer for quick project estimates.
        </p>

        <a
          href={contactInfo.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-dark-950 font-bold text-xs transition-colors shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Open WhatsApp Chat</span>
        </a>
      </div>

      {/* Contact Channels List */}
      <div className="space-y-4 text-sm">
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-slate-800">
          <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs text-slate-400 block">Official Inquiries</span>
            <a href={`mailto:${contactInfo.email}`} className="font-semibold text-white hover:text-brand-blue transition-colors">
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-slate-800">
          <Phone className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs text-slate-400 block">Phone Support</span>
            <span className="font-semibold text-white">{contactInfo.phone}</span>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dark-950 border border-slate-800">
          <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs text-slate-400 block">Working Hours</span>
            <span className="text-slate-300">{contactInfo.hours}</span>
          </div>
        </div>
      </div>

      {/* Trust & Guarantee Pill */}
      <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          <span>No Spam • Direct Technical Consultation</span>
        </div>
        <p className="text-[11px] text-slate-400">
          We respect your privacy and will never share your business details.
        </p>
      </div>
    </div>
  );
}
