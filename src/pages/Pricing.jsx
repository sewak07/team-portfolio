import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { CreditCard, CheckCircle2, HelpCircle, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { pricingTiers, pricingFaqs } from '../data/pricing';
import { contactInfo } from '../data/socialLinks';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import PricingCard from '../components/pricing/PricingCard';
import Button from '../components/common/Button';

export default function Pricing() {
  usePageTitle(
    "Packages & Pricing",
    "Transparent digital packages from Starter websites starting at Rs. 15,000 to custom business web applications and all-in-one monthly growth retainers."
  );

  return (
    <div className="pt-32 pb-24 space-y-20 sm:space-y-28">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-brand-indigo/30 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-md">
              <CreditCard className="w-3.5 h-3.5 text-brand-blue" />
              <span>Transparent & Realistic Packages</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Simple, Honest <br />
              <span className="text-gradient-accent">Pricing & Packages.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              No hidden fees, no unnecessary bloat. Choose a starter package to get online quickly, or request a custom scope tailored to your exact operational requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing FAQs */}
      <section className="bg-dark-900/40 py-20 border-y border-slate-800/80">
        <Container size="sm">
          <SectionHeading
            badge="Common Questions"
            badgeIcon={HelpCircle}
            badgeVariant="indigo"
            title="Frequently Asked"
            highlightText="Questions."
            subtitle="Everything you need to know about our billing, milestones, and project ownership."
          />

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-dark-950/80 p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
              >
                <h4 className="text-base font-bold text-white flex items-start gap-2">
                  <span className="text-brand-blue font-mono text-sm mt-0.5">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Custom Quote CTA */}
      <section>
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Feature Scope or Retainer?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Share your project requirements with us and we'll provide a breakdown of deliverables, timeline, and exact cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Request Itemized Quote
              </Button>
              <Button href={contactInfo.whatsAppUrl} target="_blank" variant="whatsapp" size="lg" icon={MessageSquare}>
                WhatsApp Project Chat
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
