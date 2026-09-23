import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SocialMediaShowcase from '../components/home/SocialMediaShowcase';
import SeoShowcase from '../components/home/SeoShowcase';
import Process from '../components/home/Process';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  usePageTitle(
    "WE BUILD. WE CREATE. WE GROW. | Modern Digital Team",
    "We help businesses establish and scale their online presence through custom websites, e-commerce, content production, reels, SEO, and paid digital marketing."
  );

  return (
    <div className="space-y-0">
      <Hero />
      <Stats />
      <ServicesPreview />
      <FeaturedProjects />
      <SocialMediaShowcase />
      <SeoShowcase />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
