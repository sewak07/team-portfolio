import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { contactInfo } from '../../data/socialLinks';

export default function PricingCard({ tier, onSelectTier }) {
  const isPopular = tier.popular;

  // Formatted WhatsApp redirect link prefilled with selected tier
  const whatsAppTierUrl = `https://wa.me/9779825933443?text=Hi%20Nexa%20Digital,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20(${encodeURIComponent(tier.price)})%20for%20my%20business.`;

  return (
    <div
      className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-b from-dark-850 via-dark-900 to-dark-950 border-2 border-brand-indigo/60 shadow-2xl shadow-brand-indigo/15 lg:-translate-y-2'
          : 'glass-card border border-slate-800'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-indigo to-brand-violet text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-brand-indigo/30 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recommended For Scaling</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Tier Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
              {tier.badge}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight">
            {tier.name}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {tier.tagline}
          </p>
        </div>

        {/* Pricing tag */}
        <div className="pt-4 pb-4 border-y border-slate-800/80 space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {tier.price}
            </span>
          </div>
          <span className="text-xs text-slate-400 block font-normal">
            {tier.priceSubtext}
          </span>
        </div>

        {/* Highlight features */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
            What's Included:
          </span>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-8 mt-8 border-t border-slate-800/80 space-y-3">
        <Button
          to={`/contact?package=${tier.id}`}
          variant={isPopular ? 'primary' : 'secondary'}
          size="lg"
          icon={ArrowRight}
          className="w-full justify-center"
        >
          {tier.ctaText}
        </Button>

        <a
          href={whatsAppTierUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-semibold border border-[#25D366]/25 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Quick Inquiry on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
