import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Share2, 
  Video, 
  Search, 
  Megaphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { serviceCategories } from '../../data/services';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';

// Helper icon map
const iconMap = {
  Code2,
  Share2,
  Video,
  Search,
  Megaphone,
  ShieldCheck
};

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Integrated Capabilities"
          badgeIcon={Layers}
          badgeVariant="indigo"
          title="Everything Your Business Needs"
          highlightText="Under One Roof."
          subtitle="From building high-converting websites to producing attention-grabbing content and running paid campaigns, we provide the complete digital suite."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group border border-slate-800 relative overflow-hidden"
              >
                {/* Accent Top Line Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-indigo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-dark-800 border border-slate-700/80 text-brand-blue flex items-center justify-center group-hover:scale-110 group-hover:border-brand-indigo/50 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant={service.accentColor || 'indigo'} size="sm">
                      {service.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Highlight Features list */}
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {service.stats.metric} • {service.stats.label}
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-14 text-center">
          <Button
            to="/services"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
          >
            Explore Detailed Service Deliverables
          </Button>
        </div>
      </Container>
    </section>
  );
}
