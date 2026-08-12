export interface ModelCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  examples: string[];
  icon: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    gradientBg: string;
    borderColor: string;
  };
}

export interface BlogUpdate {
  id: string;
  title: string;
  date: string;
  tag: string;
  readTime: string;
  summary: string;
  link: string;
  badge: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  role: string;
  startupName: string;
  stage: string;
  primaryInterest: string;
}

export interface CreditTier {
  stage: string;
  maxCredits: string;
  description: string;
  perks: string[];
}
