import React from 'react';
import { 
  Code2, 
  Share2, 
  Video, 
  Search, 
  Megaphone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const iconMap = {
  Code2,
  Share2,
  Video,
  Search,
  Megaphone,
  ShieldCheck
};

export default function ServiceCategory({ service, index }) {
  const IconComponent = iconMap[service.iconName] || Code2;
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.id}
      className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden transition-all duration-300"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Header & Overview (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-slate-700 text-brand-blue flex items-center justify-center shadow-lg shadow-black/50">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <Badge variant={service.accentColor || 'indigo'} size="sm">
                {service.badge}
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-300 text-base leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Standard Metric Target:</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-gradient-accent">{service.stats.metric}</span>
              <span className="text-xs text-slate-300 font-medium">{service.stats.label}</span>
            </div>
          </div>

          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            Inquire About {service.title}
          </Button>
        </div>

        {/* Features & Concrete Deliverables (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-dark-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
          {/* Features Included */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Core Offerings
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables Handoff */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Deliverables
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
