import React from 'react';
import { STATS } from '../../utils/constants';
import Container from '../common/Container';

export default function Stats() {
  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-dark-900/50 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient-accent">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 font-normal max-w-[200px]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
