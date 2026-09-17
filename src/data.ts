import { ModelCategory, BlogUpdate, CreditTier } from './types';

export const CONNECT_LINKS = {
  meetAshley: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ045IgPgVwa52c14u_aUoesGlsir6O-pCmhec-e0xBbqWAUg9282IjAc4mJHj0No_ybuZ7nkD2D?huid=DOclp00n4dNrrko6pMoofA",
  meetAshleyAndLuis: "https://calendar.app.google/6hNkihaQYETMy8mX6",
  linkedIn: "https://www.linkedin.com/in/ashleynandan/",
  gcpBlog: "https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud?e=48754805",
  marketplaceDocs: "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents",
  applyCredits: "https://cloud.google.com/startup/apply?hl=en&e=48754805",
  pdfBestPractices: "https://services.google.com/fh/files/misc/gfscloudprogram_bestpractices.pdf",
  modelStrengthsMigrate: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/migrate#which-model",
  safetyFilters: "https://ai.google.dev/gemini-api/docs/safety-settings#safety-filters",
  budgetAlerts: "https://docs.cloud.google.com/billing/docs/how-to/budgets#add-new-budget",
  modelDeprecations: "https://ai.google.dev/gemini-api/docs/deprecations"
};

export const MODEL_CATEGORIES: ModelCategory[] = [
  {
    id: "frontier",
    name: "Frontier",
    subtitle: "Raw Intellect & Complex Strategy",
    description: "Highlighting raw intellect for complex reasoning, strategy, and compliance roles.",
    examples: ["Gemini Pro 3.X", "Gemini Pro", "Opus"],
    icon: "Brain",
    colorScheme: {
      badgeBg: "bg-emerald-100 text-emerald-800",
      badgeText: "#065f46",
      gradientBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
      borderColor: "border-emerald-200/80"
    }
  },
  {
    id: "workhorse",
    name: "Workhorse",
    subtitle: "Balanced Performance & Speed",
    description: "Focused on efficient general intelligence, balancing near-frontier reasoning and speed at breakthrough workhorse economics ($0.75 / 1M input tokens).",
    examples: ["Gemini 3.8 Flash", "Gemini 3.5 Flash", "Sonnet"],
    icon: "RotateCw",
    colorScheme: {
      badgeBg: "bg-amber-100 text-amber-800",
      badgeText: "#92400e",
      gradientBg: "from-amber-500/10 via-orange-500/5 to-transparent",
      borderColor: "border-amber-200/80"
    }
  },
  {
    id: "scale",
    name: "Scale",
    subtitle: "High-Throughput Automation",
    description: "High-volume automation for mass-scaling foundational agentic tasks with ultra-fast latency.",
    examples: ["Gemini 3.5 Flash-Lite", "Haiku"],
    icon: "SquareArrowOutUpRight",
    colorScheme: {
      badgeBg: "bg-sky-100 text-sky-800",
      badgeText: "#075985",
      gradientBg: "from-sky-500/10 via-blue-500/5 to-transparent",
      borderColor: "border-sky-200/80"
    }
  },
  {
    id: "openweight",
    name: "Open Weights",
    subtitle: "Custom & Regulated Control",
    description: "For controlled innovation and self-hosted customization in highly regulated industries.",
    examples: ["Gemma 3", "Gemma 2", "GLM", "Kimi"],
    icon: "Dumbbell",
    colorScheme: {
      badgeBg: "bg-lime-100 text-lime-800",
      badgeText: "#3f6212",
      gradientBg: "from-lime-500/10 via-emerald-500/5 to-transparent",
      borderColor: "border-lime-200/80"
    }
  }
];

export const STRATEGY_TRIANGLE_PILLARS = {
  capability: {
    id: "capability",
    label: "Raw Capability",
    shortTag: "Maximum Intellect & Deep Reasoning",
    categoryMatch: "Frontier (Gemini 3.1 Pro) & Workhorse (Gemini 3.8 Flash)",
    recommendedModels: ["Gemini 3.1 Pro", "Gemini 3.8 Flash"],
    pricingHighlight: "Gemini 3.8 Flash: $0.75 / 1M input · $3.75 / 1M output | Gemini 3.1 Pro: $2.00 / 1M input · $12.00 / 1M output",
    headline: "When Multi-Step Accuracy & Deep Reasoning Matter Most",
    description: "Prioritize Raw Capability when your architecture tackles long-horizon autonomous coding, quantitative financial modeling, legal diligence, or complex tool orchestration. Gemini 3.8 Flash delivers near-frontier performance (90.8% Terminal-bench 2.1 SOTA, 73.7% DeepSWE v1.1) at workhorse Flash pricing, while Gemini 3.1 Pro handles maximum-depth analytical reasoning.",
    colorScheme: {
      accentText: "text-emerald-800",
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
      cardBorder: "border-emerald-300/90",
      buttonActive: "bg-emerald-600 text-white shadow-emerald-200"
    }
  },
  latency: {
    id: "latency",
    label: "Latency",
    shortTag: "Sub-Second Speed & High-Volume Scale",
    categoryMatch: "Scale (Gemini 3.5 Flash-Lite) & Workhorse (Gemini 3.8 Flash)",
    recommendedModels: ["Gemini 3.5 Flash-Lite", "Gemini 3.8 Flash"],
    pricingHighlight: "Gemini 3.5 Flash-Lite: $0.30 / 1M input · $2.50 / 1M output | Gemini 3.8 Flash: $0.75 / 1M input · $3.75 / 1M output (50% off w/ Off-Peak PayGo)",
    headline: "When Real-Time Responsiveness & Unit Economics Drive Your Product",
    description: "Prioritize Latency when building real-time voice/video agents, interactive developer copilots, and high-throughput routing pipelines. Start routine classifications on Gemini 3.5 Flash-Lite (<200ms TTFT at $0.30/1M input) and route complex interactive turns to Gemini 3.8 Flash ($0.75/1M input)—optimized on Google TPU hardware for industry-leading tokens-per-second.",
    colorScheme: {
      accentText: "text-sky-800",
      badgeBg: "bg-sky-100 text-sky-800 border-sky-300",
      cardBorder: "border-sky-300/90",
      buttonActive: "bg-sky-600 text-white shadow-sky-200"
    }
  },
  sovereignty: {
    id: "sovereignty",
    label: "Sovereignty",
    shortTag: "Full Weight Control & Zero Data Egress",
    categoryMatch: "Open Weights (Gemma 3 / Gemma 2 on Vertex AI & GKE)",
    recommendedModels: ["Gemma 3", "Gemma 2"],
    pricingHighlight: "Open Weights (Zero Licensing Cost) — Pay only for GKE / Vertex AI GPU cluster compute (Eligible for up to $250K Startup Credits)",
    headline: "When Strict Data Residency, Air-Gapped Control & Custom Weights Are Non-Negotiable",
    description: "Prioritize Sovereignty when operating in regulated healthcare, defense, sovereign cloud, or specialized fintech environments. Deploy open-weight Gemma models directly on your own GKE clusters, Vertex AI dedicated endpoints, or on-premise hardware with custom LoRA fine-tuning and zero external data egress.",
    colorScheme: {
      accentText: "text-lime-800",
      badgeBg: "bg-lime-100 text-lime-800 border-lime-300",
      cardBorder: "border-lime-300/90",
      buttonActive: "bg-lime-600 text-white shadow-lime-200"
    }
  },
  balanced: {
    id: "balanced",
    label: "The Workhorse Sweet Spot",
    shortTag: "Near-Frontier Intelligence + Flash Speed",
    categoryMatch: "Gemini 3.8 Flash (Workhorse Flagship)",
    recommendedModels: ["Gemini 3.8 Flash"],
    pricingHighlight: "$0.75 / 1M Input Tokens · $3.75 / 1M Output Tokens (Introductory Pricing through Dec 31, 2026 | $0.375 / $1.875 Off-Peak PayGo)",
    headline: "Balancing Raw Capability & Low Latency: Meet Gemini 3.8 Flash",
    description: "Most startups need frontier-grade agentic coding and reasoning without frontier latency or token burn. Gemini 3.8 Flash bridges the triangle—delivering near-frontier intelligence, tunable thinking effort (Low/Medium/High), and agentic video understanding (up to 88% fewer tokens) at just $0.75 per 1M input tokens.",
    colorScheme: {
      accentText: "text-amber-800",
      badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
      cardBorder: "border-amber-300/90",
      buttonActive: "bg-amber-500 text-white shadow-amber-200"
    }
  }
};

export const INITIAL_BLOG_UPDATES: BlogUpdate[] = [
  {
    id: "1",
    title: "Gemini 3.8 Flash: Near-Frontier Intelligence at $0.75 / 1M Input Tokens",
    date: "September 2026",
    tag: "Pricing & Architecture",
    readTime: "3 min read",
    summary: "Gemini 3.8 Flash delivers a major leap in agentic coding and multi-step reasoning while maintaining $0.75/1M input and $3.75/1M output introductory pricing.",
    link: CONNECT_LINKS.gcpBlog,
    badge: "New Launch"
  },
  {
    id: "2",
    title: "Onboard Your Agent to Google Cloud Marketplace",
    date: "July 2026",
    tag: "Marketplace & Monetization",
    readTime: "4 min read",
    summary: "Build, publish, and co-sell enterprise-ready AI agents directly on Google Cloud Marketplace to accelerate B2B startup revenue.",
    link: CONNECT_LINKS.marketplaceDocs,
    badge: "Partner Guide"
  },
  {
    id: "3",
    title: "Google for Startups Cloud Program: Credit Best Practices",
    date: "Updated Program",
    tag: "Founder Growth",
    readTime: "5 min read",
    summary: "Maximize your eligibility for up to $200,000 in Google Cloud & Vertex AI credits with our 5 pre-application steps.",
    link: CONNECT_LINKS.applyCredits,
    badge: "Up to $200K"
  }
];

export const FIVE_EASY_STEPS = [
  {
    step: 1,
    title: "Verify Entity & Company Domain",
    description: "Ensure your startup is incorporated with an active website and corporate email address (not @gmail.com).",
    tip: "Must be a registered legal entity with pitch deck or live site."
  },
  {
    step: 2,
    title: "Prepare Equity & Funding Details",
    description: "Have details on your investors, seed rounds, or incubator affiliations ready to claim up to $200k.",
    tip: "Bootstrapped startups can qualify for up to $2,000-$10,000 tier."
  },
  {
    step: 3,
    title: "Project Your AI & Cloud Workload",
    description: "Outline your planned usage of Gemini models, Vertex AI, Firebase, BigQuery, or GKE.",
    tip: "Demonstrating AI/ML intent speeds up approval."
  },
  {
    step: 4,
    title: "Avoid Duplicate Accounts",
    description: "Apply with a fresh Google Cloud Billing Account that hasn't previously claimed promotional startup credits.",
    tip: "Use a primary workspace account for clean billing administration."
  },
  {
    step: 5,
    title: "Review Best Practices Guide (PDF)",
    description: "Read the official 5-step best practices guide before submitting your application.",
    tip: "Follow exact submission guidelines to ensure zero delays."
  }
];

export const CREDIT_TIERS: CreditTier[] = [
  {
    stage: "Inception / Pre-Seed",
    maxCredits: "$2,000",
    description: "For early-stage builders validating initial MVP & prototyping with Gemini Flash & Firebase.",
    perks: ["100% covered first-year cloud cost", "Google Cloud Community Access", "Technical Quickstarts"]
  },
  {
    stage: "Funded Startups",
    maxCredits: "Up to $250,000",
    description: "For venture-backed startups looking to scale production infrastructure & AI pipelines on Google Cloud.",
    perks: ["100% covered year 1 cloud spend", "Dedicated Startup Success Manager", "24/7 Technical Support Credits", "Marketplace Co-Selling Opportunities"]
  }
];

export const MODEL_STRENGTHS_MATRIX = [
  {
    name: "Gemini 3.5 Flash-Lite",
    category: "Scale",
    badge: "Ultra-Fast & Cost-Optimized",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
    contextWindow: "1,048,576 tokens",
    outputLimit: "65,536 tokens",
    pricing: "$0.30 / 1M input · $2.50 / 1M output",
    pricingSubtext: "50% discount available via Off-Peak PayGo & Batch API",
    strengths: [
      "High-throughput sub-second response times (350+ output tokens/sec)",
      "Cost-optimized for massive prompt volume & routine extraction",
      "Native function calling & structured JSON parsing",
      "Multimodal (Text, Code, Audio, Images, Video)"
    ],
    bestFor: "High-volume AI agents, routine classification, real-time data transformation",
    link: CONNECT_LINKS.modelStrengthsMigrate
  },
  {
    name: "Gemini 3.8 Flash",
    category: "Workhorse",
    badge: "Flagship Workhorse · $0.75 / 1M In",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
    contextWindow: "1,048,576 tokens",
    outputLimit: "65,536 tokens",
    pricing: "$0.75 / 1M input · $3.75 / 1M output",
    pricingSubtext: "Intro pricing thru Dec 31, 2026 ($1.50/$7.50 standard Jan 2027) · $0.375/$1.875 Off-Peak PayGo",
    strengths: [
      "Near-frontier coding & agentic execution (90.8% Terminal-bench 2.1 SOTA, 73.7% DeepSWE v1.1)",
      "Agentic video understanding using up to 88% fewer tokens with higher accuracy",
      "Tunable thinking effort (Low, Medium, High) to control latency & token spend",
      "Dramatic reduction in code/fact fabrication & autonomous multi-step tool loops"
    ],
    bestFor: "Autonomous software engineering agents, complex full-stack synthesis, multimodal video/financial workflows",
    link: CONNECT_LINKS.modelStrengthsMigrate
  },
  {
    name: "Gemini 3.1 Pro / 2.5 Pro",
    category: "Frontier",
    badge: "Maximum Intellect & Reasoning",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    contextWindow: "1,048,576+ tokens",
    outputLimit: "65,536 tokens",
    pricing: "$2.00 / 1M input · $12.00 / 1M output",
    pricingSubtext: "For prompts ≤200K tokens ($4.00 / $18.00 per 1M for >200K tokens)",
    strengths: [
      "Deep multi-document legal & financial synthesis",
      "Complex mathematical, scientific, and strategic reasoning",
      "Advanced compliance auditing & rigorous logic verification",
      "High-fidelity multi-turn tool orchestration"
    ],
    bestFor: "Enterprise strategic intelligence, compliance diligence, complex contract auditing",
    link: CONNECT_LINKS.modelStrengthsMigrate
  },
  {
    name: "Gemma 3 / Gemma 2",
    category: "Open Weights",
    badge: "Sovereignty & Self-Hosted",
    badgeBg: "bg-lime-100 text-lime-800 border-lime-200",
    contextWindow: "8k - 128k+ tokens",
    outputLimit: "Configurable",
    pricing: "Open Weights ($0 Licensing Fee)",
    pricingSubtext: "Billed purely on Vertex AI / GKE GPU infrastructure consumption",
    strengths: [
      "Deploy anywhere (Vertex AI, GKE, on-prem, local edge)",
      "Zero data egress & strict data residency compliance",
      "Custom LoRA fine-tuning & domain adaptation",
      "Lightweight resource footprint"
    ],
    bestFor: "Regulated industries (healthcare, defense, fintech), sovereign AI infrastructure",
    link: CONNECT_LINKS.applyCredits
  }
];

export const GOVERNANCE_RESOURCES = [
  {
    id: "safeguards",
    title: "Built-in Safeguards & Safety Filters",
    badge: "AI Safety & Alignment",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: "ShieldCheck",
    keyHighlights: ["4 Harm Categories (Hate, Harassment, Sexual, Dangerous)", "Thresholds: BLOCK_NONE to BLOCK_LOW_AND_ABOVE", "Enterprise Safety Settings in Gemini API"],
    description: "Configure granular safety filters and probability thresholds to ensure production AI agents adhere to brand safety, trust, and enterprise compliance standards.",
    link: CONNECT_LINKS.safetyFilters,
    ctaText: "Configure Safety Settings"
  },
  {
    id: "budgets",
    title: "Cloud Budget Alerts & Cost Controls",
    badge: "Spend Governance",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
    icon: "DollarSign",
    keyHighlights: ["Automated 50%, 90%, 100% threshold rules", "Email & Pub/Sub programmatic webhooks", "Cap runaway API & inference costs"],
    description: "Set up Google Cloud Billing automated budget alerts with customizable warning tiers and Pub/Sub notifications to protect startup runway and prevent runaway spend.",
    link: CONNECT_LINKS.budgetAlerts,
    ctaText: "Set Up Budget Alerts"
  },
  {
    id: "deprecations",
    title: "Model Deprecation Dates & Lifecycle",
    badge: "Next Key Date: Oct 20, 2026",
    badgeBg: "bg-rose-100 text-rose-800 border-rose-200 font-extrabold",
    icon: "CalendarClock",
    keyHighlights: ["Key Sunset Deadline: October 20, 2026 (Gemini 2.5 series)", "Migrate to Gemini 3.8 Flash & 3.5 Flash-Lite", "Zero-downtime endpoint transitions"],
    description: "Track official Gemini model deprecation timelines. Plan seamless zero-downtime migrations from legacy Gemini 2.5 endpoints to Gemini 3.8 Flash ahead of the October 20, 2026 milestone.",
    link: CONNECT_LINKS.modelDeprecations,
    ctaText: "View Deprecation Schedule"
  }
];

export const MODEL_FEATURE_COMPARISON_TABLE = [
  {
    feature: "Token Pricing (Per 1M Tokens)",
    flashLite: "$0.30 Input / $2.50 Output",
    flash: "$0.75 Input / $3.75 Output (Intro thru Dec 31, 2026)",
    pro: "$2.00 Input / $12.00 Output (≤200K)",
    gemma: "$0 Licensing (Compute / GPU Only)"
  },
  {
    feature: "Off-Peak PayGo / Batch Discount (50% Off)",
    flashLite: "$0.15 Input / $1.25 Output",
    flash: "$0.375 Input / $1.875 Output",
    pro: "$1.00 Input / $6.00 Output (Batch)",
    gemma: "Spot / Preemptible GPU Pricing"
  },
  {
    feature: "Launch Stage",
    flashLite: "GA (Generally Available)",
    flash: "GA (Gemini 3.8 Flash - Sep 2026)",
    pro: "GA & Preview (3.1)",
    gemma: "GA (Open Weights)"
  },
  {
    feature: "Input Modalities",
    flashLite: "Text, Code, Audio, Images, Video, PDF",
    flash: "Text, Code, Audio, Images, Agentic Video (88% fewer tokens), PDF",
    pro: "Text, Code, Audio, Images, Video, PDF",
    gemma: "Text & Multimodal Vision"
  },
  {
    feature: "Context Window",
    flashLite: "1,048,576 tokens (~1M)",
    flash: "1,048,576 tokens (~1M)",
    pro: "1,048,576+ tokens (~1M-2M)",
    gemma: "8,192 - 128,000+ tokens"
  },
  {
    feature: "Max Output Tokens",
    flashLite: "65,536 tokens",
    flash: "65,536 tokens",
    pro: "65,536 tokens",
    gemma: "Configurable / Custom"
  },
  {
    feature: "Grounding with Google Search",
    flashLite: "Supported",
    flash: "Supported",
    pro: "Supported",
    gemma: "Via Vertex AI / RAG"
  },
  {
    feature: "Function Calling & JSON Mode",
    flashLite: "Optimized / High Speed",
    flash: "Iterative Agentic Loops / High Accuracy",
    pro: "Advanced / Multi-Turn",
    gemma: "Supported via Tuning"
  },
  {
    feature: "Code Execution & Benchmarks",
    flashLite: "Supported (Fast Scripting)",
    flash: "Supported (90.8% Terminal-bench 2.1 SOTA)",
    pro: "Supported (Deep Architecture)",
    gemma: "Self-Hosted Sandbox"
  },
  {
    feature: "Throughput Latency Tier",
    flashLite: "Ultra-Low (<200ms TTFT)",
    flash: "Low Latency + Tunable Thinking (Low/Med/High)",
    pro: "Deep Thinking / Precision",
    gemma: "GPU & Cluster Dependent"
  }
];

