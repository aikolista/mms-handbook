export interface Link {
  title: string;
  url: string;
  description?: string;
}

export interface Tool {
  name: string;
  description: string;
  url?: string;
  category: string;
  isComingSoon?: boolean;
  slackWorkflow?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  slackHandle: string;
  expertise: string[];
  manager?: string;
  vaultUrl?: string;
  avatarUrl?: string;
}

export interface Metric {
  id: string;
  name: string;
  description: string;
  target?: string;
  calculation?: string;
  dashboardUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Process {
  id: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface Meeting {
  id: string;
  title: string;
  frequency: string;
  attendees: string;
  description: string;
  agenda: string[];
}

