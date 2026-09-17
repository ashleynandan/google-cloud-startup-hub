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
import { CONNECT_LINKS, MODEL_CATEGORIES, INITIAL_BLOG_UPDATES, MODEL_STRENGTHS_MATRIX, GOVERNANCE_RESOURCES, MODEL_FEATURE_COMPARISON_TABLE, STRATEGY_TRIANGLE_PILLARS } from '../data';
import { BlogUpdate } from '../types';

export const SectionGcpUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<BlogUpdate[]>(INITIAL_BLOG_UPDATES);
  const [loading, setLoading] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState<'agents' | 'coding' | 'reasoning' | 'regulated'>('agents');
  const [matrixViewMode, setMatrixViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedTriangleVertex, setSelectedTriangleVertex] = useState<'capability' | 'latency' | 'sovereignty' | 'balanced'>('capability');

  const activeTriangleData = STRATEGY_TRIANGLE_PILLARS[selectedTriangleVertex];

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

      {/* NEW: Interactive AI Architecture Trade-off Triangle (Raw Capability, Latency, Sovereignty) */}
      <div className="glass-card rounded-[32px] p-6 sm:p-10 mb-12 border-2 border-sky-200/90 bg-gradient-to-br from-white via-sky-50/35 to-amber-50/25 shadow-lg relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[11px] font-extrabold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            Architecture Priority Framework
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What&apos;s Most Important to You?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every AI workload balances three core dimensions: <strong>Raw Capability</strong>, <strong>Latency</strong>, and <strong>Sovereignty</strong>. Click any vertex on the triangle—or the <strong>Gemini 3.8 Flash</strong> center—to map your top priority to the right model tier and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive SVG Strategy Triangle */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[440px] bg-white/85 backdrop-blur-md rounded-[28px] p-4 sm:p-6 border border-slate-200/80 shadow-sm relative">
              <svg
                viewBox="0 0 420 355"
                className="w-full h-auto select-none overflow-visible"
                role="img"
                aria-label="AI Strategy Priority Triangle: Raw Capability, Latency, and Sovereignty"
              >
                <defs>
                  <linearGradient id="triangleFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.14" />
                  </linearGradient>
                  <linearGradient id="triangleStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#65a30d" />
                  </linearGradient>
                  <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.14" />
                  </filter>
                </defs>

                {/* Outer Soft Glow Triangle */}
                <polygon
                  points="210,46 62,284 358,284"
                  fill="url(#triangleFillGrad)"
                  stroke="url(#triangleStrokeGrad)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Dashed Connectors from Center Sweet Spot to Each Vertex */}
                <line
                  x1="210"
                  y1="196"
                  x2="210"
                  y2="46"
                  stroke={selectedTriangleVertex === 'capability' ? '#059669' : '#cbd5e1'}
                  strokeWidth={selectedTriangleVertex === 'capability' ? '2.5' : '1.5'}
                  strokeDasharray="5,5"
                />
                <line
                  x1="210"
                  y1="196"
                  x2="62"
                  y2="284"
                  stroke={selectedTriangleVertex === 'latency' ? '#0284c7' : '#cbd5e1'}
                  strokeWidth={selectedTriangleVertex === 'latency' ? '2.5' : '1.5'}
                  strokeDasharray="5,5"
                />
                <line
                  x1="210"
                  y1="196"
                  x2="358"
                  y2="284"
                  stroke={selectedTriangleVertex === 'sovereignty' ? '#65a30d' : '#cbd5e1'}
                  strokeWidth={selectedTriangleVertex === 'sovereignty' ? '2.5' : '1.5'}
                  strokeDasharray="5,5"
                />

                {/* Edge Axis Labels */}
                <text
                  x="118"
                  y="158"
                  textAnchor="middle"
                  transform="rotate(-58 118 158)"
                  className="fill-slate-400 text-[9px] font-bold uppercase tracking-widest"
                >
                  Intelligence × Speed
                </text>
                <text
                  x="302"
                  y="158"
                  textAnchor="middle"
                  transform="rotate(58 302 158)"
                  className="fill-slate-400 text-[9px] font-bold uppercase tracking-widest"
                >
                  Reasoning × Control
                </text>
                <text
                  x="210"
                  y="302"
                  textAnchor="middle"
                  className="fill-slate-400 text-[9px] font-bold uppercase tracking-widest"
                >
                  Edge Throughput × Data Residency
                </text>

                {/* TOP VERTEX: RAW CAPABILITY */}
                <g
                  onClick={() => setSelectedTriangleVertex('capability')}
                  className="cursor-pointer transition-transform"
                  filter="url(#nodeShadow)"
                >
                  {selectedTriangleVertex === 'capability' && (
                    <circle cx="210" cy="46" r="34" fill="#10b981" fillOpacity="0.18" />
                  )}
                  <circle
                    cx="210"
                    cy="46"
                    r="24"
                    fill={selectedTriangleVertex === 'capability' ? '#059669' : '#ffffff'}
                    stroke="#059669"
                    strokeWidth="3"
                  />
                  <text
                    x="210"
                    y="50"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'capability' ? '#ffffff' : '#065f46'}
                    className="text-[11px] font-extrabold"
                  >
                    PRO
                  </text>
                  <rect
                    x="136"
                    y="2"
                    width="148"
                    height="22"
                    rx="11"
                    fill={selectedTriangleVertex === 'capability' ? '#065f46' : '#ecfdf5'}
                    stroke="#10b981"
                    strokeWidth="1.2"
                  />
                  <text
                    x="210"
                    y="16.5"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'capability' ? '#ffffff' : '#065f46'}
                    className="text-[11px] font-extrabold tracking-wide"
                  >
                    1. RAW CAPABILITY
                  </text>
                </g>

                {/* BOTTOM-LEFT VERTEX: LATENCY */}
                <g
                  onClick={() => setSelectedTriangleVertex('latency')}
                  className="cursor-pointer transition-transform"
                  filter="url(#nodeShadow)"
                >
                  {selectedTriangleVertex === 'latency' && (
                    <circle cx="62" cy="284" r="34" fill="#0ea5e9" fillOpacity="0.18" />
                  )}
                  <circle
                    cx="62"
                    cy="284"
                    r="24"
                    fill={selectedTriangleVertex === 'latency' ? '#0284c7' : '#ffffff'}
                    stroke="#0284c7"
                    strokeWidth="3"
                  />
                  <text
                    x="62"
                    y="288"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'latency' ? '#ffffff' : '#075985'}
                    className="text-[11px] font-extrabold"
                  >
                    FAST
                  </text>
                  <rect
                    x="4"
                    y="318"
                    width="124"
                    height="22"
                    rx="11"
                    fill={selectedTriangleVertex === 'latency' ? '#075985' : '#f0f9ff'}
                    stroke="#0ea5e9"
                    strokeWidth="1.2"
                  />
                  <text
                    x="66"
                    y="332.5"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'latency' ? '#ffffff' : '#075985'}
                    className="text-[11px] font-extrabold tracking-wide"
                  >
                    2. LATENCY
                  </text>
                </g>

                {/* BOTTOM-RIGHT VERTEX: SOVEREIGNTY */}
                <g
                  onClick={() => setSelectedTriangleVertex('sovereignty')}
                  className="cursor-pointer transition-transform"
                  filter="url(#nodeShadow)"
                >
                  {selectedTriangleVertex === 'sovereignty' && (
                    <circle cx="358" cy="284" r="34" fill="#84cc16" fillOpacity="0.18" />
                  )}
                  <circle
                    cx="358"
                    cy="284"
                    r="24"
                    fill={selectedTriangleVertex === 'sovereignty' ? '#65a30d' : '#ffffff'}
                    stroke="#65a30d"
                    strokeWidth="3"
                  />
                  <text
                    x="358"
                    y="288"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'sovereignty' ? '#ffffff' : '#3f6212'}
                    className="text-[10px] font-extrabold"
                  >
                    OPEN
                  </text>
                  <rect
                    x="284"
                    y="318"
                    width="132"
                    height="22"
                    rx="11"
                    fill={selectedTriangleVertex === 'sovereignty' ? '#3f6212' : '#f7fee7'}
                    stroke="#84cc16"
                    strokeWidth="1.2"
                  />
                  <text
                    x="350"
                    y="332.5"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'sovereignty' ? '#ffffff' : '#3f6212'}
                    className="text-[11px] font-extrabold tracking-wide"
                  >
                    3. SOVEREIGNTY
                  </text>
                </g>

                {/* CENTER NODE: GEMINI 3.8 FLASH SWEET SPOT */}
                <g
                  onClick={() => setSelectedTriangleVertex('balanced')}
                  className="cursor-pointer transition-transform"
                  filter="url(#nodeShadow)"
                >
                  {selectedTriangleVertex === 'balanced' && (
                    <circle cx="210" cy="196" r="42" fill="#f59e0b" fillOpacity="0.22" />
                  )}
                  <circle
                    cx="210"
                    cy="196"
                    r="31"
                    fill={selectedTriangleVertex === 'balanced' ? '#d97706' : '#fffbeb'}
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  <text
                    x="210"
                    y="193"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'balanced' ? '#ffffff' : '#92400e'}
                    className="text-[10px] font-extrabold"
                  >
                    3.8 FLASH
                  </text>
                  <text
                    x="210"
                    y="205"
                    textAnchor="middle"
                    fill={selectedTriangleVertex === 'balanced' ? '#fef3c7' : '#b45309'}
                    className="text-[8.5px] font-bold"
                  >
                    $0.75/1M
                  </text>
                </g>
              </svg>

              {/* Quick Selector Pills Below Triangle */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedTriangleVertex('capability')}
                  className={`px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer text-center ${
                    selectedTriangleVertex === 'capability'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/70'
                  }`}
                >
                  Raw Capability
                </button>
                <button
                  onClick={() => setSelectedTriangleVertex('latency')}
                  className={`px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer text-center ${
                    selectedTriangleVertex === 'latency'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-sky-50/70 text-sky-900 hover:bg-sky-100 border border-sky-200/70'
                  }`}
                >
                  Latency
                </button>
                <button
                  onClick={() => setSelectedTriangleVertex('sovereignty')}
                  className={`px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer text-center ${
                    selectedTriangleVertex === 'sovereignty'
                      ? 'bg-lime-600 text-white shadow-sm'
                      : 'bg-lime-50/70 text-lime-900 hover:bg-lime-100 border border-lime-200/70'
                  }`}
                >
                  Sovereignty
                </button>
                <button
                  onClick={() => setSelectedTriangleVertex('balanced')}
                  className={`px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer text-center ${
                    selectedTriangleVertex === 'balanced'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-amber-50/80 text-amber-900 hover:bg-amber-100 border border-amber-200/80'
                  }`}
                >
                  3.8 Sweet Spot
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Priority Recommendation & Gemini 3.8 Pricing Breakdown */}
          <div className="lg:col-span-6">
            <div className={`bg-white/95 rounded-[28px] p-6 sm:p-7 border-2 ${activeTriangleData.colorScheme.cardBorder} shadow-sm transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${activeTriangleData.colorScheme.badgeBg}`}>
                  Priority: {activeTriangleData.label}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {activeTriangleData.shortTag}
                </span>
              </div>

              <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {activeTriangleData.headline}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {activeTriangleData.description}
              </p>

              {/* Recommended Tier & Pricing Box */}
              <div className="rounded-2xl bg-slate-50/90 border border-slate-200/90 p-4 mb-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Optimal Google Cloud Tier
                  </span>
                  <span className={`text-xs font-bold ${activeTriangleData.colorScheme.accentText}`}>
                    {activeTriangleData.categoryMatch}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Reference Token Pricing (Gemini 3.8 & Portfolio)
                  </span>
                  <p className="text-xs font-bold text-slate-800">
                    {activeTriangleData.pricingHighlight}
                  </p>
                </div>
              </div>

              {/* Dynamic Spotlight Card: Gemini 3.8 Flash Pricing OR Open Models Compute Savings Plan */}
              {selectedTriangleVertex === 'sovereignty' ? (
                <div className="rounded-2xl bg-gradient-to-r from-lime-50/95 via-white to-emerald-50/80 border border-lime-300/90 p-4 mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-lime-900 flex items-center gap-1.5">
                      <Dumbbell className="w-3.5 h-3.5 text-lime-700" />
                      Compute Savings Plan for Open Models
                    </span>
                    <span className="text-[10px] font-bold bg-lime-200/80 text-lime-950 px-2 py-0.5 rounded-full">
                      MaaS &amp; Flexible CUDs
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium mb-2.5">
                    Run <strong>Kimi, Qwen, Llama, DeepSeek, GLM, Gemma, and MiniMax</strong> on GCP and lower inference/compute spend with Flexible Compute Savings Plans:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={CONNECT_LINKS.openModelsMaas}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-[11px] font-bold text-lime-950 bg-white hover:bg-lime-50 border border-lime-300/90 flex items-center justify-between gap-1.5 shadow-2xs transition-all cursor-pointer"
                    >
                      <span>How to Use Open Models on GCP</span>
                      <ExternalLink className="w-3.5 h-3.5 text-lime-700 shrink-0" />
                    </a>
                    <a
                      href={CONNECT_LINKS.computeSavingsPlan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-[11px] font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-300/90 flex items-center justify-between gap-1.5 shadow-2xs transition-all cursor-pointer"
                    >
                      <span>How to Provision Savings Plan</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-gradient-to-r from-amber-50/90 via-white to-sky-50/80 border border-amber-200/90 p-4 mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Gemini 3.8 Flash Pricing Spotlight
                    </span>
                    <span className="text-[10px] font-bold bg-amber-200/80 text-amber-950 px-2 py-0.5 rounded-full">
                      Intro Rate thru Dec 31, 2026
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mt-2">
                    <div className="bg-white/90 rounded-xl p-2 border border-amber-200/60">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Input / 1M</span>
                      <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900">$0.75</span>
                    </div>
                    <div className="bg-white/90 rounded-xl p-2 border border-amber-200/60">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Output / 1M</span>
                      <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900">$3.75</span>
                    </div>
                    <div className="bg-white/90 rounded-xl p-2 border border-sky-200/60">
                      <span className="text-[10px] font-bold text-sky-700 uppercase block">Off-Peak (50% Off)</span>
                      <span className="font-heading font-extrabold text-xs sm:text-sm text-sky-900">$0.375 / $1.875</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={CONNECT_LINKS.meetAshley}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Discuss Your Priority with Ashley</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONNECT_LINKS.applyCredits}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Cover Token Spend with Credits</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
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

      {/* NEW: Compute Savings Plan for Open Models on GCP */}
      <div className="glass-card rounded-[32px] p-6 sm:p-10 mb-12 border-2 border-lime-300/90 bg-gradient-to-br from-white via-lime-50/40 to-emerald-50/30 shadow-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 text-lime-900 border border-lime-300 text-xs font-extrabold uppercase tracking-wider">
                <Dumbbell className="w-3.5 h-3.5 text-lime-700" />
                Open Models &amp; Cost Optimization
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Flexible CUDs &amp; Model-as-a-Service (MaaS)
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Compute Savings Plan for Open Models on GCP
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
              Deploy and scale leading open-weight and third-party models on Google Cloud—either via managed <strong>Model-as-a-Service (MaaS)</strong> endpoints in Vertex AI or self-hosted GPU/TPU clusters—and pair them with a <strong>Google Cloud Compute Savings Plan (Flexible CUDs)</strong> to significantly reduce committed compute spend.
            </p>

            {/* Supported Open Models Pills */}
            <div className="mt-4 pt-4 border-t border-lime-200/70">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                Supported Open Models Ecosystem
              </span>
              <div className="flex flex-wrap gap-2">
                {['Kimi', 'Qwen', 'Llama', 'DeepSeek', 'GLM', 'Gemma', 'MiniMax'].map((openModel) => (
                  <span
                    key={openModel}
                    className="px-3 py-1.5 rounded-xl bg-white/95 border border-lime-300/90 text-slate-800 text-xs font-extrabold shadow-2xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                    {openModel}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links Column */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={CONNECT_LINKS.openModelsMaas}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-500 hover:to-lime-500 shadow-md shadow-lime-500/20 flex items-center justify-between gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>How to Use Open Models on GCP</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <a
              href={CONNECT_LINKS.computeSavingsPlan}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-lime-50 border-2 border-lime-300/90 shadow-xs flex items-center justify-between gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>How to Provision Savings Plan</span>
              <ExternalLink className="w-4 h-4 text-lime-700 shrink-0" />
            </a>
          </div>
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

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {resource.description}
                </p>

                {resource.keyHighlights && (
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                    {resource.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
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
