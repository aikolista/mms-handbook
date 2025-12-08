import { Metric } from '../types';

// Note about book size
export const bookSize = {
  merchants: "200-250 merchants",
  note: "All metrics are based on a full book of approximately 200-250 merchants",
};

// Core Performance Metrics - Engagement & Data Quality
export const corePerformanceMetrics: Metric[] = [
  // Engagement
  {
    id: 'unique-meetings-l90',
    name: '60% of Unique Merchant Meetings L90',
    description: 'At least 60% of your merchants should have had a meeting in the last 90 days. Focus on High Engagement merchants with quarterly sync as default; monthly/bi-monthly only when business case justified.',
    target: '≥ 60%',
    calculation: '(Merchants with meetings L90 / Total merchants) × 100',
  },
  {
    id: 'meetings-per-week',
    name: 'Average 15 Meetings Per Week',
    description: 'Maintain an average of minimum 15 merchant meetings per week',
    target: '≥ 15/week',
    calculation: 'Total merchant meetings / Number of weeks',
  },
  {
    id: 'merchants-engaged-l90',
    name: '100% of Merchants Engaged L90',
    description: 'All merchants should be engaged (email, call, or meeting) within 90 days. If merchant never responded to email or no meeting in L90, must have attempted a Call.',
    target: '100%',
  },
  {
    id: 'salesloft-recording',
    name: '80% of Calls/Meetings Recorded',
    description: 'Record merchant calls and meetings in Salesloft for coaching and insights',
    target: '≥ 80%',
  },
  // Data Quality
  {
    id: 'risk-profile',
    name: '100% Completed Risk Profiles',
    description: 'All merchants must have a completed Risk Profile',
    target: '100%',
  },
  {
    id: 'merchant-overview',
    name: '100% Completed Merchant Overview',
    description: 'All merchants must have a completed Merchant Overview (Account Plan)',
    target: '100%',
  },
  {
    id: 'success-plans',
    name: '30% with Live Success Plans',
    description: 'Success Plans track important milestones that help merchants grow. Focus on High Engagement merchants. Active plans should match plans updated in L90 with no overdue outcomes.',
    target: '≥ 30%',
  },
  {
    id: 'primary-contact',
    name: '100% with Primary Contact',
    description: 'Every merchant must have a designated Primary Contact',
    target: '100%',
  },
  {
    id: 'key-decision-maker',
    name: '100% with Key Decision Maker Contact',
    description: 'Every merchant must have a Key Decision Maker or Executive/Senior Leader as a Contact',
    target: '100%',
  },
];

// Revenue & Pipeline Metrics
export const revenueMetrics: Metric[] = [
  {
    id: 'ipp-weekly',
    name: 'Weekly IPP Pipeline',
    description: 'Potential Incremental Product Profit pipeline per week',
    target: '$136K',
  },
  {
    id: 'ipp-weekly-d2c',
    name: 'Weekly D2C IPP Pipeline',
    description: 'D2C-specific potential IPP per week',
    target: '$20K',
  },
  {
    id: 'ipp-quarterly',
    name: 'Quarterly IPP Pipeline',
    description: 'Potential Incremental Product Profit pipeline per quarter',
    target: '$1.5M',
  },
  {
    id: 'ipp-quarterly-d2c',
    name: 'Quarterly D2C IPP Pipeline',
    description: 'D2C-specific potential IPP per quarter',
    target: '$240K',
  },
  {
    id: 'ipp-won-stretch',
    name: 'IPP Won Per Quarter (Stretch Goal)',
    description: 'D2C Cross-Sell stretch goal of $100K IPP Won per CSM per quarter for actual closed/won IPP. MSQLs remain important for assessment, but focus primarily on overall IPP pipeline (one team, one dream!).',
    target: '$100K',
  },
];

// Development & Contribution Metrics
export const developmentMetrics: Metric[] = [
  {
    id: 'seismic-completion',
    name: '100% of Seismic Enablement Completed',
    description: 'Stay up-to-date with all required Seismic courses and tracks to remain product experts',
    target: '100%',
    dashboardUrl: 'https://seismic.shopify.io',
  },
  {
    id: 'product-feedback',
    name: 'Minimum 10 Product Feedback Submissions',
    description: 'Submit product feedback from merchant engagements in Salesforce as soon as possible. Important measurement of MS driving product insights and influencing product roadmaps via One List initiative.',
    target: '≥ 10/month',
  },
  {
    id: 'gong-coaching',
    name: 'Salesloft Coaching Calls',
    description: 'MS Leads listen to, score, and provide coaching on recorded calls',
    target: '2 calls/month',
  },
  {
    id: 'merchant-stories',
    name: 'Merchant Story Submissions',
    description: 'Submit merchant customer success stories via Slack workflow to celebrate wins and share impact',
    target: '1 story/month',
  },
];

// Dashboard and Resource Links
export const metricsDashboards = [
  {
    title: 'WDGLL Report',
    url: 'https://tableau.shopify.io/wdgll',
    description: 'Keep a pulse on engagement, growth, product adoption, and cross-sell metrics. Use WDGLL Dictionary on first page for definitions.',
  },
  {
    title: 'NRR Dashboard',
    url: 'https://tableau.shopify.io/nrr',
    description: 'Deep dive into revenue breakdown of your merchants and top revenue drivers',
  },
  {
    title: 'IPP Dashboard',
    url: 'https://tableau.shopify.io/ipp',
    description: 'Track individual IPP attainment per quarter for Closed Won opportunities',
  },
  {
    title: 'IPP Pipeline Dashboard',
    url: 'https://tableau.shopify.io/ipp-pipeline',
    description: 'Track MSQLs and Closed Won opportunities against quarterly targets',
  },
  {
    title: 'Post-Sales Dashboard',
    url: 'https://tableau.shopify.io/post-sales',
    description: 'Track merchant launches, engagement, success plans, and data hygiene',
  },
  {
    title: 'Mid-Market Scaled Tracker',
    url: 'https://docs.google.com/spreadsheets/[MMS-TRACKER]',
    description: 'Static tracker updated monthly - your compass for book prioritization',
  },
  {
    title: 'Copilot for MS',
    url: 'https://copilot.shopify.io',
    description: 'Real-time account details, NRR growth, and IPP opportunities - your GPS',
  },
];

// Important Notes
export const metricsNotes = [
  {
    title: "Logging Setup",
    message: "Review 'Logging for Customer Success Guru Card' to ensure your setup is accurate for proper metric tracking.",
    url: "https://vault.shopify.io/logging-setup",
  },
  {
    title: "High Engagement Priority",
    message: "Focus meetings on High Engagement merchants. Quarterly sync as default; monthly/bi-monthly only when business case justified.",
  },
  {
    title: "MSQLs vs Pipeline",
    message: "MSQLs remain important for assessment, but focus primarily on overall IPP pipeline. Don't waste energy on who creates the Opp - one team, one dream!",
  },
  {
    title: "Success Plans",
    message: "Number of active Success Plans should match plans updated in L90 with no overdue success outcomes. Focus on High Engagement merchants.",
  },
];

// Metric categories for organization
export const metricCategories = [
  {
    title: 'Performance Metrics',
    description: 'Merchant engagement and data quality fundamentals',
    metrics: corePerformanceMetrics,
    dashboardUrl: 'https://lookerstudio.google.com/u/0/reporting/29bb002d-9fbf-4118-905f-9b137420047a/page/p_io03wmt0td',
    dashboardName: 'Post-Sales Dashboard',
  },
  {
    title: 'Revenue & Pipeline',
    description: 'IPP targets and cross-sell opportunities',
    metrics: revenueMetrics,
    dashboardUrl: 'https://tableau.shopify.io/ipp-pipeline',
    dashboardName: 'AMER IPP Pipeline - MMS (Q4 2025)',
  },
  {
    title: 'Development & Contribution',
    description: 'Enablement, feedback, coaching, and impact sharing',
    metrics: developmentMetrics,
  },
];
