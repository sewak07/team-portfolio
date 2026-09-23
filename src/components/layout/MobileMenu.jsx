import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ArrowRight, MessageSquare, Mail, Phone, ExternalLink } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../utils/constants';
import { contactInfo } from '../../data/socialLinks';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose }) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className="relative w-full max-w-sm sm:max-w-md bg-dark-900 border-l border-slate-800 shadow-2xl h-full flex flex-col justify-between overflow-y-auto overscroll-contain z-10 p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 flex-shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center font-bold text-white shadow-md shadow-brand-indigo/30">
              N
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-white">{BRAND.name}</span>
              <span className="block text-[10px] tracking-widest text-slate-400 font-mono">DIGITAL TEAM</span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="py-6 space-y-1.5 flex-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-indigo/15 text-brand-blue border border-brand-indigo/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}
        </nav>

        {/* Drawer Bottom Actions & Direct Channels */}
        <div className="pt-6 border-t border-slate-800 space-y-4 flex-shrink-0">
          <div className="space-y-2">
            <Button
              to="/contact"
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-lg shadow-brand-indigo/25"
              icon={ArrowRight}
            >
              Start a Project
            </Button>

            <a
              href={contactInfo.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-slate-400 space-y-1 text-center">
            <p className="font-medium text-slate-300">{BRAND.tagline}</p>
            <p className="text-[11px] text-slate-500">{contactInfo.responseWindow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
