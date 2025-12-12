# MMS Team Handbook - Content Customization Guide

This guide helps you customize the content in the MMS Team Handbook to fit your team's specific needs.

## 📝 Content Files Overview

All content is stored in `src/data/` directory:

```
src/data/
├── missionVision.ts   # Mission, vision, values
├── metrics.ts         # KPIs and dashboard links
├── team.ts           # Team member directory
├── processes.ts      # Processes and playbooks
├── resources.ts      # Learning resources
└── faqs.ts          # Frequently asked questions
```

## 🎯 Priority Updates

Before deploying, update these critical items:

### 1. Vault Team Page Link

**File**: `src/data/missionVision.ts`

```typescript
vaultLink: {
  title: "View our Vault Team Page",
  url: "https://vault.shopify.io/teams/16865-CSM-MMS", // 👈 UPDATE THIS
}
```

**How to find your team ID**:
1. Go to your team's Vault page
2. Copy the ID from the URL: `vault.shopify.io/teams/12345-team-name`
3. Replace `[YOUR-TEAM-ID]` with `12345-team-name`

### 2. Dashboard Links

**File**: `src/data/metrics.ts`

Update placeholder dashboard URLs:

```typescript
dashboardUrl: 'https://tableau.shopify.io/dashboards/[DASHBOARD-ID]'
// 👆 Replace with actual Tableau/Mode dashboard links
```

**For each metric**:
- Ask your analytics team for dashboard URLs
- Or use your team's existing dashboard links
- Leave as `undefined` if no dashboard exists yet

### 3. Team Members

**File**: `src/data/team.ts`

Add your actual team members:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jane Smith',              // Real name
    role: 'Senior MMS',              // Actual role
    email: 'jane.smith@shopify.com', // Shopify email
    slackHandle: '@janesmith',       // Slack handle
    expertise: ['D2C', 'Fashion'],   // Areas of expertise
    manager: 'Sarah Johnson',        // Manager name
    vaultUrl: 'https://vault.shopify.io/users/[USER-ID]', // User's Vault page
  },
  // Add more team members...
];
```

**To find Vault user IDs**:
1. Search for the person on Vault
2. Copy their profile URL
3. Extract the ID: `vault.shopify.io/users/4889-jane-smith`

## 📊 Customizing Content Sections

### Mission & Vision

**File**: `src/data/missionVision.ts`

```typescript
export const missionVisionData = {
  mission: {
    title: "Our Mission",
    content: "Your team's mission statement here...",
  },
  vision: {
    title: "Our Vision",
    content: "Your team's vision here...",
  },
  values: [
    {
      title: "Value Name",
      description: "Description of this value...",
    },
    // Add more values
  ],
};
```

### Metrics & KPIs

**File**: `src/data/metrics.ts`

Add or modify metrics:

```typescript
{
  id: 'your-metric-id',
  name: 'Metric Name',
  description: 'What this metric measures',
  target: '≥ 75%',                   // Your target
  calculation: 'How it\'s calculated',
  dashboardUrl: 'https://...',       // Optional
}
```

### Processes & Playbooks

**File**: `src/data/processes.ts`

Add your team's processes:

```typescript
{
  id: 'process-id',
  title: 'Process Name',
  description: 'Brief description',
  steps: [
    {
      step: 1,
      title: 'Step Name',
      description: 'What to do in this step',
    },
    // More steps...
  ],
}
```

Add playbook links:

```typescript
export const playbooks = [
  {
    title: 'Playbook Name',
    description: 'What this playbook covers',
    url: 'https://vault.shopify.io/pages/playbook-page',
  },
];
```

### Tools & Systems

**File**: `src/pages/ToolsPage.tsx`

Update the `tools` array with your team's specific tools and Slack channels:

```typescript
{
  name: 'Tool Name',
  description: 'What this tool does',
  url: 'https://tool.shopify.io',
  guides: ['Guide 1', 'Guide 2'],
  channels: ['#slack-channel-1', '#slack-channel-2'],
}
```

### Learning Resources

**File**: `src/data/resources.ts`

Update links to your team's specific resources:

```typescript
vaultDocs: [
  {
    title: 'Resource Name',
    url: 'https://vault.shopify.io/...',
    description: 'What you\'ll find here',
  },
],
```

### FAQs

**File**: `src/data/faqs.ts`

Add questions specific to your team:

```typescript
{
  id: 'unique-id',
  question: 'Common question from team?',
  answer: 'Clear, concise answer.',
  category: 'Tools', // Use existing categories or create new ones
}
```

**FAQ Categories**:
- Tools
- Process
- Compensation
- Policy
- Resources
- Product
- Support
- Performance
- Learning

## 🎨 Customizing Pages

### Adding Content to Existing Pages

Most pages can be customized by editing their data files. For more complex changes, edit the page components in `src/pages/`.

**Example**: Adding a new section to Compensation page

1. Open `src/pages/CompensationPage.tsx`
2. Add a new `<Card>` component:

```typescript
<Card>
  <BlockStack gap="400">
    <Text as="h2" variant="headingLg">
      Your New Section
    </Text>
    <Text as="p" variant="bodyMd">
      Your content here...
    </Text>
  </BlockStack>
</Card>
```

### Adding New Pages

See README.md section "Adding New Pages" for complete instructions.

## 🔗 External Links Checklist

Review and update all external links:

- [ ] Vault team page
- [ ] Salesforce URL (if different from default)
- [ ] Tableau dashboards
- [ ] Mode Analytics reports
- [ ] Slack workspace URL
- [ ] Google Calendar link
- [ ] Time Away system URL
- [ ] Shopify University links
- [ ] Internal wiki/docs links

## 📋 Pre-Deployment Content Review

Before deploying, review each section:

### Home Page
- [ ] Recent Updates are current
- [ ] Important Links are correct
- [ ] Quick Links work

### Mission & Vision
- [ ] Mission statement reflects your team
- [ ] Values are accurate
- [ ] Vault link is correct

### Roles
- [ ] Role descriptions match your team
- [ ] Responsibilities are accurate
- [ ] Skills/competencies are relevant

### Metrics
- [ ] All metrics are relevant to your team
- [ ] Targets are current
- [ ] Dashboard links work
- [ ] Calculations are accurate

### Compensation
- [ ] Quota tiers match current policy
- [ ] Examples use realistic numbers
- [ ] People team link is correct

### Tools
- [ ] All tools your team uses are listed
- [ ] URLs are correct
- [ ] Slack channels are accurate
- [ ] Guides/docs are available

### PTO
- [ ] Policy matches Shopify policy
- [ ] Time Away link works
- [ ] Coverage protocol is clear

### Processes
- [ ] Processes match your workflow
- [ ] Steps are clear and actionable
- [ ] Playbook links work

### Resources
- [ ] Training links are current
- [ ] Vault docs are accessible
- [ ] External resources are relevant

### Team Directory
- [ ] All team members added
- [ ] Email addresses correct
- [ ] Slack handles accurate
- [ ] Expertise areas make sense
- [ ] Manager relationships correct

### FAQ
- [ ] Questions are actually common
- [ ] Answers are accurate
- [ ] Categories make sense
- [ ] No outdated information

## 🔄 Regular Maintenance

**Monthly**:
- Update team directory for new/departed members
- Verify external links still work
- Add new FAQs based on questions received

**Quarterly**:
- Update metrics targets
- Refresh compensation information
- Review and update processes
- Update Recent Updates on homepage

**Annually**:
- Comprehensive review of all content
- Update all screenshots if any
- Refresh learning resources
- Review and update role descriptions

## 💡 Tips for Good Content

1. **Be Concise**: Use bullet points, keep paragraphs short
2. **Be Specific**: Provide exact links, numbers, and examples
3. **Be Current**: Date-stamp information that changes
4. **Be Helpful**: Write from the perspective of a new team member
5. **Be Accurate**: Verify all information before publishing

## 🆘 Getting Help

If you need help customizing content:

1. Check this guide and README.md
2. Look at existing examples in data files
3. Ask in #help-quick on Slack
4. Reach out to whoever set up the app

---

**Last Updated**: December 2024


