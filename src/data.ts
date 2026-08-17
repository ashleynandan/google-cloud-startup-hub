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
    description: "Focused on efficient general intelligence, balancing speed and reasoning for developers and logistics roles.",
    examples: ["Gemini Flash", "Sonnet"],
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
    examples: ["Gemini Flash-Lite", "Haiku"],
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
    examples: ["Gemma", "GLM", "Kimi"],
    icon: "Dumbbell",
    colorScheme: {
      badgeBg: "bg-lime-100 text-lime-800",
      badgeText: "#3f6212",
      gradientBg: "from-lime-500/10 via-emerald-500/5 to-transparent",
      borderColor: "border-lime-200/80"
    }
  }
];

export const INITIAL_BLOG_UPDATES: BlogUpdate[] = [
  {
    id: "1",
    title: "Understanding the 4 Google Cloud Model Categories",
    date: "Latest Release",
    tag: "AI Architecture",
    readTime: "3 min read",
    summary: "Google DeepMind organizes its AI portfolio into Frontier, Workhorse, Scale, and Open Weights so startup teams can easily select and route workloads.",
    link: CONNECT_LINKS.gcpBlog,
    badge: "Essential Strategy"
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
    strengths: [
      "High-throughput sub-second response times",
      "Cost-optimized for massive prompt volume & scale",
      "Native function calling & structured JSON parsing",
      "Multimodal (Text, Code, Audio, Images, Video)"
    ],
    bestFor: "High-volume AI agents, routine classification, real-time data transformation",
    link: CONNECT_LINKS.modelStrengthsMigrate
  },
  {
    name: "Gemini 3.5 Flash / 3.7 Flash",
    category: "Workhorse",
    badge: "Balanced Speed & Coding",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
    contextWindow: "1,048,576 tokens",
    outputLimit: "65,536 tokens",
    strengths: [
      "State-of-the-art code generation and UI layout synthesis",
      "Strong multi-step logical reasoning & debugging",
      "Grounding with Google Search & implicit context caching",
      "High token-per-second streaming throughput"
    ],
    bestFor: "Developer copilots, full-stack software synthesis, interactive chatbots, multimodal analysis",
    link: CONNECT_LINKS.modelStrengthsMigrate
  },
  {
    name: "Gemini 3.1 Pro / 2.5 Pro",
    category: "Frontier",
    badge: "Maximum Intellect & Reasoning",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    contextWindow: "1,048,576+ tokens",
    outputLimit: "65,536 tokens",
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
    name: "Gemma 2 / Gemma 3",
    category: "Open Weights",
    badge: "Sovereignty & Self-Hosted",
    badgeBg: "bg-lime-100 text-lime-800 border-lime-200",
    contextWindow: "8k - 32k+ tokens",
    outputLimit: "Configurable",
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
    keyHighlights: ["Key Sunset Deadline: October 20, 2026", "Migration to Gemini 3.5 Flash & Flash-Lite", "Zero-downtime endpoint transitions"],
    description: "Track official Gemini model deprecation timelines. Plan seamless zero-downtime migrations from legacy endpoints to Gemini 3.5 ahead of the October 20, 2026 milestone.",
    link: CONNECT_LINKS.modelDeprecations,
    ctaText: "View Deprecation Schedule"
  }
];

export const MODEL_FEATURE_COMPARISON_TABLE = [
  {
    feature: "Launch Stage",
    flashLite: "GA (Generally Available)",
    flash: "GA (Generally Available)",
    pro: "GA & Preview (3.1)",
    gemma: "GA (Open Weights)"
  },
  {
    feature: "Input Modalities",
    flashLite: "Text, Code, Audio, Images, Video, PDF",
    flash: "Text, Code, Audio, Images, Video, PDF",
    pro: "Text, Code, Audio, Images, Video, PDF",
    gemma: "Text & Multimodal Vision"
  },
  {
    feature: "Context Window",
    flashLite: "1,048,576 tokens (~1M)",
    flash: "1,048,576 tokens (~1M)",
    pro: "1,048,576+ tokens (~1M-2M)",
    gemma: "8,192 - 32,768+ tokens"
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
    flash: "Native / High Accuracy",
    pro: "Advanced / Multi-Turn",
    gemma: "Supported via Tuning"
  },
  {
    feature: "Code Execution",
    flashLite: "Supported",
    flash: "Supported",
    pro: "Supported",
    gemma: "Self-Hosted Sandbox"
  },
  {
    feature: "Context Caching",
    flashLite: "Supported",
    flash: "Supported",
    pro: "Supported",
    gemma: "KV Cache / Self-Managed"
  },
  {
    feature: "Throughput Latency Tier",
    flashLite: "Ultra-Low (<200ms TTFT)",
    flash: "Low Latency (Fast)",
    pro: "Deep Thinking / Precision",
    gemma: "GPU & Cluster Dependent"
  }
];
