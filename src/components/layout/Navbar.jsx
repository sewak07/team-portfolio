import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../utils/constants';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-brand-indigo/30 group-hover:scale-105 transition-transform duration-300">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  {BRAND.name}
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-1 hidden sm:block">
                  DIGITAL TEAM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="shadow-md shadow-brand-indigo/20"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-2 sm:hidden"
              >
                Start
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-slate-200 hover:text-white border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
