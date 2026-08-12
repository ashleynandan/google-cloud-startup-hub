import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { CONNECT_LINKS } from '../data';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-3xl transition-all duration-300 ${
          scrolled 
            ? 'glass-card shadow-lg shadow-sky-100/60 bg-white/85 py-3 px-5 sm:px-6' 
            : 'bg-white/60 backdrop-blur-md border border-white/80 py-4 px-5 sm:px-6 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#connect" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-sky-100/80 border border-sky-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-heading font-extrabold text-sky-800 text-sm">AN</span>
            </div>
            <div>
              <span className="font-heading font-bold text-slate-800 text-base sm:text-lg block leading-snug group-hover:text-sky-600 transition-colors">
                Ashley Nandan
              </span>
              <span className="text-xs text-slate-500 block -mt-1 font-medium">
                Google Cloud
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm text-slate-600 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
            <a 
              href="#connect" 
              className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-sky-50 transition-colors"
            >
              Connect
            </a>
            <a 
              href="#updates" 
              className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-sky-50 transition-colors"
            >
              Updates
            </a>
            <a 
              href="#credits" 
              className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-sky-50 transition-colors"
            >
              Credits
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={CONNECT_LINKS.meetAshley}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold text-slate-900 bg-sky-200/80 hover:bg-sky-300/80 border border-sky-300/80 shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-800" />
              <span>Meet with Ashley</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl text-slate-600 hover:bg-slate-100/80 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-slate-100 mt-3 flex flex-col gap-2">
            <a 
              href="#connect" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-slate-700 hover:bg-sky-50 font-medium text-sm"
            >
              Connect with Ashley
            </a>
            <a 
              href="#updates" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-slate-700 hover:bg-sky-50 font-medium text-sm"
            >
              Google Cloud Updates
            </a>
            <a 
              href="#credits" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-slate-700 hover:bg-sky-50 font-medium text-sm"
            >
              Credits & Checklist
            </a>
            <div className="pt-2">
              <a
                href={CONNECT_LINKS.meetAshley}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-900 bg-sky-200"
              >
                <Calendar className="w-4 h-4 text-sky-800" />
                <span>Meet with Ashley</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
