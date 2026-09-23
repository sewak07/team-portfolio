import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import MockupVisual from '../common/MockupVisual';

export default function ProjectCard({ project }) {
  const getMockupKey = (id) => {
    if (id.includes('christian')) return 'christian-store';
    if (id.includes('mern') || id.includes('ecommerce')) return 'ecommerce';
    if (id.includes('gym')) return 'gym';
    return null;
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group transition-all duration-300">
      {/* Top Media / Mockup Area */}
      <div className="p-6 sm:p-7 bg-gradient-to-b from-dark-950 to-dark-900/60 border-b border-slate-800/80">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            {project.industry}
          </span>
          <Badge
            variant={
              project.statusType === 'Client Project'
                ? 'client'
                : project.statusType === 'Demo Showcase'
                ? 'demo'
                : 'concept'
            }
            size="sm"
          >
            {project.statusType}
          </Badge>
        </div>

        {/* Mockup visual rendering */}
        <div className="py-2 transform group-hover:scale-[1.02] transition-transform duration-500">
          {project.id === 'christian-ecommerce-store' && (
            <MockupVisual type="browser" projectKey="christian-store" title={project.title} />
          )}
          {project.id === 'mern-ecommerce-platform' && (
            <MockupVisual type="browser" projectKey="ecommerce" title={project.title} />
          )}
          {project.id === 'gym-management-website' && (
            <MockupVisual type="browser" projectKey="gym" title={project.title} />
          )}
          {project.id === 'social-media-content-suite' && (
            <div className="flex justify-center gap-3">
              <MockupVisual type="social-reel" title="Reels Hook" />
              <MockupVisual type="social-reel" title="Ad Motion" className="hidden sm:flex" />
            </div>
          )}
          {project.id === 'admin-dashboard-suite' && (
            <MockupVisual type="dashboard" title={project.title} />
          )}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Services Delivered */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
              Deliverables:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.services.slice(0, 4).map((service, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-dark-950 border border-slate-800 text-slate-300"
                >
                  {service}
                </span>
              ))}
              {project.services.length > 4 && (
                <span className="text-[11px] px-2 py-1 rounded-md bg-dark-950 border border-slate-800 text-slate-400">
                  +{project.services.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer info: Tech stack and Case Study Link */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-indigo/10 text-brand-blue border border-brand-indigo/20">
                {tech}
              </span>
            ))}
          </div>

          <Button
            to={`/projects/${project.id}`}
            variant="primary"
            size="sm"
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            View Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
