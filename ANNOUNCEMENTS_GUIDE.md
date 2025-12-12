# Managing Homepage Announcements

The homepage now features a configurable announcements banner system that you can easily update.

## 📍 Location

All announcements are managed in: `src/data/announcements.ts`

## 🎨 Announcement Types (Tones)

Announcements support four visual styles:

- **`success`** (green) - Positive news, launches, wins
- **`info`** (blue) - General information, updates
- **`warning`** (yellow) - Important notices, upcoming changes
- **`critical`** (red) - Urgent issues, critical updates

## ✏️ Adding a New Announcement

Edit `src/data/announcements.ts`:

```typescript
export const announcements: Announcement[] = [
  {
    id: 'unique-announcement-id',           // Unique identifier
    title: 'Your Announcement Title',       // Bold title
    message: 'Your detailed message here.', // Description
    tone: 'info',                           // success | info | warning | critical
    action: {                               // Optional button
      content: 'Button Text',
      url: '/metrics',                      // Internal path or external URL
    },
    dismissible: true,                      // Can users dismiss it?
  },
  // Add more announcements...
];
```

## 📝 Examples

### Team Meeting Announcement
```typescript
{
  id: 'all-hands-jan-2025',
  title: 'All Hands Meeting - January 15th',
  message: 'Join us for our quarterly all-hands meeting. Agenda and Zoom link in Slack.',
  tone: 'info',
  dismissible: true,
}
```

### New Feature Launch
```typescript
{
  id: 'new-dashboard-launch',
  title: 'New Analytics Dashboard Live!',
  message: 'Check out our redesigned metrics dashboard with real-time data.',
  tone: 'success',
  action: {
    content: 'View Dashboard',
    url: '/metrics',
  },
  dismissible: true,
}
```

### System Maintenance
```typescript
{
  id: 'maintenance-jan-10',
  title: 'Scheduled Maintenance',
  message: 'Salesforce will be unavailable on Jan 10, 2-4 AM EST for maintenance.',
  tone: 'warning',
  dismissible: false,  // Can't dismiss - important!
}
```

### Urgent Notice
```typescript
{
  id: 'urgent-policy-change',
  title: 'Action Required: Update Your PTO Requests',
  message: 'Due to new policy, all pending PTO requests must be resubmitted by Friday.',
  tone: 'critical',
  action: {
    content: 'Submit PTO',
    url: 'https://time-away.shopify.io',
  },
  dismissible: false,
}
```

## 🔄 Managing Multiple Announcements

You can have multiple announcements at once. They'll stack vertically at the top of the homepage:

```typescript
export const announcements: Announcement[] = [
  {
    id: 'urgent-1',
    title: 'Urgent: System Outage',
    message: 'Tableau is currently down. Updates in #help-it',
    tone: 'critical',
    dismissible: false,
  },
  {
    id: 'info-1',
    title: 'Q1 Goals Now Available',
    message: 'Check the Metrics page for updated Q1 targets.',
    tone: 'info',
    action: {
      content: 'View Goals',
      url: '/metrics',
    },
    dismissible: true,
  },
];
```

## 🗑️ Removing Announcements

To remove an announcement:
1. Open `src/data/announcements.ts`
2. Delete the entire announcement object
3. Save the file

Or comment it out:
```typescript
// {
//   id: 'old-announcement',
//   title: 'Old News',
//   message: 'This is outdated.',
//   tone: 'info',
// },
```

## 🎯 Best Practices

### DO:
✅ Keep titles short and clear (< 50 characters)  
✅ Make messages concise and actionable  
✅ Use appropriate tone for urgency  
✅ Set `dismissible: false` for critical info  
✅ Remove old announcements regularly  
✅ Use action buttons for next steps  

### DON'T:
❌ Use critical tone for routine updates  
❌ Stack more than 3-4 announcements  
❌ Leave outdated announcements active  
❌ Forget to test links before deploying  

## 🔗 Link Types

### Internal Links (within the app)
```typescript
action: {
  content: 'View Page',
  url: '/metrics',  // No https://, starts with /
}
```

### External Links
```typescript
action: {
  content: 'Open Salesforce',
  url: 'https://shopify.my.salesforce.com',  // Full URL
}
```

## 📅 Recent Updates Section

The "Recent Updates" section is also in `announcements.ts`:

```typescript
export const recentUpdates = [
  {
    title: 'Update Title',
    description: 'Brief description',
    date: 'Dec 2024',
  },
  // Add more updates...
];
```

Keep the 3 most recent updates here.

## 🚀 After Making Changes

1. Save `src/data/announcements.ts`
2. The dev server auto-reloads (if running)
3. Or rebuild and redeploy:
   ```bash
   npm run build
   quick deploy
   ```

## 💡 Tips

- **Seasonal announcements**: Update for holidays, quarters, etc.
- **Event reminders**: Add week before team events
- **Policy changes**: Use warning/critical tone
- **Wins & launches**: Use success tone to celebrate
- **Maintenance windows**: Post in advance with warning tone

---

**Last Updated**: December 2024


