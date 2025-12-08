# MMS Handbook - Deployment Guide

Complete guide for deploying the MMS Team Handbook to Shopify's Quick platform.

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Access to Shopify internal network
- ✅ Quick CLI installed (`npm install -g @shopify/quick-cli`)
- ✅ Authentication with Quick platform
- ✅ Permissions to deploy apps to Quick

## Pre-Deployment Checklist

### 1. Update Content

Before deploying, review and update all placeholder content:

- [ ] Update Vault team page URL in `src/data/missionVision.ts`
- [ ] Update Tableau/Mode dashboard links in `src/data/metrics.ts`
- [ ] Add actual team members in `src/data/team.ts`
- [ ] Verify Salesforce links in `src/pages/ToolsPage.tsx`
- [ ] Update Slack channel references
- [ ] Review and customize FAQs in `src/data/faqs.ts`

### 2. Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test in browser at http://localhost:3000
# ✅ Check all navigation links work
# ✅ Test search functionality in FAQ
# ✅ Verify team directory filtering
# ✅ Test external links (they should open in new tabs)
```

### 3. Lint and Type Check

```bash
# Type checking
npm run type-check

# If there are TypeScript errors, fix them before proceeding
```

### 4. Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Test the production build at http://localhost:4173
```

## Deployment Steps

### Step 1: Install Quick CLI

If you haven't already installed the Quick CLI:

```bash
npm install -g @shopify/quick-cli

# Verify installation
quick --version
```

### Step 2: Authenticate with Quick

```bash
quick login

# Follow the authentication prompts
# This will open a browser for SSO authentication
```

### Step 3: Initialize Quick App (First Time Only)

If this is your first deployment:

```bash
# From project root
quick init

# Answer the prompts:
# - App name: mms-handbook
# - Display name: MMS Team Handbook
# - Description: Comprehensive resource hub for the MMS team
# - App type: web
# - Framework: react
```

**Note**: The `quick.config.json` is already included, so this step may be automatic.

### Step 4: Deploy to Quick

```bash
# Deploy the application
quick deploy

# You should see output like:
# ✓ Building application...
# ✓ Uploading assets...
# ✓ Deploying to Quick...
# ✓ Deployment successful!
# 
# Your app is available at: https://quick.shopify.io/apps/mms-handbook
```

### Step 5: Verify Deployment

1. Visit Quick app directory: https://quick.shopify.io
2. Find "MMS Team Handbook" in your apps list
3. Click to open the app
4. Test critical functionality:
   - [ ] Navigation between all pages works
   - [ ] External links open correctly
   - [ ] Search in FAQ works
   - [ ] Team directory filtering works
   - [ ] No console errors in browser DevTools

## Post-Deployment

### Share with Team

Once deployed, share the app with your team:

1. Post in #mms-team Slack channel:
   ```
   📚 The new MMS Team Handbook is now live on Quick!
   
   Access it here: https://quick.shopify.io/apps/mms-handbook
   
   This is your central resource for:
   • Team mission & values
   • Performance metrics & KPIs
   • Tools & systems access
   • Processes & playbooks
   • Learning resources
   • Team directory
   • FAQs and more!
   
   Bookmark it and explore all the sections. Questions? Let me know!
   ```

2. Add to team onboarding documentation
3. Pin the link in relevant Slack channels

### Monitor and Update

After deployment:

1. **Monitor usage** - Check Quick analytics dashboard
2. **Gather feedback** - Ask team members for suggestions
3. **Update content regularly**:
   - Metrics and targets (quarterly)
   - Team directory (as people join/leave)
   - FAQs (add common questions)
   - Links (verify they're still valid)

### Making Updates After Initial Deployment

When you need to update content or features:

```bash
# 1. Make your changes in the code/data files
# 2. Test locally
npm run dev

# 3. Build and verify
npm run build
npm run preview

# 4. Deploy updated version
quick deploy

# Quick will automatically version your deployment
```

## Deployment Configuration

### quick.config.json

The configuration file for Quick is located at the root:

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

### Version Management

Update the version in `quick.config.json` for significant updates:

```json
{
  "version": "1.1.0"  // Increment this for new releases
}
```

Versioning guideline:
- **Major** (1.0.0 → 2.0.0): Breaking changes or major redesigns
- **Minor** (1.0.0 → 1.1.0): New features or sections
- **Patch** (1.0.0 → 1.0.1): Content updates, bug fixes

## Environment-Specific Configuration

### Development vs Production

If you need different configurations:

1. Create environment files:
   ```
   .env.development
   .env.production
   ```

2. Add environment variables:
   ```bash
   # .env.production
   VITE_API_URL=https://api.shopify.io
   VITE_VAULT_URL=https://vault.shopify.io
   ```

3. Use in code:
   ```typescript
   const vaultUrl = import.meta.env.VITE_VAULT_URL;
   ```

4. Vite will automatically use the right env file

## Troubleshooting

### Common Issues

#### "Cannot find module @shopify/polaris"

```bash
rm -rf node_modules package-lock.json
npm install
```

#### "Quick CLI not authenticated"

```bash
quick logout
quick login
```

#### "Build failed - TypeScript errors"

```bash
npm run type-check
# Fix any TypeScript errors shown
npm run build
```

#### "Deployment timed out"

- Check your internet connection
- Ensure you're on Shopify internal network or VPN
- Try again: `quick deploy --retry`

#### "App not showing in Quick directory"

- Verify deployment succeeded: `quick apps list`
- Check permissions: You need proper Quick access
- Contact Quick support: #help-quick on Slack

### Rollback to Previous Version

If you need to rollback:

```bash
# List previous deployments
quick deployments list

# Rollback to specific version
quick rollback <version-id>
```

## Quick Platform Specifics

### Authentication

Quick apps automatically inherit Shopify SSO authentication. No additional auth setup needed.

### Permissions

The app currently requires no special permissions as it's a read-only resource hub. If you add features that need to access Shopify APIs, update `quick.config.json`:

```json
{
  "permissions": ["read:products", "read:customers"]
}
```

### Health Checks

Quick will periodically hit `/health` to check if your app is running. The route is defined but you may want to add a health endpoint:

```typescript
// Add to App.tsx routes if needed
<Route path="/health" element={<HealthCheck />} />
```

## Performance Optimization

### Build Optimization

The app is already optimized, but you can improve further:

```bash
# Analyze bundle size
npm run build -- --analyze

# Check for large dependencies
npm run build -- --mode production
```

### Caching

Quick automatically handles caching of static assets. No additional configuration needed.

## Security Considerations

1. **No Sensitive Data**: Don't hardcode API keys or secrets
2. **External Links**: All external links open in new tabs
3. **SSO**: Authentication is handled by Quick platform
4. **Content**: Review all content before deploying

## Support and Resources

### Internal Resources

- **Quick Documentation**: https://quick.shopify.io/docs
- **Polaris Components**: https://polaris.shopify.com
- **Slack Channels**:
  - #help-quick - Quick platform support
  - #help-it - General IT support
  - #polaris - Polaris design system questions

### Getting Help

If you encounter issues:

1. Check this deployment guide
2. Review README.md for project details
3. Ask in #help-quick on Slack
4. Contact Quick platform team

## Maintenance Schedule

Recommended maintenance tasks:

- **Weekly**: Review analytics, monitor for errors
- **Monthly**: Update team directory, verify external links
- **Quarterly**: Update metrics targets, refresh content
- **Annually**: Review all sections for accuracy

---

**Last Updated**: December 2024  
**Platform**: Shopify Quick  
**Support**: #help-quick on Slack

