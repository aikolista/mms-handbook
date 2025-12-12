# MMS Team Handbook

A comprehensive team resource hub built for Shopify's Quick platform. This application provides the MMS team with easy access to mission, vision, processes, metrics, tools, and resources.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Shopify Polaris** design system
- **React Router** for navigation
- **Vite** for fast development and building

## 📋 Features

### Core Sections

1. **Home** - Quick links and recent updates
2. **Mission & Vision** - Team purpose, values, and operating principles
3. **Roles & Responsibilities** - Role descriptions and career progression
4. **Metrics & KPIs** - Performance indicators and targets
5. **Incentive Compensation** - Compensation structure and quota tiers
6. **Tools & Systems** - Access to Salesforce, Tableau, and other tools
7. **PTO & Time Off** - Time off policies and request process
8. **Processes & Playbooks** - Step-by-step guides for deal execution
9. **Learning Resources** - Training materials and documentation
10. **Team Directory** - Searchable team member directory
11. **FAQ** - Frequently asked questions with search and filtering

### Key Features

- ✅ Polaris-based UI for consistency with Shopify internal tools
- ✅ Responsive layout works on desktop and mobile
- ✅ Search functionality across FAQs and team directory
- ✅ Filtering and categorization
- ✅ External links to Vault, Salesforce, Tableau, and other tools
- ✅ Easy content management via JSON/TypeScript data files

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm/yarn
- Access to Shopify internal network (for deployment to Quick)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Project Structure

```
mms-handbook/
├── src/
│   ├── components/
│   │   └── Navigation.tsx       # Main navigation component
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx
│   │   ├── MissionVisionPage.tsx
│   │   ├── RolesPage.tsx
│   │   ├── MetricsPage.tsx
│   │   ├── CompensationPage.tsx
│   │   ├── ToolsPage.tsx
│   │   ├── PTOPage.tsx
│   │   ├── ProcessesPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── TeamDirectoryPage.tsx
│   │   └── FAQPage.tsx
│   ├── data/                    # Content data files
│   │   ├── missionVision.ts
│   │   ├── metrics.ts
│   │   ├── team.ts
│   │   ├── processes.ts
│   │   ├── resources.ts
│   │   └── faqs.ts
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── quick.config.json            # Quick app configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 📝 Content Management

Content is managed through TypeScript/JSON files in the `src/data/` directory. This makes it easy to update content without touching component code.

### Updating Content

1. **Mission & Vision** - Edit `src/data/missionVision.ts`
2. **Metrics** - Edit `src/data/metrics.ts`
3. **Team Directory** - Edit `src/data/team.ts`
4. **Processes** - Edit `src/data/processes.ts`
5. **Resources** - Edit `src/data/resources.ts`
6. **FAQs** - Edit `src/data/faqs.ts`

### Adding New Content

```typescript
// Example: Adding a new FAQ
// In src/data/faqs.ts

export const faqs: FAQ[] = [
  // ... existing FAQs
  {
    id: '16',
    question: 'Your new question here?',
    answer: 'Your answer here.',
    category: 'Process', // Use existing categories
  },
];
```

## 🚢 Deployment to Quick

### Building for Production

```bash
# Type check
npm run type-check

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Quick

1. **Ensure you have Quick CLI installed**
   ```bash
   # Install Quick CLI (if not already installed)
   npm install -g @shopify/quick-cli
   ```

2. **Login to Quick**
   ```bash
   quick login
   ```

3. **Deploy the app**
   ```bash
   # From project root
   quick deploy
   ```

4. **Verify deployment**
   - Visit Quick app directory: https://quick.shopify.io
   - Find "MMS Team Handbook" in your apps
   - Test all sections and links

### Quick Configuration

The `quick.config.json` file configures the app for Quick:

```json
{
  "name": "mms-handbook",
  "displayName": "MMS Team Handbook",
  "description": "Comprehensive resource hub for the MMS team",
  "version": "1.0.0",
  "appType": "web",
  "framework": "react",
  "permissions": [],
  "routes": {
    "main": "/"
  },
  "healthCheck": {
    "path": "/health"
  }
}
```

### Environment-Specific Configuration

If you need different configurations for staging/production:

1. Create `.env.development` and `.env.production` files
2. Use environment variables in your code:
   ```typescript
   const API_URL = import.meta.env.VITE_API_URL;
   ```

## 🔗 Updating External Links

Many pages link to external Shopify tools. Update these in the data files:

- **Vault URLs** - Update team page ID in `missionVision.ts`
- **Salesforce** - Links in `ToolsPage.tsx`
- **Tableau/Mode dashboards** - Update in `metrics.ts`
- **Slack channels** - Update in `ToolsPage.tsx`

### Example: Updating Vault Team Page Link

```typescript
// In src/data/missionVision.ts
export const missionVisionData = {
  // ...
  vaultLink: {
    title: "View our Vault Team Page",
    url: "https://vault.shopify.io/teams/YOUR-ACTUAL-TEAM-ID", // Update this!
  },
};
```

## 🎨 Customization

### Adding New Pages

1. **Create page component**
   ```typescript
   // src/pages/NewPage.tsx
   import { Page, Layout, Card, Text } from '@shopify/polaris';

   export default function NewPage() {
     return (
       <Page title="New Page">
         {/* Your content */}
       </Page>
     );
   }
   ```

2. **Add route to App.tsx**
   ```typescript
   import NewPage from './pages/NewPage';
   // ...
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add to navigation**
   ```typescript
   // In src/components/Navigation.tsx
   {
     url: '/new-page',
     label: 'New Page',
     icon: YourIcon,
     selected: location === '/new-page',
     onClick: () => onNavigate('/new-page'),
   }
   ```

### Styling

The app uses Polaris components exclusively, which ensures consistency with other Shopify internal tools. Polaris handles:

- Typography
- Colors and themes
- Spacing and layout
- Accessibility (WCAG compliant)

If you need custom styles, use inline styles or CSS modules sparingly.

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### Polaris Import Issues

Make sure you're importing from the correct Polaris packages:

```typescript
import { Component } from '@shopify/polaris';
import { Icon } from '@shopify/polaris-icons';
```

### Quick Deployment Issues

- Ensure you're on Shopify internal network
- Check Quick CLI is up to date: `npm update -g @shopify/quick-cli`
- Verify `quick.config.json` is valid
- Check Quick logs for errors

## 📚 Additional Resources

- [Polaris Documentation](https://polaris.shopify.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Quick Platform Documentation](https://quick.shopify.io/docs) (Internal)

## 🤝 Contributing

### Making Updates

1. Create a branch for your changes
2. Update content in data files or add new components
3. Test locally with `npm run dev`
4. Build and verify: `npm run build && npm run preview`
5. Deploy to Quick: `quick deploy`

### Content Guidelines

- Keep content concise and actionable
- Use bullet points for easy scanning
- Link to authoritative sources (Vault, official docs)
- Update dates and metrics regularly
- Test all external links periodically

## 📞 Support

For questions or issues:
- **Technical Issues**: #help-it on Slack
- **Content Updates**: Reach out to team manager
- **Quick Platform**: #help-quick on Slack

## 📄 License

Internal Shopify tool - not for external distribution.

---

**Last Updated**: December 2024  
**Maintained By**: MMS Team


