import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Code2, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import { projects } from '../data/projects';
import { contactInfo } from '../data/socialLinks';
import Container from '../components/common/Container';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import TechStack from '../components/projects/TechStack';
import MockupVisual from '../components/common/MockupVisual';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  usePageTitle(
    `${project.title} | Case Study`,
    project.shortDescription
  );

  return (
    <div className="pt-32 pb-24 space-y-16 sm:space-y-24">
      {/* Back to Projects Navigation */}
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </Container>

      {/* Project Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {project.industry}
              </span>
              <span className="text-slate-600">•</span>
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

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {project.shortDescription}
            </p>

            {/* Quick Metrics Bar */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-dark-900/80 p-3.5 rounded-xl border border-slate-800 text-center space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">{metric.label}</span>
                    <span className="text-sm sm:text-base font-bold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Primary Visual Showcase Mockup */}
      <section>
        <Container>
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 max-w-5xl mx-auto">
            {project.id === 'christian-ecommerce-store' && (
              <div className="space-y-8">
                <MockupVisual type="browser" projectKey="christian-store" title={project.title} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">WhatsApp Order Interaction</h4>
                    <MockupVisual type="mobile" projectKey="christian-store" />
                  </div>
                  <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">Admin Inventory & Catalog Portal</h4>
                    <MockupVisual type="dashboard" title="Admin Portal" />
                  </div>
                </div>
              </div>
            )}

            {project.id === 'mern-ecommerce-platform' && (
              <div className="space-y-8">
                <MockupVisual type="browser" projectKey="ecommerce" title={project.title} />
                <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">Real-Time Telemetry & Orders Dashboard</h4>
                  <MockupVisual type="dashboard" title="MERN Telemetry" />
                </div>
              </div>
            )}

            {project.id === 'gym-management-website' && (
              <div className="space-y-8">
                <MockupVisual type="browser" projectKey="gym" title={project.title} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Local SEO & Google Business Result</h4>
                    <MockupVisual type="google-seo" />
                  </div>
                  <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">Mobile Class Timetable</h4>
                    <MockupVisual type="mobile" />
                  </div>
                </div>
              </div>
            )}

            {project.id === 'social-media-content-suite' && (
              <div className="space-y-6">
                <div className="flex flex-wrap justify-center gap-6 py-4">
                  <MockupVisual type="social-reel" title="Reels Video Hook" />
                  <MockupVisual type="social-reel" title="Product Promotion" />
                  <MockupVisual type="social-reel" title="Behind the Scenes" className="hidden lg:flex" />
                </div>
              </div>
            )}

            {project.id === 'admin-dashboard-suite' && (
              <div className="space-y-6">
                <MockupVisual type="dashboard" title={project.title} />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Case Study Deep Dive: Challenge & Solution */}
      <section>
        <Container size="sm">
          <div className="space-y-12">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                Project Overview
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-950/20 p-6 rounded-2xl border border-rose-500/20 space-y-2">
                <h3 className="text-lg font-bold text-rose-300">The Challenge</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/20 space-y-2">
                <h3 className="text-lg font-bold text-emerald-300">Our Solution</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features Built */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">Key Features Implemented</h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Delivered & Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Services Delivered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-dark-900 border border-slate-800 text-slate-300">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Technologies Used
                </h4>
                <TechStack technologies={project.technologies} />
              </div>
            </div>

            {/* Outcome & Transparent Note */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
                Project Outcome & Performance
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.outcomeNote}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Bottom CTA */}
      <section>
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Build Your Solution?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Let's craft a website or digital system tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start a Similar Project
              </Button>
              <Button href={contactInfo.whatsAppUrl} target="_blank" variant="whatsapp" size="lg" icon={MessageSquare}>
                Discuss on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
