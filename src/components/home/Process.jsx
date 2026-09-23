import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORK_PROCESS } from '../../utils/constants';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Process() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Our Proven Methodology"
          badgeIcon={Compass}
          badgeVariant="indigo"
          title="How We"
          highlightText="Work."
          subtitle="A structured, transparent six-step lifecycle that takes your project from initial vision to launch and ongoing audience growth."
        />

        {/* Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {WORK_PROCESS.map((item, index) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl p-7 border border-slate-800/80 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Step number watermark */}
              <div className="absolute -top-3 -right-2 text-6xl font-black font-mono text-slate-800/20 group-hover:text-brand-indigo/15 transition-colors select-none">
                {item.step}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 text-brand-blue font-mono font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">Phase {index + 1} of 6</span>
                <span className="w-2 h-2 rounded-full bg-brand-indigo opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
