import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { projects } from '../../data/projects';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import MockupVisual from '../common/MockupVisual';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Websites', 'E-Commerce', 'Web Apps', 'Content'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'Websites' && p.category === 'Websites'));

  return (
    <section className="py-20 sm:py-28 relative bg-dark-900/30 border-y border-slate-800/80">
      <Container>
        <SectionHeading
          badge="Featured Portfolio"
          badgeIcon={Sparkles}
          badgeVariant="blue"
          title="Work We've"
          highlightText="Engineered."
          subtitle="Real projects, real solutions. Designed for performance, scalability, and measurable business growth."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-950/60 border border-indigo-500/40'
                  : 'bg-dark-800/80 text-slate-400 hover:text-white hover:bg-dark-700 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group"
            >
              {/* Card Visual Preview Area */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-dark-950/90 to-dark-900/60 border-b border-slate-800/80 relative">
                {/* Status Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
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

                {/* Rich Mockup Rendering based on project */}
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
                    <div className="flex justify-center gap-4">
                      <MockupVisual type="social-reel" title="Reels Hook" />
                      <MockupVisual type="social-reel" title="Product Ad" className="hidden sm:flex" />
                    </div>
                  )}
                  {project.id === 'admin-dashboard-suite' && (
                    <MockupVisual type="dashboard" title={project.title} />
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Services delivered pill tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 4).map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-dark-950/80 border border-slate-800 text-slate-300 font-medium"
                        >
                          {srv}
                        </span>
                      ))}
                      {project.services.length > 4 && (
                        <span className="text-[11px] px-2 py-1 rounded-md bg-dark-950/80 border border-slate-800 text-slate-400">
                          +{project.services.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech Stack & CTA */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-indigo/10 text-brand-blue border border-brand-indigo/20">
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
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <Button
            to="/projects"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
          >
            View All Project Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
