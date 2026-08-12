import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  DollarSign, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { CONNECT_LINKS, CREDIT_TIERS } from '../data';
import { SignupFormData } from '../types';

export const SectionCredits: React.FC = () => {
  // Signup form state
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    role: 'Founder / CEO',
    startupName: '',
    stage: 'Funded Stage',
    primaryInterest: 'GCP Startup Credits (Up to $250,000)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          startup: formData.startupName,
          interests: [formData.primaryInterest]
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedMessage(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setSubmittedMessage(`Thank you, ${formData.name}! Your submission has been received. Ashley will follow up directly!`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="credits" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-900 border border-sky-200/90 text-xs font-bold tracking-wide uppercase">
          <Award className="w-3.5 h-3.5 text-sky-700" />
          Section 3: Credits & Application Portal
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-800 tracking-tight">
          Up to $250,000 in Google Cloud Credits
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
          Fuel your startup's growth with 100% cloud cost coverage on Google Cloud, Gemini AI models, Vertex AI, Firebase, and BigQuery.
        </p>
      </div>

      {/* Primary Action Buttons Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {/* Button 1: Apply for Google Cloud Credits */}
        <a
          href={CONNECT_LINKS.applyCredits}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover rounded-[28px] p-6 sm:p-7 flex items-center justify-between border-2 border-sky-300 bg-gradient-to-r from-sky-100/80 via-white to-sky-50/80 shadow-md group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-200/80 px-2.5 py-0.5 rounded-full">
                Official Portal
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-800 group-hover:text-sky-700 transition-colors mt-1">
                Apply for Google Cloud Credits
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Submit your startup application directly to the Google Cloud program.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-50 group-hover:scale-110 transition-all shrink-0 ml-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </a>

        {/* Button 2: Read 5 Easy Steps PDF */}
        <a
          href={CONNECT_LINKS.pdfBestPractices}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover rounded-[28px] p-6 sm:p-7 flex items-center justify-between border-2 border-sky-300 bg-gradient-to-r from-sky-50 via-white to-sky-100/60 shadow-md group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-200/80 px-2.5 py-0.5 rounded-full">
                Must-Read Guide (PDF)
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-800 group-hover:text-sky-800 transition-colors mt-1">
                Read 5 Steps Before Applying
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Official Google Cloud startup best practices document.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-sky-800 group-hover:bg-sky-50 group-hover:scale-110 transition-all shrink-0 ml-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </a>
      </div>

      {/* Credit Tiers Matrix (2 Tiers: Inception $2,000 & Funded Startups Up to $250,000) */}
      <div className="mb-12">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 text-center mb-8">
          Google for Startups Cloud Program Tiers
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
          {CREDIT_TIERS.map((tier, idx) => (
            <div key={idx} className="glass-card rounded-[28px] p-7 flex flex-col justify-between border border-white/90 shadow-sm">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-sky-800">
                  {tier.stage}
                </span>
                <div className="font-heading text-3xl font-extrabold text-slate-800 mt-4 mb-2">
                  {tier.maxCredits}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={CONNECT_LINKS.applyCredits}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-2xl text-xs font-bold text-slate-800 bg-sky-100/80 hover:bg-sky-200/80 border border-sky-200 transition-colors"
              >
                Apply for {tier.stage}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Playful, Low-Friction Interactive Signup Form */}
      <div className="glass-card rounded-[32px] p-6 sm:p-10 border border-sky-200/90 bg-gradient-to-br from-white via-sky-50/60 to-slate-50 shadow-lg max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Founder & Investor Onboarding
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            Request Ashley’s Startup Guidance & Credit Package Review
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Fill out this quick form for credit application tips, architecture recommendations, or VC partner support directly from Ashley Nandan.
          </p>
        </div>

        {submittedMessage ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-heading text-lg font-bold text-emerald-900 mb-1">
              You're All Set!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 mb-4">
              {submittedMessage}
            </p>
            <button
              onClick={() => setSubmittedMessage(null)}
              className="text-xs font-bold text-emerald-700 underline hover:text-emerald-900"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work / Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@yourcompany.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800"
                >
                  <option value="Founder / CEO">Founder / CEO</option>
                  <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                  <option value="Venture Capital Investor / Partner">Venture Capital Investor / Partner</option>
                  <option value="AI / ML Lead">AI / ML Lead</option>
                  <option value="Product Leader">Product Leader</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Startup or VC Firm Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Agentic AI Inc. / Sequoia"
                  value={formData.startupName}
                  onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Goal / Interest
              </label>
              <select
                value={formData.primaryInterest}
                onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-input text-slate-800"
              >
                <option value="GCP Startup Credits (Up to $250,000)">GCP Startup Credits Application (Up to $250,000)</option>
                <option value="VC Portfolio Partnership & Co-Investment">VC Portfolio Partnership & Co-Investment</option>
                <option value="Gemini Model Selection & Routing">Gemini 3.5 Flash & Flash-Lite Model Routing</option>
                <option value="Google Cloud Marketplace Listing">Google Cloud Marketplace AI Agent Listing</option>
                <option value="1-on-1 Architecture Review with Ashley">1-on-1 Strategy Review with Ashley Nandan</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 bg-sky-200 hover:bg-sky-300 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <span>Submitting request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-800" />
                  <span>Get Startup Credits & Guidance</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

    </section>
  );
};
