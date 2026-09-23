import React from 'react';
import { 
  Layers, 
  Target, 
  Smartphone, 
  Clock, 
  Zap, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../../utils/constants';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  Layers,
  Target,
  Smartphone,
  Clock,
  Zap,
  MapPin
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 relative bg-dark-900/40 border-y border-slate-800/80">
      <Container>
        <SectionHeading
          badge="Why Partner With Us"
          badgeIcon={ShieldCheck}
          badgeVariant="indigo"
          title="Engineered for Real"
          highlightText="Business Value."
          subtitle="We are not a typical detached agency or beginner freelancers. We operate as an integrated technical & creative extension of your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const IconComponent = iconMap[prop.iconName] || CheckCircle2;

            return (
              <div
                key={idx}
                className="bg-dark-950/70 p-7 rounded-2xl border border-slate-800/90 hover:border-brand-indigo/40 hover:bg-dark-900/80 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-700/80 text-brand-blue flex items-center justify-center group-hover:scale-110 group-hover:border-brand-indigo/50 transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
                  {prop.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
