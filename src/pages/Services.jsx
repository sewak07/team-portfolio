import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { Layers, ArrowRight, MessageSquare, CheckCircle2, HelpCircle } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { contactInfo } from '../data/socialLinks';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCategory from '../components/services/ServiceCategory';
import Button from '../components/common/Button';

export default function Services() {
  usePageTitle(
    "Digital Services & Solutions",
    "Comprehensive digital capabilities: Custom Web Development, Social Media Management, Video & Reels Production, Local SEO, and Meta Paid Advertising."
  );

  return (
    <div className="pt-32 pb-24 space-y-20 sm:space-y-28">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-brand-indigo/30 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-md">
              <Layers className="w-3.5 h-3.5 text-brand-blue" />
              <span>Full-Spectrum Digital Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Services Built to <br />
              <span className="text-gradient-accent">Grow Your Business.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We eliminate the chaos of juggling separate developers, designers, and video editors. Our team provides an integrated solution under one roof.
            </p>
          </div>
        </Container>
      </section>

      {/* Detailed Service Categories List */}
      <section>
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {serviceCategories.map((service, index) => (
              <ServiceCategory
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Accordion / Quick Help */}
      <section className="bg-dark-900/40 py-20 border-y border-slate-800/80">
        <Container>
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeIcon={HelpCircle}
            badgeVariant="indigo"
            title="Questions About Our"
            highlightText="Services."
            subtitle="Common questions business owners ask before starting a collaboration with us."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-950/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">Can I hire you for just web development?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Yes. You can engage us specifically for website development, or combine it with ongoing monthly social media and SEO support as your business expands.
              </p>
            </div>

            <div className="bg-dark-950/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">How do we shoot videos if we are in another location?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We provide clear video capture guidelines and shot lists for your team to record on modern smartphones, and we handle high-end post-production, motion graphics, color grading, and audio mastering.
              </p>
            </div>

            <div className="bg-dark-950/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">Do you handle domain registration and hosting?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Yes. We handle end-to-end domain connection, DNS setup, high-speed cloud hosting, and SSL certificates so you don't need to navigate complex technical server panels.
              </p>
            </div>

            <div className="bg-dark-950/80 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">What happens after my website is launched?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We provide full handoff training, administrative access, and ongoing maintenance coverage so your system remains secure, fast, and updated.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Bottom CTA */}
      <section>
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Custom Project in Mind?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Tell us your business requirements and we'll advise on the best technical and creative roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Request Proposal
              </Button>
              <Button href={contactInfo.whatsAppUrl} target="_blank" variant="whatsapp" size="lg" icon={MessageSquare}>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
