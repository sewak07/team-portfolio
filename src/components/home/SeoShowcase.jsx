import React from 'react';
import { Search, MapPin, Star, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight, BarChart3 } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import MockupVisual from '../common/MockupVisual';

export default function SeoShowcase() {
  const seoPillars = [
    {
      title: "Google Business Profile Optimization",
      desc: "Complete setup with verified categories, opening hours, local imagery, and service listings for maximum map visibility.",
      icon: MapPin
    },
    {
      title: "Local Map Pack & Search Discovery",
      desc: "Optimizing your business data so local customers searching nearby find your phone number, address, and website instantly.",
      icon: Search
    },
    {
      title: "Ethical Review Generation Strategy",
      desc: "Simple, automated review request workflows to help collect genuine 5-star customer feedback on your Google listing.",
      icon: Star
    },
    {
      title: "Technical On-Page & Speed SEO",
      desc: "Fast Core Web Vitals, semantic schema markup, clean meta tags, and structured heading hierarchies that search crawlers reward.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-dark-900/40 border-y border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column: Google Business Profile Mockup */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Search Result Experience
            </div>
            <MockupVisual type="google-seo" />

            <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300">Honest Performance Philosophy:</span>
              <p>
                We do not promise unrealistic "#1 overnight rankings". Instead, we systematically optimize your website and local Google presence to improve organic search visibility and make it easier for genuine customers to find and trust your business.
              </p>
            </div>
          </div>

          {/* Right Text Column: Features & Offerings */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Search & Local Discovery"
              badgeIcon={Search}
              badgeVariant="emerald"
              align="left"
              title="Help Customers Find"
              highlightText="Your Business."
              subtitle="When people search for your services online or nearby on Google Maps, ensure your business stands out with verified details, great reviews, and fast loading pages."
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seoPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-dark-950/70 p-4 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                to="/services"
                variant="emerald"
                size="md"
                icon={ArrowRight}
              >
                Learn About Our SEO Process
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
