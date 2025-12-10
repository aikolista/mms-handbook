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
    name: 'Unique Merchant Meetings L90',
    description: 'The percentage of unique merchants that should have had a meeting in the last 90 days. Focus on High Engagement merchants with quarterly sync as default; monthly/bi-monthly only when business case justified.',
    target: '≥ 60%',
    calculation: '(Merchants with meetings L90 / Total merchants) × 100',
  },
  {
    id: 'meetings-per-week',
    name: 'Meetings Per Week',
    description: 'The average number of merchant meetings per week',
    target: '≥ 15/week',
    calculation: 'Total merchant meetings / Number of weeks',
  },
  {
    id: 'merchants-engaged-l90',
    name: 'Merchants Engaged L90',
    description: 'The percentage of merchants that should be engaged (email, call, or meeting) within 90 days. If merchant never responded to email or no meeting in L90, must have attempted a Call.',
    target: '100%',
  },
  {
    id: 'salesloft-recording',
    name: 'Calls/Meetings Recorded',
    description: 'The percentage of merchant calls and meetings in Salesloft for coaching and insights',
    target: '≥ 80%',
  },
  // Data Quality
  {
    id: 'risk-profile',
    name: 'Completed Risk Profiles',
    description: 'The percentage of merchants that have a completed Risk Profile',
    target: '100%',
  },
  {
    id: 'merchant-overview',
    name: 'Completed Merchant Overview',
    description: 'The percentage of merchants that have a completed Merchant Overview (Account Plan)',
    target: '100%',
  },
  {
    id: 'success-plans',
    name: 'Live Success Plans',
    description: 'The percentage of merchants that have a Live Success Plan. Success Plans track important milestones that help merchants grow. Focus on High Engagement merchants. Active plans should match plans updated in L90 with no overdue outcomes.',
    target: '≥ 30%',
  },
  {
    id: 'primary-contact',
    name: 'Primary Contact',
    description: 'The percentage of merchants that have a Primary Contact listed in Salesforce.',
    target: '100%',
  },
  {
    id: 'key-decision-maker',
    name: 'Key Decision Maker Contact',
    description: 'The percentage of merchants that have a Key Decision Maker or Executive/Senior Leader as a Contact.',
    target: '100%',
  },
];

// Revenue & Pipeline Metrics
export const revenueMetrics: Metric[] = [
  {
    id: 'ipp-weekly',
    name: 'Weekly IPP Pipeline',
    description: 'Potential Incremental Product Profit pipeline per week',
    target: '$TBD',
  },
  {
    id: 'ipp-weekly-d2c',
    name: 'Weekly D2C IPP Pipeline',
    description: 'D2C-specific potential IPP per week',
    target: '$TBD',
  },
  {
    id: 'ipp-quarterly',
    name: 'Quarterly IPP Pipeline',
    description: 'Potential Incremental Product Profit pipeline per quarter',
    target: '$TBD',
  },
  {
    id: 'ipp-quarterly-d2c',
    name: 'Quarterly D2C IPP Pipeline',
    description: 'D2C-specific potential IPP per quarter',
    target: '$TBD',
  },
  {
    id: 'ipp-won-stretch',
    name: 'IPP Won Per Quarter (Stretch Goal)',
    description: 'D2C Cross-Sell stretch goal of $100K IPP Won per CSM per quarter for actual closed/won IPP. MSQLs remain important for assessment, but focus primarily on overall IPP pipeline (one team, one dream!).',
    target: '$TBD',
  },
];

// Development & Contribution Metrics
export const developmentMetrics: Metric[] = [
  {
    id: 'seismic-completion',
    name: 'Seismic Enablement Completed',
    description: 'The percentage of Seismic courses and tracks that have been completed within the month they were assigned.',
    target: '100%',
    dashboardUrl: 'https://seismic.shopify.io',
  },
  {
    id: 'product-feedback',
    name: 'Product Feedback Submissions',
    description: 'Number of product feedback submissions in Salesforce. Important measurement of MS driving product insights and influencing product roadmaps via One List initiative.',
    target: '≥ 10/month',
  
  },
  {
    id: 'merchant-stories',
    name: 'Merchant Story Submissions',
    description: 'Number of merchant stories submitted via Slack workflow to celebrate wins and share impact',
    target: '1 story/month',
  },
];

// Dashboard and Resource Links
export const metricsDashboards = [

  {
    title: '💰 NRR/IPP Hub',
    url: 'https://lookerstudio.google.com/u/0/reporting/29bb002d-9fbf-4118-905f-9b137420047a/page/p_8cb59qnmud',
    description: 'Deep dive into revenue breakdown of your merchants and top revenue drivers, and track individual IPP attainment per quarter for Closed Won opportunities',
  },
  
  {
    title: '📈 IPP Pipeline Dashboard',
    url: 'https://banff.lightning.force.com/lightning/r/Dashboard/01ZOG000002iclB2AQ/view?queryScope=userFolders',
    description: 'Track MSQLs and Closed Won opportunities against quarterly targets',
  },
  {
    title: '👥 Accounts Hub',
    url: 'https://lookerstudio.google.com/u/0/reporting/29bb002d-9fbf-4118-905f-9b137420047a/page/p_pjlza0lmud',
    description: 'Track merchant launches, engagement, success plans, and data hygiene',
  },
  {
    title: '🎯 Opportunities Hub',
    url: 'https://lookerstudio.google.com/u/0/reporting/29bb002d-9fbf-4118-905f-9b137420047a/page/p_59h6e6lmud',
    description: 'Track merchant launches, engagement, success plans, and data hygiene',
  },
  {
    title: '📍 Mid-Market Scaled Tracker',
    url: 'https://docs.google.com/spreadsheets/[MMS-TRACKER]',
    description: 'Static tracker updated monthly - your compass for book prioritization',
  },
  {
    title: '🧭 Copilot for MS',
    url: 'https://revenue-funnel.shopify.io/copilot/accounts?accounts=Default&actions=Default&book=default&contacts=Default&shops=Default',
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
