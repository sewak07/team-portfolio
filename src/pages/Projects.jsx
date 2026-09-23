import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { Sparkles, ArrowRight, Layers, MessageSquare } from 'lucide-react';
import { projects } from '../data/projects';
import { contactInfo } from '../data/socialLinks';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import Button from '../components/common/Button';

export default function Projects() {
  usePageTitle(
    "Featured Projects & Case Studies",
    "Explore our portfolio of custom websites, MERN e-commerce platforms, gym management portals, social media content, and admin applications."
  );

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Websites', 'E-Commerce', 'Web Apps', 'Content'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'Websites' && p.category === 'Websites'));

  return (
    <div className="pt-32 pb-24 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-brand-indigo/30 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Engineered Solutions Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Work We've <br />
              <span className="text-gradient-accent">Built & Delivered.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our real client engagements, scalable MERN architectures, and creative content campaigns. Every project is built for conversion and long-term durability.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Showcase with Filter */}
      <section>
        <Container>
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section>
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want a Solution Like These for Your Business?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              We can tailor an e-commerce platform, booking system, or promotional content package to match your precise workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start Your Project
              </Button>
              <Button href={contactInfo.whatsAppUrl} target="_blank" variant="whatsapp" size="lg" icon={MessageSquare}>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
