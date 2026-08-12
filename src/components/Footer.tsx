import React from 'react';
import { Calendar, Linkedin, ExternalLink } from 'lucide-react';
import { CONNECT_LINKS } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-sky-100/80 bg-white/50 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-100/80 border border-sky-200 flex items-center justify-center shadow-xs">
            <span className="font-heading font-extrabold text-sky-800 text-xs">AN</span>
          </div>
          <div>
            <span className="font-heading font-bold text-slate-800 text-base block">
              Ashley Nandan
            </span>
            <span className="text-xs text-slate-500 block">
              Google Cloud Startup Team
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-slate-600">
          <a
            href={CONNECT_LINKS.meetAshley}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-700 transition-colors flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Meet Ashley</span>
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={CONNECT_LINKS.meetAshleyAndLuis}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800 transition-colors"
          >
            Joint Office Hours
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={CONNECT_LINKS.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={CONNECT_LINKS.applyCredits}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 transition-colors font-bold text-sky-700"
          >
            Apply for Credits
          </a>
        </div>

        {/* Right Copyright & Tagline */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end gap-1">
            Built for Startup Founders, Executives & VC Investors
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Google Cloud & DeepMind AI Model Matrix
          </p>
        </div>

      </div>
    </footer>
  );
};
