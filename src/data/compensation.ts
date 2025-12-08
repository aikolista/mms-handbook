export const compensationStructure = {
  payMix: {
    base: 80,
    incentive: 20,
    description: "Just like all other CSM roles at Shopify, the pay mix is 80/20 (80% base salary + 20% incentive compensation).",
  },
  incentiveSplit: {
    nrr: 100,
    ipp: 0,
    description: "The 20% incentive compensation is 100% based on Net Revenue Retention (NRR).",
  },
  quotaType: "Individual quotas (i.e. individual targets)",
  payoutFactors: [
    "Attainment percentage against individual NRR quota",
    "Overall quota attainment determines payout tier",
  ],
};

export const compensationResources = [
  {
    title: "Revenue Compensation Hub",
    url: "https://vault.shopify.io/revenue-compensation-hub",
    description: "Complete compensation structure and policies",
  },
  {
    title: "Revenue Compensation Guide",
    url: "https://vault.shopify.io/revenue-compensation-guide",
    description: "Detailed guide on how compensation is calculated",
  },
];

export const quotaTiers = [
  ['0-50%', '0%', 'Below threshold - no payout'],
  ['50-75%', '50%', 'Partial payout begins'],
  ['75-100%', '75-100%', 'Proportional to attainment'],
  ['100-125%', '100-125%', 'Full payout + accelerator'],
  ['125%+', '125%+', 'Maximum accelerator'],
];

