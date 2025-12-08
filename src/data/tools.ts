export interface Tool {
  name: string;
  description: string;
  url?: string;
  category: string;
  isComingSoon?: boolean;
  slackWorkflow?: boolean;
}

export const mmsTools: Tool[] = [
  // Core MMS Tools
  {
    name: "Mid-Market Scaled Tracker",
    description: "Your compass for book prioritization. Static tracker updated monthly to review prioritization across your book.",
    url: "https://lookerstudio.google.com/u/0/reporting/caab164b-c022-4903-be9d-22dd904e2b43/page/tEnnC",
    category: "Core MMS Tools",
  },
  {
    name: "Copilot for MS",
    description: "Your GPS for real-time account details, NRR growth opportunities, and IPP identification. If MMS tracker is a compass, Copilot is your GPS.",
    url: "https://revenue-funnel.shopify.io/copilot/accounts?accounts=Default&actions=Default&book=default&contacts=Default&shops=Default",
    category: "Core MMS Tools",
  },
  {
    name: "Segmentation Tracker",
    description: "Clean up engagement and risk levels at the beginning of each quarter. Use it to slice and dice your book for various outreach initiatives.",
    url: "https://lookerstudio.google.com/u/0/reporting/bb66f92e-71ae-43de-a594-806dda2244e0/page/tEnnC",
    category: "Core MMS Tools",
  },

  // Analytics & Reporting
  {
    name: "Post-Sales Dashboard",
    description: "Track merchant launches, engagement, success plans, and data hygiene metrics.",
    url: "https://lookerstudio.google.com/u/0/reporting/29bb002d-9fbf-4118-905f-9b137420047a/page/p_io03wmt0td",
    category: "Analytics & Dashboards",
  },
  {
    name: "Pipeline Dashboard",
    description: "Track MSQL breakdown (Customer Success Qualified Leads) and Closed Won opportunities as they relate to quarterly targets.",
    url: "https://banff.lightning.force.com/lightning/r/Dashboard/01ZOG000002iclB2AQ/view?queryScope=userFolders",
    category: "Analytics & Dashboards",
  },

  // Merchant Engagement Tools
  {
    name: "Merchant Call Prep Assistant",
    description: "Gather context around merchant updates and site optimization recommendations before calls.",
    url: "https://tools.shopify.io/call-prep",
    category: "Merchant Engagement",
  },
  {
    name: "AI Store Audit Assistant",
    description: "Identify high-impact CRO opportunities and create actionable growth plans for merchant stores.",
    url: "https://tools.shopify.io/store-audit",
    category: "Merchant Engagement",
  },
  {
    name: "App Explorer",
    description: "Review a merchant's tech stack and browse popular apps by categories.",
    url: "https://apps.shopify.io/explore",
    category: "Merchant Engagement",
  },
  {
    name: "Onboarding Tracker",
    description: "Identify gaps in a merchant's onboarding journey and track completion.",
    url: "https://tools.shopify.io/onboarding-tracker",
    category: "Merchant Engagement",
  },

  // Cheat Sheets & Resources
  {
    name: "CS x XS - Pipeline & Product Cheat Sheet",
    description: "One-stop shop for best practices related to Opportunity management and Product Valuation.",
    url: "https://vault.shopify.io/cs-xs-cheatsheet",
    category: "Cheat Sheets",
  },
  {
    name: "CS x SE Cheat Sheet",
    description: "Best practices for working with Sales Engineers (coming soon).",
    category: "Cheat Sheets",
    isComingSoon: true,
  },
  {
    name: "D2C Building Blocks",
    description: "Framework and resources for D2C merchant engagement (coming soon).",
    category: "Cheat Sheets",
    isComingSoon: true,
  },

  // Team Collaboration
  {
    name: "Merchant Story Workflow",
    description: "Submit merchant wins via Slack workflow. Share at least 1 merchant story every month to promote great stories for our segment.",
    url: "https://slack.com/shortcuts/Ft07EX7XHAH1/8d95afcc6cdc595643292db37613ecaa",
    category: "Team Collaboration",
    slackWorkflow: true,
  },

  // CRM & Sales Tools
  {
    name: "Salesforce",
    description: "Primary CRM for managing pipeline, opportunities, accounts, and logging merchant interactions.",
    url: "https://banff.lightning.force.com/lightning/",
    category: "CRM & Sales",
  },
  {
    name: "Salesloft",
    description: "Record calls and meetings for coaching. Target: 80% of calls/meetings recorded.",
    url: "https://app.salesloft.com/app/dashboard",
    category: "CRM & Sales",
  },

  // Enablement
  {
    name: "Seismic Learning",
    description: "Browse learning content and complete required courses/tracks to stay up-to-date with product knowledge.",
    url: "https://shopify.seismic.com/apps/home",
    category: "Enablement",
  },
];

export const slackChannels = [
  {
    name: "#ms-na-midmarket-scaled",
    description: "Our 'source of truth' for key announcements, collaborative communications, and saying good morning!",
    url: "https://shopify.enterprise.slack.com/archives/C03QXQXQXQX",
    isPrimary: true,
  },
  {
    name: "#help-salesforce",
    description: "Salesforce support and questions",
    url: "https://shopify.enterprise.slack.com/archives/help-salesforce",
  },
  {
    name: "#product-questions",
    description: "Product-related inquiries and updates",
    url: "https://shopify.enterprise.slack.com/archives/product-questions",
  },
  {
    name: "#help-it",
    description: "IT support for tool access and technical issues",
    url: "https://shopify.enterprise.slack.com/archives/help-it",
  },
];

export const toolCategories = [
  "Core MMS Tools",
  "Analytics & Dashboards",
  "Merchant Engagement",
  "Cheat Sheets",
  "Team Collaboration",
  "CRM & Sales",
  "Enablement",
];

// Helper to organize tools by category
export const getToolsByCategory = (category: string) => {
  return mmsTools.filter(tool => tool.category === category);
};

