import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I access Salesforce?',
    answer: 'Visit https://shopify.my.salesforce.com and log in with your Shopify SSO. If you don\'t have access, contact IT via Slack (#help-it).',
    category: 'Tools',
  },
  {
    id: '2',
    question: 'What qualifies as an IPP (Ideal Profile) merchant?',
    answer: 'IPP merchants typically have: $1M+ in annual GMV, high-growth potential, good product-market fit, and alignment with Shopify\'s target industries. See the Metrics page for detailed criteria.',
    category: 'Process',
  },
  {
    id: '3',
    question: 'How is my quota calculated?',
    answer: 'Quota is based on new ARR (Annual Recurring Revenue) from merchant subscriptions. Your individual quota is set quarterly based on segment and territory. See Compensation page for details.',
    category: 'Compensation',
  },
  {
    id: '4',
    question: 'When should I escalate a deal to my manager?',
    answer: 'Escalate when: deal value exceeds $X, you need pricing flexibility, merchant is requesting executive engagement, or you encounter a blocker you can\'t resolve. Always provide context.',
    category: 'Process',
  },
  {
    id: '5',
    question: 'How do I request time off?',
    answer: 'Submit your request in the Time Away system, notify your manager, update the team calendar, and arrange coverage for your merchants. See PTO page for full details.',
    category: 'Policy',
  },
  {
    id: '6',
    question: 'Where can I find product documentation?',
    answer: 'Product docs are on Vault (vault.shopify.io/products). For specific products, check the Resources page or ask in #product-questions on Slack.',
    category: 'Resources',
  },
  {
    id: '7',
    question: 'How often should I update Salesforce?',
    answer: 'Update Salesforce in real-time or at minimum daily. Log all merchant interactions, update opportunity stages immediately, and keep next steps current.',
    category: 'Tools',
  },
  {
    id: '8',
    question: 'What\'s the difference between Plus and Enterprise?',
    answer: 'Plus is our standard high-volume plan ($2,000/mo starting). Enterprise (Shopify for Enterprise) is for large-scale merchants with custom needs, dedicated support, and premium features. See product docs for full comparison.',
    category: 'Product',
  },
  {
    id: '9',
    question: 'How do I handle a merchant escalation?',
    answer: 'First, try to resolve yourself. If unable, consult the team in Slack. Still stuck? Escalate to your manager with full context. See Processes page for escalation procedure.',
    category: 'Process',
  },
  {
    id: '10',
    question: 'Where do I find competitor information?',
    answer: 'Competitive intel is on Vault under Sales Resources. For specific questions, ask in #competitive-intel on Slack.',
    category: 'Resources',
  },
  {
    id: '11',
    question: 'How is commission paid out?',
    answer: 'Commission is calculated quarterly based on quota attainment and paid in the following month. See Compensation page for tier breakdown.',
    category: 'Compensation',
  },
  {
    id: '12',
    question: 'Who do I contact for technical support?',
    answer: 'For your own tools/access: #help-it. For merchant technical issues: create a support ticket and escalate via #merchant-support if urgent.',
    category: 'Support',
  },
  {
    id: '13',
    question: 'How many merchant meetings should I have per week?',
    answer: 'Target is 10+ meaningful merchant meetings per week. Quality matters more than quantity - focus on qualified opportunities.',
    category: 'Performance',
  },
  {
    id: '14',
    question: 'Where is the team calendar?',
    answer: 'The MMS team calendar is in Google Calendar. Subscribe to it to see team PTO and important events.',
    category: 'Tools',
  },
  {
    id: '15',
    question: 'How do I become certified in Shopify products?',
    answer: 'Visit Shopify University (shopify.university/certifications) to access certification programs. Recommended certifications are listed on the Resources page.',
    category: 'Learning',
  },
];

export const faqCategories = [
  'All',
  'Tools',
  'Process',
  'Compensation',
  'Policy',
  'Resources',
  'Product',
  'Support',
  'Performance',
  'Learning',
];


