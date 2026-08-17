import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  RotateCw, 
  SquareArrowOutUpRight, 
  Dumbbell, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen,
  Store,
  Compass,
  ShieldCheck,
  DollarSign,
  CalendarClock,
  ArrowUpRight,
  Sliders,
  BellRing,
  AlertCircle,
  TableProperties
} from 'lucide-react';
import { CONNECT_LINKS, MODEL_CATEGORIES, INITIAL_BLOG_UPDATES, MODEL_STRENGTHS_MATRIX, GOVERNANCE_RESOURCES } from '../data';
import { BlogUpdate } from '../types';

export const SectionGcpUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<BlogUpdate[]>(INITIAL_BLOG_UPDATES);
  const [loading, setLoading] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState<'agents' | 'coding' | 'reasoning' | 'regulated'>('agents');

  useEffect(() => {
    fetch('/api/blog-updates')
      .then(res => res.json())
      .then(data => {
        if (data && data.updates && data.updates.length > 0) {
          setUpdates(data.updates);
        }
      })
      .catch(() => {
        // Static mode or offline: smoothly retain INITIAL_BLOG_UPDATES
      });
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-7 h-7 text-emerald-600" />;
      case 'RotateCw': return <RotateCw className="w-7 h-7 text-amber-600" />;
      case 'SquareArrowOutUpRight': return <SquareArrowOutUpRight className="w-7 h-7 text-sky-600" />;
      case 'Dumbbell': return <Dumbbell className="w-7 h-7 text-lime-600" />;
      default: return <Sparkles className="w-7 h-7 text-sky-600" />;
    }
  };

  const getGovernanceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-sky-600" />;
      case 'CalendarClock': return <CalendarClock className="w-6 h-6 text-rose-600" />;
      default: return <AlertCircle className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="updates" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-900 border border-sky-200/90 text-xs font-bold tracking-wide uppercase">
          <BookOpen className="w-3.5 h-3.5 text-sky-700" />
          Section 2: Understanding Google Cloud AI Strategy
        </span>
      </div>

      {/* Main Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
          Understanding Google Cloud AI Strategy
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
          If you feel overwhelmed by the constant stream of new AI models and rapid version updates, you are not alone. The pace of development is intense, but you do not need to memorize every version and release to work effectively.
        </p>
        <p className="text-slate-700 font-medium text-sm sm:text-base mt-3 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-xs">
          DeepMind has simplified this complexity by organizing our entire portfolio around four distinct model categories. Once you understand this framework, you can easily determine where any new release fits and how to use it.
        </p>
      </div>

      {/* 4 Model Categories Matrix Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {MODEL_CATEGORIES.map((category) => (
          <div 
            key={category.id} 
            className={`glass-card glass-card-hover rounded-[24px] p-5 flex flex-col justify-between border ${category.colorScheme.borderColor} relative overflow-hidden group`}
          >
            {/* Soft Ambient Corner Gradient */}
            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${category.colorScheme.gradientBg} blur-xl group-hover:scale-125 transition-transform`}></div>

            <div>
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/90 border border-white flex items-center justify-center shadow-xs mb-4">
                {getCategoryIcon(category.icon)}
              </div>

              {/* Title Pillar Tag */}
              <div className="mb-3">
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold ${category.colorScheme.badgeBg} shadow-xs`}>
                  {category.name}
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 mt-1">
                  {category.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[50px]">
                {category.description}
              </p>
            </div>

            {/* Model Examples Pills */}
            <div className="pt-3 border-t border-slate-100/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Core Models
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.examples.map((model, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/70 text-slate-700 shadow-2xs"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Recommendation Box */}
      <div className="glass-card rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-sky-50 via-white to-sky-100/60 border border-sky-200/90 shadow-md mb-12 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200">
            <Zap className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 bg-sky-200/80 px-2.5 py-0.5 rounded-full">
                Engineering Recommendation
              </span>
              <span className="text-xs text-slate-500">Google Cloud Architecture Team</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
              Start high-volume tasks with <strong className="text-sky-700 font-bold">Gemini 3.5 Flash-Lite 'Scale'</strong>, and dynamically route to <strong className="text-sky-800 font-bold">Gemini 3.5 Flash 'Workhorse'</strong> when advanced coding or layout generation is required.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Model Routing Helper */}
      <div className="glass-card rounded-[28px] p-6 sm:p-8 mb-12 border border-white/90">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Interactive Model Selector</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-800 mt-1">
              Find the Ideal Model Category for Your Workload
            </h3>
          </div>
          <span className="text-xs text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200">
            Click a use case to test optimal routing
          </span>
        </div>

        {/* Use case buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          <button
            onClick={() => setActiveUseCase('agents')}
            className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col justify-between cursor-pointer ${
              activeUseCase === 'agents'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-200'
                : 'bg-white/80 text-slate-700 hover:bg-sky-50 border border-slate-200/80'
            }`}
          >
            <SquareArrowOutUpRight className="w-4 h-4 mb-2" />
            <span>High-Volume AI Agents</span>
          </button>

          <button
            onClick={() => setActiveUseCase('coding')}
            className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col justify-between cursor-pointer ${
              activeUseCase === 'coding'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                : 'bg-white/80 text-slate-700 hover:bg-amber-50 border border-slate-200/80'
            }`}
          >
            <RotateCw className="w-4 h-4 mb-2" />
            <span>Complex Coding & Layouts</span>
          </button>

          <button
            onClick={() => setActiveUseCase('reasoning')}
            className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col justify-between cursor-pointer ${
              activeUseCase === 'reasoning'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                : 'bg-white/80 text-slate-700 hover:bg-emerald-50 border border-slate-200/80'
            }`}
          >
            <Brain className="w-4 h-4 mb-2" />
            <span>Strategic Legal & Reasoning</span>
          </button>

          <button
            onClick={() => setActiveUseCase('regulated')}
            className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col justify-between cursor-pointer ${
              activeUseCase === 'regulated'
                ? 'bg-lime-600 text-white shadow-md shadow-lime-200'
                : 'bg-white/80 text-slate-700 hover:bg-lime-50 border border-slate-200/80'
            }`}
          >
            <Dumbbell className="w-4 h-4 mb-2" />
            <span>Self-Hosted Regulated Models</span>
          </button>
        </div>

        {/* Selected Result Box */}
        <div className="bg-white/90 rounded-2xl p-5 border border-slate-200/90 shadow-xs">
          {activeUseCase === 'agents' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">
                  Recommended Primary: Scale Category (Gemini Flash-Lite)
                </span>
                <h4 className="font-heading text-lg font-bold text-slate-800 mt-2">
                  High-Throughput Agentic Automation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Use <strong>Gemini Flash-Lite</strong> for initial prompt parsing, function calling, and structured JSON generation. Fall back to <strong>Gemini Flash</strong> if reasoning confidence is low.
                </p>
              </div>
              <a 
                href={CONNECT_LINKS.marketplaceDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-sky-200"
              >
                <span>Onboard Agent to Marketplace</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {activeUseCase === 'coding' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  Recommended Primary: Workhorse Category (Gemini Flash)
                </span>
                <h4 className="font-heading text-lg font-bold text-slate-800 mt-2">
                  Developer Speed & Balanced Reasoning
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Use <strong>Gemini Flash</strong> for fast full-stack code synthesis, HTML/CSS layout generation, and multi-file debugging with low latency.
                </p>
              </div>
              <a 
                href={CONNECT_LINKS.meetAshley}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-amber-200"
              >
                <span>Review Tech Stack with Ashley</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {activeUseCase === 'reasoning' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Recommended Primary: Frontier Category (Gemini Pro 3.X)
                </span>
                <h4 className="font-heading text-lg font-bold text-slate-800 mt-2">
                  Raw Intellect & Multi-Step Reasoning
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Use <strong>Gemini Pro 3.X</strong> when performing deep financial modeling, complex contract analysis, compliance auditing, or multi-modal visual reasoning.
                </p>
              </div>
              <a 
                href={CONNECT_LINKS.meetAshleyAndLuis}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-emerald-200"
              >
                <span>Book Architecture Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {activeUseCase === 'regulated' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-lime-100 text-lime-800">
                  Recommended Primary: Open Weights Category (Gemma)
                </span>
                <h4 className="font-heading text-lg font-bold text-slate-800 mt-2">
                  Fine-Tuned Control & On-Prem Sovereignty
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Use <strong>Gemma</strong> open-weight models on Vertex AI or GKE for strict data privacy requirements, healthcare, fintech, or custom domain tuning.
                </p>
              </div>
              <a 
                href={CONNECT_LINKS.applyCredits}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold text-lime-800 hover:text-lime-900 bg-lime-50 hover:bg-lime-100 px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-lime-200"
              >
                <span>Claim Credits for Gemma GPU Clusters</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* NEW: Gemini Models & Key Strengths Architecture Matrix Chart */}
      <div className="glass-card rounded-[32px] p-6 sm:p-10 mb-12 border-2 border-sky-200/90 bg-gradient-to-br from-white via-sky-50/40 to-white shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <TableProperties className="w-4 h-4 text-sky-600" />
              <span>Official Architecture Matrix</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800 mt-1">
              Gemini Models & Their Key Strengths
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Compare token capacities, throughput latency, and architectural strengths across Google DeepMind's flagship Gemini and Gemma models.
            </p>
          </div>

          <a 
            href={CONNECT_LINKS.modelStrengthsMigrate}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-2xl text-xs font-bold text-sky-900 bg-sky-100/90 hover:bg-sky-200 border border-sky-300/80 shadow-xs flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Official Migration Guide</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-700" />
          </a>
        </div>

        {/* Visual Comparison Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {MODEL_STRENGTHS_MATRIX.map((model, idx) => (
            <div 
              key={idx} 
              className="bg-white/95 rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {model.name}
                  </span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${model.badgeBg}`}>
                    {model.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Context Window</span>
                    <span className="font-semibold text-slate-800">{model.contextWindow}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Output Token Limit</span>
                    <span className="font-semibold text-slate-800">{model.outputLimit}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Core Strengths</span>
                  {model.strengths.map((str, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Optimal Use Case</span>
                <p className="text-xs text-slate-600 font-medium">
                  {model.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote with link */}
        <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Need assistance selecting the right model or migrating existing prompts?</span>
          </div>
          <a
            href={CONNECT_LINKS.meetAshley}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sky-800 hover:text-sky-950 flex items-center gap-1 shrink-0"
          >
            <span>Review with Ashley</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* NEW: Developer Safety, Budget Alerts & Deprecation Schedule Bento Grid */}
      <div className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-wider text-sky-700 uppercase block mb-1">
            Production Readiness & Governance
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800">
            Safety Guardrails, Cost Controls & Lifecycle
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Key operational resources for founders and engineering teams deploying production AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GOVERNANCE_RESOURCES.map((resource) => (
            <div 
              key={resource.id}
              className="glass-card glass-card-hover rounded-[24px] p-6 flex flex-col justify-between border border-slate-200/80 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                    {getGovernanceIcon(resource.icon)}
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${resource.badgeBg}`}>
                    {resource.badge}
                  </span>
                </div>

                <h4 className="font-heading text-lg font-bold text-slate-800 group-hover:text-sky-700 transition-colors mb-2">
                  {resource.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
              </div>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center justify-between transition-all group-hover:border-sky-300 cursor-pointer"
              >
                <span>{resource.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* View Google Cloud Latest Updates Link */}
      <div className="mb-12 flex justify-center">
        <a 
          href={CONNECT_LINKS.gcpBlog} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all group border border-sky-400/30 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
            <TrendingUp className="w-4.5 h-4.5 text-white" />
          </div>
          <span>View Google Cloud Latest Updates</span>
          <ExternalLink className="w-4 h-4 text-sky-100 group-hover:translate-x-0.5 transition-transform ml-0.5" />
        </a>
      </div>

      {/* Featured Banner: Onboard Your Agent to Google Cloud Marketplace */}
      <div className="glass-card rounded-[28px] p-6 sm:p-8 border border-sky-200/90 bg-gradient-to-r from-sky-100/70 via-white to-sky-50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200">
            <Store className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-sky-800 bg-sky-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Partner Program
            </span>
            <h3 className="font-heading text-xl font-bold text-slate-800 mt-1">
              Onboard Your Agent to Google Cloud Marketplace
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Publish your AI agents directly to enterprise Google Cloud accounts and accelerate partner co-selling.
            </p>
          </div>
        </div>

        <a
          href={CONNECT_LINKS.marketplaceDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Marketplace Onboarding Docs</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};
