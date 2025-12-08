export interface Meeting {
  id: string;
  title: string;
  frequency: string;
  attendees: string;
  description: string;
  agenda: string[];
}

export const meetings: Meeting[] = [
  {
    id: '1-on-1',
    title: '1:1 with Your Lead',
    frequency: 'Weekly or Bi-Weekly',
    attendees: 'You + Your Lead',
    description: 'Regular check-ins to discuss your performance, blockers, and development',
    agenda: [
      'Review of the past week\'s achievements',
      'Discussion of any blockers or challenges',
      'Coaching and development opportunities',
      'Goal setting and accountability',
      'Open discussion topics',
    ],
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    frequency: 'Weekly or Bi-Weekly',
    attendees: 'Your direct team peers + Lead',
    description: 'Team sync organized by your Lead to align on goals and share learnings',
    agenda: [
      'Review of the past week\'s achievements and metrics',
      'Updates on ongoing projects',
      'Team announcements and administrative updates',
      'Open floor for team suggestions and concerns',
      'Knowledge sharing and best practices',
    ],
  },
  {
    id: 'segment-meeting',
    title: 'Segment Meeting',
    frequency: 'Weekly or Bi-Weekly',
    attendees: 'All Mid-Market Scaled team members + Segment Leads',
    description: 'Segment-wide meeting organized by segment leads. Agenda changes each week over the month.',
    agenda: [
      'Pulse check on what\'s top-of-mind across the segment',
      'State of the business review',
      'Product and ROE updates',
      'Team announcements and administrative updates',
      'Open floor for team suggestions and concerns',
    ],
  },
  {
    id: 'town-hall',
    title: 'Mid-Market Town Hall',
    frequency: 'Monthly',
    attendees: 'Mid-Market Scaled + Mid-Market Assigned team members',
    description: 'Monthly all-hands meeting for the entire Mid-Market organization',
    agenda: [
      'Leadership updates and strategic direction',
      'Performance review and key metrics',
      'Cross-team collaboration opportunities',
      'Product updates and roadmap',
      'Recognition and celebrations',
    ],
  },
];

export const meetingBestPractices = [
  'Add discussion topics ahead of time in Fellow',
  'Use Fellow to keep track of follow-up items',
  'Reference Google Meet recordings to catch up on missed meetings',
  'Come prepared with specific questions or topics',
  'Share wins and learnings with the team',
  'Be present and engaged during meetings',
];

export const fellowInfo = {
  name: 'Fellow',
  description: 'Our default meeting assistant tool for all team meetings',
  features: [
    'Add discussion topics ahead of time',
    'Track follow-up items and action plans',
    'Access meeting recordings via Google Meet',
    'Catch up on missed meetings',
    'Share agendas with participants',
  ],
  url: 'https://fellow.app',
};

export const meetingPhilosophy = {
  title: 'Our Meeting Philosophy',
  description: 'Like the rest of Shopify, we aim to keep meetings productive and impactful.',
  principles: [
    'Every meeting should have a clear purpose and agenda',
    'Come prepared to maximize the time together',
    'Be respectful of everyone\'s time',
    'End with clear next steps and action items',
    'If you can\'t attend, catch up via Google Meet recordings',
  ],
};

