import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { MessageSquare, Sparkles, Send, ShieldCheck } from 'lucide-react';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  usePageTitle(
    "Contact Us | Start a Project",
    "Have a project in mind? Tell us what you're building. We'll help you figure out the next step with straightforward technical advice."
  );

  return (
    <div className="pt-32 pb-24 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-brand-indigo/30 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Project Inquiries & Consultation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Have a Project <br />
              <span className="text-gradient-accent">in Mind?</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tell us what you're building. We'll help you figure out the next step with actionable technical guidance and honest pricing.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Interactive Form & Direct Channels Info */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Info & WhatsApp Column (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
