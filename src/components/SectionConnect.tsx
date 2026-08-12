import React from 'react';
import { Calendar, Users, Linkedin, Sparkles, ArrowUpRight, ShieldCheck, Zap, TrendingUp, Building } from 'lucide-react';
import { CONNECT_LINKS } from '../data';

export const SectionConnect: React.FC = () => {
  return (
    <section id="connect" className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Soft Ambient Hero Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/90 shadow-xs text-xs font-semibold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-sky-700">
            Google Cloud Startup Team
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600">Founders & Venture Capital Hub</span>
        </div>
      </div>

      {/* Hero Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-heading text-4xl sm:text-6xl font-bold text-slate-800 tracking-tight leading-none mb-4">
          Ashley Nandan
        </h1>
        <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
          Google Cloud Startup Specialist partnering with <strong className="text-slate-800 font-semibold">tech founders, executives, and Venture Capital investors</strong> to navigate AI model strategy, technical due diligence, and secure up to <strong className="text-slate-800 font-semibold">$250,000 in GCP startup credits</strong>.
        </p>
      </div>

      {/* Main Glassmorphic Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Profile Card (5 Cols) */}
        <div className="lg:col-span-5 glass-card rounded-[28px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-100/80 border border-sky-200/80 p-2 shadow-xs flex items-center justify-center">
                <span className="font-heading font-extrabold text-sky-800 text-lg">AN</span>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200/80">
                GCP Startup Specialist
              </span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-slate-800 mb-2">
              Ashley Nandan
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Partnering with startup founders, tech leaders, and venture investors to simplify AI model strategy and scale Google Cloud infrastructure.
            </p>

            <div className="space-y-3 mb-6 text-xs text-slate-700">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Cloud Startup Program Specialist</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                <Zap className="w-4 h-4 text-sky-600 shrink-0" />
                <span>AI Strategy & Gemini Model Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                <Building className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Venture Capital & Portfolio Co-Investment</span>
              </div>
            </div>
          </div>

          <a
            href={CONNECT_LINKS.meetAshley}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold text-slate-900 bg-sky-200/90 hover:bg-sky-300 border border-sky-300 shadow-xs transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-800" />
            <span>Book Founder Office Hours</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </a>
        </div>

        {/* Right CTA Links Grid (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          
          <div className="text-left mb-1">
            <span className="text-xs font-bold tracking-wider text-sky-700 uppercase">
              Section 1: Connect
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 mt-1">
              Direct Access & Meeting Schedules
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Meetings are for <strong>founders, CEOs, CTOs, as well as Venture Capital (VC) investors</strong> seeking technical diligence, portfolio support, or cloud credit allocations.
            </p>
          </div>

          {/* CTA 1: Meet with Ashley */}
          <a
            href={CONNECT_LINKS.meetAshley}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-[24px] p-5 sm:p-6 flex items-center justify-between border-l-4 border-l-sky-500 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-200 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
                    Meet with Ashley
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">Founders & VC Investors</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Book a session for 1-on-1 strategy, VC portfolio reviews, model routing, or credit applications.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-600 group-hover:text-sky-600 group-hover:scale-110 transition-all shrink-0 ml-3">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

          {/* CTA 2: Meet with Ashley Nandan and Luis Sosa */}
          <a
            href={CONNECT_LINKS.meetAshleyAndLuis}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-[24px] p-5 sm:p-6 flex items-center justify-between border-l-4 border-l-sky-600 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 group-hover:bg-sky-200 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-bold text-slate-800 group-hover:text-sky-800 transition-colors">
                    Meet with Ashley Nandan and Luis Sosa
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">Office Hours</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Joint office hours for technical architecture reviews, VC partner alignment, and enterprise co-selling.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-600 group-hover:text-sky-700 group-hover:scale-110 transition-all shrink-0 ml-3">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

          {/* CTA 3: Connect on LinkedIn */}
          <a
            href={CONNECT_LINKS.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-[24px] p-5 sm:p-6 flex items-center justify-between border-l-4 border-l-blue-600 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    Connect on LinkedIn
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">LinkedIn</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Follow for Google Cloud startup announcements, AI model benchmarks, and founder events.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:scale-110 transition-all shrink-0 ml-3">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
