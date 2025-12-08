// Homepage announcements configuration
export interface Announcement {
  id: string;
  title: string;
  message: string;
  tone: 'success' | 'info' | 'warning' | 'critical';
  action?: {
    content: string;
    url: string;
  };
  dismissible?: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 'mms-cheatsheet-updated',
    title: 'MMS Cheatsheet Content Updated - July 2025',
    message: 'The handbook has been updated with the latest MMS-specific guidelines, metrics, compensation, and tools. Review all sections for updated information.',
    tone: 'success',
    action: {
      content: 'View Metrics',
      url: '/metrics',
    },
    dismissible: true,
  },
  {
    id: 'wdgll-metrics-updated',
    title: 'All WDGLL Metrics Now in Handbook',
    message: 'Complete metrics breakdown including engagement (60% meetings, 100% engaged), data hygiene, enablement, and IPP targets now available.',
    tone: 'info',
    action: {
      content: 'View All Metrics',
      url: '/metrics',
    },
    dismissible: true,
  },
  // Add more announcements here as needed
];

// Recent updates for the homepage
export const recentUpdates = [
  {
    title: 'Q4 Compensation Structure',
    description: 'Updated quota attainment tiers',
    date: 'Dec 2024',
  },
  {
    title: 'New Metrics Dashboard',
    description: 'Access Tableau dashboards',
    date: 'Dec 2024',
  },
  {
    title: 'Team Onboarding Guide',
    description: 'Updated for new hires',
    date: 'Nov 2024',
  },
];

