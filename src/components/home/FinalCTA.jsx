import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../../data/socialLinks';
import Container from '../common/Container';
import Button from '../common/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 border-t border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="glass-panel max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 border border-slate-700/80 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle top ambient line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent" />

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-800/90 border border-slate-700/80 px-3.5 py-1 rounded-full text-xs text-brand-blue font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Discuss Your Project</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Ready to Upgrade Your <br className="hidden sm:inline" />
              <span className="text-gradient-accent">Digital Footprint?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a high-converting business website, custom web application, or full monthly social media management, our team is ready to build it.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto shadow-xl shadow-brand-indigo/30"
            >
              Start a Project Form
            </Button>

            <Button
              href={contactInfo.whatsAppUrl}
              target="_blank"
              variant="whatsapp"
              size="lg"
              icon={MessageSquare}
              className="w-full sm:w-auto"
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Fast WhatsApp Response
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full Ownership Handover
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
