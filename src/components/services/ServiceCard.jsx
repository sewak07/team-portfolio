import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';

export default function ServiceCard({ service, onSelect }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group border border-slate-800">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={service.accentColor || 'indigo'} size="sm">
            {service.badge}
          </Badge>
          <span className="text-[10px] font-mono text-slate-500">{service.stats.metric}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          {service.shortDescription}
        </p>

        <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
          {service.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-800/80">
        <a
          href={`#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-sky-300 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
