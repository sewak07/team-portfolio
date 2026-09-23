import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Code2, 
  HeartHandshake 
} from 'lucide-react';
import { BRAND } from '../utils/constants';
import { teamMembers } from '../data/team';
import { contactInfo } from '../data/socialLinks';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import TeamCard from '../components/team/TeamCard';
import Button from '../components/common/Button';

export default function About() {
  usePageTitle(
    "About Us | Modern Digital Growth Team",
    "Learn about our team, our philosophy, engineering standards, and how we help businesses build and scale their digital footprint."
  );

  return (
    <div className="pt-32 pb-24 space-y-20 sm:space-y-28">
      {/* Hero / Who We Are */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-brand-indigo/30 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-md">
              <Users className="w-3.5 h-3.5 text-brand-blue" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              A Dedicated Digital Partner <br />
              <span className="text-gradient-accent">For Modern Businesses.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are a close-knit digital team combining full-stack software development, commercial content production, and local search marketing to help growing businesses win online.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy / What We Do & Our Approach */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-brand-blue flex items-center justify-center border border-indigo-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">What We Do</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We design and build fast websites, manage high-engagement social media profiles, produce 9:16 short-form reels, and configure local Google Business presence for long-term customer discovery.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Approach</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in straightforward communication, honest scopes, and clean code. No bloated agency retainers or abandoned template hacks. We build systems you actually own and understand.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To give ambitious businesses the exact same digital firepower, conversion-focused design, and visual polish previously reserved only for multi-million dollar corporations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-dark-900/30 py-20 border-y border-slate-800/80">
        <Container>
          <SectionHeading
            badge="The Team"
            badgeIcon={Users}
            badgeVariant="indigo"
            title="Meet the Minds Behind"
            highlightText="Your Digital Growth."
            subtitle="Engineers, designers, content creators, and growth strategists dedicated to delivering high standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Skills Matrix / Capabilities Summary */}
      <section>
        <Container size="sm">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">
              Our Core Technical & Creative Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-brand-blue uppercase font-bold">Frontend</span>
                <p className="text-xs text-slate-300">React, Vite, Tailwind CSS, Next.js</p>
              </div>
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-indigo-400 uppercase font-bold">Backend</span>
                <p className="text-xs text-slate-300">Node.js, Express, MongoDB, REST</p>
              </div>
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-purple-400 uppercase font-bold">Creative</span>
                <p className="text-xs text-slate-300">Premiere Pro, After Effects, Figma</p>
              </div>
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Marketing</span>
                <p className="text-xs text-slate-300">Google GBP, Meta Ads, GA4, SEO</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Bottom CTA */}
      <section>
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Work with Our Team?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              We are currently accepting new client projects. Let's talk about what you are building.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Conversation
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
