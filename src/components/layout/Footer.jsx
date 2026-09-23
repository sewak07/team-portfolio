import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Mail, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, GithubIcon } from '../common/SocialIcons';
import { BRAND, NAV_LINKS } from '../../utils/constants';
import { socialLinks, contactInfo } from '../../data/socialLinks';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 relative overflow-hidden pt-16 pb-12">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-indigo/10 blur-3xl pointer-events-none" />

      <Container>
        {/* Top Pre-Footer Call to Action Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-16 border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Ready to Upgrade Your Online Presence?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let's build something great together.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Websites, high-retention content, and strategic marketing designed to turn visitors into paying customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Start a Project
            </Button>
            <Button
              href={contactInfo.whatsAppUrl}
              target="_blank"
              variant="whatsapp"
              size="lg"
              icon={MessageSquare}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center font-bold text-lg text-white shadow-md shadow-brand-indigo/30">
                N
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">{BRAND.name}</span>
                <span className="block text-[10px] tracking-widest text-slate-400 font-mono">DIGITAL TEAM</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {BRAND.positioning}
            </p>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400 font-bold">WE BUILD. WE CREATE. WE GROW.</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 hover:bg-[#25D366]/20 text-slate-400 hover:text-[#25D366] border border-slate-800 hover:border-[#25D366]/40 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/skinny_uraw_nisan_ekka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 hover:bg-pink-500/20 text-slate-400 hover:text-pink-400 border border-slate-800 hover:border-pink-500/40 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sewak07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-9 h-9 rounded-lg bg-dark-900 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">E-Commerce Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">Social Media Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">Content & Reels Production</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">SEO & Local Google Search</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors">Hosting & Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-brand-blue transition-colors">About Our Team</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-blue transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-brand-blue transition-colors">Packages & Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="text-slate-300 font-medium">{contactInfo.email}</p>
              <p className="text-slate-300">{contactInfo.phone}</p>
              <p className="text-xs text-slate-500 pt-1">{contactInfo.hours}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Websites. Content. Marketing. Growth.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
