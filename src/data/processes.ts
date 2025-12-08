import { Process } from '../types';

export const processes: Process[] = [
  {
    id: 'deal-qualification',
    title: 'Deal Qualification Process',
    description: 'Framework for qualifying opportunities and determining fit',
    steps: [
      {
        step: 1,
        title: 'Initial Research',
        description: 'Review company website, social presence, existing data. Check for IPP signals.',
      },
      {
        step: 2,
        title: 'Discovery Call',
        description: 'Understand business model, pain points, growth goals. Ask open-ended questions.',
      },
      {
        step: 3,
        title: 'Qualify Against IPP',
        description: 'Assess fit: GMV potential, industry, business model, product needs.',
      },
      {
        step: 4,
        title: 'Create Opportunity',
        description: 'Log qualified opportunity in Salesforce with complete information.',
      },
      {
        step: 5,
        title: 'Determine Next Steps',
        description: 'Schedule demo, send proposal, or disqualify with clear reasoning.',
      },
    ],
  },
  {
    id: 'pipeline-management',
    title: 'Pipeline Management Best Practices',
    description: 'Maintain a healthy pipeline for consistent performance',
    steps: [
      {
        step: 1,
        title: 'Weekly Pipeline Review',
        description: 'Review all open opportunities. Update stages, close dates, and next steps.',
      },
      {
        step: 2,
        title: 'Prioritize High-Value Deals',
        description: 'Focus time on deals with highest potential and probability.',
      },
      {
        step: 3,
        title: 'Move or Disqualify Stalled Deals',
        description: 'If no progress in 30+ days, create urgency or disqualify.',
      },
      {
        step: 4,
        title: 'Maintain 3x Pipeline Coverage',
        description: 'Keep pipeline value at 3x your quarterly quota.',
      },
      {
        step: 5,
        title: 'Track Key Activities',
        description: 'Log calls, emails, meetings in Salesforce for visibility.',
      },
    ],
  },
  {
    id: 'merchant-meeting',
    title: 'Merchant Meeting Framework',
    description: 'Structure for effective merchant conversations',
    steps: [
      {
        step: 1,
        title: 'Pre-Meeting Prep',
        description: 'Research merchant, review previous interactions, prepare questions.',
      },
      {
        step: 2,
        title: 'Opening: Build Rapport',
        description: 'Introduce yourself, establish agenda, make them comfortable.',
      },
      {
        step: 3,
        title: 'Discovery: Ask Questions',
        description: 'Understand their business, challenges, and goals. Listen actively.',
      },
      {
        step: 4,
        title: 'Present Solution',
        description: 'Show how Shopify addresses their specific needs. Demo if appropriate.',
      },
      {
        step: 5,
        title: 'Handle Objections',
        description: 'Address concerns directly. Use proof points and case studies.',
      },
      {
        step: 6,
        title: 'Close: Define Next Steps',
        description: 'Agree on clear next steps with dates and owners.',
      },
      {
        step: 7,
        title: 'Follow-Up',
        description: 'Send recap email within 24 hours. Log detailed notes in Salesforce.',
      },
    ],
  },
  {
    id: 'escalation',
    title: 'Escalation Procedures',
    description: 'When and how to escalate merchant issues or deal blockers',
    steps: [
      {
        step: 1,
        title: 'Attempt Resolution',
        description: 'Try to resolve the issue yourself using available resources.',
      },
      {
        step: 2,
        title: 'Consult Team',
        description: 'Ask in #mms-team Slack for guidance from peers.',
      },
      {
        step: 3,
        title: 'Escalate to Manager',
        description: 'If unresolved, escalate to your manager with context and urgency.',
      },
      {
        step: 4,
        title: 'Cross-Functional Escalation',
        description: 'Manager engages Product, Support, or Leadership as needed.',
      },
      {
        step: 5,
        title: 'Communicate Back',
        description: 'Keep merchant informed of progress. Close loop when resolved.',
      },
    ],
  },
];

export const playbooks = [
  {
    title: 'D2C to Plus Migration',
    description: 'Playbook for upgrading D2C merchants to Shopify Plus',
    url: 'https://vault.shopify.io/pages/d2c-plus-playbook',
  },
  {
    title: 'B2B Solution Selling',
    description: 'Guide for positioning B2B features to wholesale businesses',
    url: 'https://vault.shopify.io/pages/b2b-playbook',
  },
  {
    title: 'POS Pro Positioning',
    description: 'How to sell POS Pro to retail merchants',
    url: 'https://vault.shopify.io/pages/pos-pro-playbook',
  },
  {
    title: 'Objection Handling Guide',
    description: 'Common objections and proven responses',
    url: 'https://vault.shopify.io/pages/objection-handling',
  },
];

