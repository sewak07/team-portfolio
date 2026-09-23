import React from 'react';
import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Client Collaboration"
          badgeIcon={MessageSquare}
          badgeVariant="blue"
          title="What Partners Say"
          highlightText="About Our Work."
          subtitle="Direct feedback from the businesses and demo projects we've built digital systems for."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-2xl p-7 border border-slate-800 flex flex-col justify-between relative space-y-6"
            >
              {/* Top Quote & Rating */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.isPlaceholder ? (
                    <Badge variant="concept" size="sm">
                      Demo Template
                    </Badge>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Feedback
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 text-slate-700/60" />

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Project info */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white">{review.author}</h4>
                <p className="text-xs text-slate-400">{review.role} • {review.company}</p>
                <span className="inline-block mt-2 text-[11px] font-mono text-brand-blue bg-brand-indigo/10 px-2.5 py-0.5 rounded border border-brand-indigo/20">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
