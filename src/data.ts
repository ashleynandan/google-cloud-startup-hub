import { ModelCategory, BlogUpdate, CreditTier } from './types';

export const CONNECT_LINKS = {
  meetAshley: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ045IgPgVwa52c14u_aUoesGlsir6O-pCmhec-e0xBbqWAUg9282IjAc4mJHj0No_ybuZ7nkD2D?huid=DOclp00n4dNrrko6pMoofA",
  meetAshleyAndLuis: "https://calendar.app.google/6hNkihaQYETMy8mX6",
  linkedIn: "https://www.linkedin.com/in/ashleynandan/",
  gcpBlog: "https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud?e=48754805",
  marketplaceDocs: "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents",
  applyCredits: "https://cloud.google.com/startup/apply?hl=en&e=48754805",
  pdfBestPractices: "https://services.google.com/fh/files/misc/gfscloudprogram_bestpractices.pdf"
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
