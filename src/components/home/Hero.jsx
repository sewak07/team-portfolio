import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, CheckCircle, Code2, Video, Search, Share2, Megaphone } from 'lucide-react';
import { BRAND } from '../../utils/constants';
import { contactInfo } from '../../data/socialLinks';
import Container from '../common/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';
import MockupVisual from '../common/MockupVisual';

export default function Hero() {
  const servicePills = [
    { label: "WEB DEVELOPMENT", icon: Code2, color: "indigo" },
    { label: "SOCIAL MEDIA", icon: Share2, color: "blue" },
    { label: "CONTENT & REELS", icon: Video, color: "violet" },
    { label: "LOCAL SEO", icon: Search, color: "emerald" },
    { label: "DIGITAL MARKETING", icon: Megaphone, color: "blue" },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 bg-dark-900/90 border border-brand-indigo/30 px-3.5 py-1.5 rounded-full text-xs text-slate-300 shadow-lg shadow-indigo-950/40">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-slate-200">Modern Digital Growth Team</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-blue font-medium hidden sm:inline">Websites • Content • Ads</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase">
                WE BUILD.<br />
                <span className="text-gradient-accent">WE CREATE.</span><br />
                WE GROW.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help businesses build a powerful digital presence through high-converting websites, creative content, social media management and local search marketing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-xl shadow-brand-indigo/30"
              >
                Start a Project
              </Button>

              <Button
                to="/projects"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>

            {/* Service Tags Pill Strip */}
            <div className="pt-4 sm:pt-6 border-t border-slate-800/80">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3 text-center lg:text-left">
                Complete Digital Capabilities
              </span>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {servicePills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-900/80 border border-slate-800 text-[11px] font-semibold text-slate-300 font-mono tracking-wide hover:border-slate-700 transition-colors"
                  >
                    <pill.icon className="w-3 h-3 text-brand-blue" />
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Web, Mobile & SEO Mockups */}
          <div className="lg:col-span-6 relative">
            <MockupVisual type="hero-composition" />
          </div>
        </div>
      </Container>
    </section>
  );
}
