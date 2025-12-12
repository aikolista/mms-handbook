# Quick Start Guide

Get the MMS Team Handbook running in under 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Code editor (VS Code recommended)

## Installation

```bash
# 1. Navigate to project directory
cd "/Users/aiko/Desktop/MMS Handbook"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser
# Visit http://localhost:3000
```

That's it! The app should now be running locally.

## First Steps

### 1. Explore the App

Navigate through all sections to see what's included:
- Home
- Mission & Vision
- Roles & Responsibilities
- Metrics & KPIs
- Incentive Compensation
- Tools & Systems
- PTO & Time Off
- Processes & Playbooks
- Learning Resources
- Team Directory
- FAQ

### 2. Customize Content

**Priority updates** (see CONTENT_GUIDE.md for details):

1. **Update Vault team page link**
   - File: `src/data/missionVision.ts`
   - Replace `[YOUR-TEAM-ID]` with your actual team ID

2. **Add team members**
   - File: `src/data/team.ts`
   - Replace placeholder members with your team

3. **Update dashboard links**
   - File: `src/data/metrics.ts`
   - Replace `[DASHBOARD-ID]` with actual dashboard IDs

4. **Customize mission & values**
   - File: `src/data/missionVision.ts`
   - Update mission, vision, and values to match your team

### 3. Test Locally

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Test at http://localhost:4173
```

### 4. Deploy to Quick

```bash
# Install Quick CLI (if not installed)
npm install -g @shopify/quick-cli

# Login to Quick
quick login

# Deploy
quick deploy
```

## Project Structure

```
mms-handbook/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # All page components
│   ├── data/             # Content (customize here!)
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── package.json          # Dependencies
├── quick.config.json     # Quick app config
├── README.md             # Full documentation
├── DEPLOYMENT.md         # Deployment guide
└── CONTENT_GUIDE.md      # Content customization guide
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Check TypeScript types
npm run lint         # Run ESLint
```

## Common Tasks

### Add a FAQ

Edit `src/data/faqs.ts`:

```typescript
{
  id: '16',
  question: 'Your question here?',
  answer: 'Your answer here.',
  category: 'Tools',
}
```

### Add a Team Member

Edit `src/data/team.ts`:

```typescript
{
  id: '4',
  name: 'New Person',
  role: 'MMS',
  email: 'person@shopify.com',
  slackHandle: '@person',
  expertise: ['B2B', 'Retail'],
  manager: 'Manager Name',
}
```

### Update a Metric

Edit `src/data/metrics.ts`:

```typescript
{
  id: 'new-metric',
  name: 'Metric Name',
  description: 'What it measures',
  target: '≥ 80%',
  calculation: 'Formula here',
  dashboardUrl: 'https://...',
}
```

## Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Check for errors
npm run type-check

# Fix errors in reported files
```

## Next Steps

1. ✅ Install and run locally
2. ✅ Explore all sections
3. ✅ Customize content (CONTENT_GUIDE.md)
4. ✅ Test thoroughly
5. ✅ Deploy to Quick (DEPLOYMENT.md)
6. ✅ Share with team

## Getting Help

- **Full Documentation**: See README.md
- **Content Updates**: See CONTENT_GUIDE.md
- **Deployment**: See DEPLOYMENT.md
- **Slack Support**: #help-quick

## What's Included

✅ 11 complete sections with sample content
✅ Polaris design system integration
✅ Responsive layout
✅ Search functionality (FAQ, Team Directory)
✅ Easy content management
✅ TypeScript for type safety
✅ Quick deployment configuration
✅ Comprehensive documentation

---

**Time to get started**: ~5 minutes  
**Time to customize**: ~1-2 hours  
**Time to deploy**: ~10 minutes

Good luck! 🚀


