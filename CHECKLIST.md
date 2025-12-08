# MMS Handbook - Pre-Deployment Checklist

Use this checklist before deploying to Quick to ensure everything is ready.

## ✅ Installation & Setup

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] App runs locally (`npm run dev`)
- [ ] No console errors in browser DevTools
- [ ] All pages load without errors

## ✅ Content Customization

### Critical Updates (Must Do)

- [ ] **Vault Team Page Link** updated in `src/data/missionVision.ts`
  - [ ] Replaced `[YOUR-TEAM-ID]` with actual team ID
  - [ ] Link tested and works

- [ ] **Team Members** updated in `src/data/team.ts`
  - [ ] All current team members added
  - [ ] Placeholder members removed
  - [ ] Email addresses correct
  - [ ] Slack handles accurate
  - [ ] Manager relationships correct
  - [ ] Vault profile links updated

- [ ] **Dashboard Links** updated in `src/data/metrics.ts`
  - [ ] Tableau dashboard URLs updated
  - [ ] Mode Analytics URLs updated
  - [ ] All placeholder `[DASHBOARD-ID]` replaced
  - [ ] Links tested and accessible

### Important Updates (Should Do)

- [ ] **Mission & Vision** customized in `src/data/missionVision.ts`
  - [ ] Mission statement reflects your team
  - [ ] Vision statement updated
  - [ ] Core values are accurate
  - [ ] Operating principles reviewed

- [ ] **Metrics** reviewed in `src/data/metrics.ts`
  - [ ] All metrics relevant to your team
  - [ ] Targets are current
  - [ ] Calculations are accurate
  - [ ] Metric categories make sense

- [ ] **Tools & Systems** updated in `src/pages/ToolsPage.tsx`
  - [ ] Slack channels are correct
  - [ ] Tool URLs verified
  - [ ] Training resources accessible
  - [ ] All tools your team uses included

- [ ] **Processes** customized in `src/data/processes.ts`
  - [ ] Processes match your workflow
  - [ ] Steps are clear and accurate
  - [ ] Playbook links updated and working

- [ ] **FAQs** reviewed in `src/data/faqs.ts`
  - [ ] Questions are actually common
  - [ ] Answers are accurate
  - [ ] New FAQs added for your team
  - [ ] Outdated FAQs removed

- [ ] **Compensation** reviewed in `src/pages/CompensationPage.tsx`
  - [ ] Quota tiers match current policy
  - [ ] Example calculations accurate
  - [ ] People team link works

- [ ] **Resources** updated in `src/data/resources.ts`
  - [ ] Vault doc links correct
  - [ ] Training links accessible
  - [ ] External resources relevant

## ✅ Testing

### Local Testing

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All 11 pages display properly
- [ ] External links open in new tabs
- [ ] FAQ search functionality works
- [ ] Team directory search works
- [ ] Team directory filtering works
- [ ] No broken images or icons
- [ ] Mobile responsive layout works
- [ ] No TypeScript errors (`npm run type-check`)

### Content Review

- [ ] All sections reviewed for accuracy
- [ ] No placeholder text like `[YOUR-TEAM-ID]`
- [ ] All external links tested
- [ ] No broken Vault links
- [ ] No broken dashboard links
- [ ] Grammar and spelling checked
- [ ] Consistent formatting throughout

## ✅ Build & Deploy Prep

### Build Process

- [ ] Production build successful (`npm run build`)
- [ ] No build warnings or errors
- [ ] Preview works (`npm run preview`)
- [ ] All functionality works in production build

### Quick Configuration

- [ ] `quick.config.json` reviewed
- [ ] App name is correct
- [ ] Display name is appropriate
- [ ] Description is accurate
- [ ] Quick CLI installed (`quick --version`)
- [ ] Authenticated with Quick (`quick login`)

## ✅ Deployment

- [ ] Deployed to Quick (`quick deploy`)
- [ ] Deployment successful (no errors)
- [ ] App appears in Quick directory
- [ ] App opens correctly from Quick
- [ ] All sections work in deployed version

### Post-Deployment Testing

- [ ] Test all pages in production
- [ ] Test all external links
- [ ] Test search functionality
- [ ] Test on mobile device
- [ ] Test with different users (if possible)

## ✅ Team Rollout

### Communication

- [ ] Announcement prepared for team
- [ ] Slack post ready
- [ ] Link to app bookmarked
- [ ] Added to onboarding documentation
- [ ] Training/walkthrough planned (if needed)

### Post-Launch

- [ ] Monitor for issues first week
- [ ] Collect feedback from team
- [ ] Document any issues found
- [ ] Plan for regular updates

## ✅ Documentation

- [ ] README.md reviewed
- [ ] DEPLOYMENT.md available
- [ ] CONTENT_GUIDE.md available
- [ ] QUICKSTART.md available
- [ ] PROJECT_SUMMARY.md available
- [ ] All docs are up to date

## 🎯 Priority Levels

### 🔴 Critical (Must Fix Before Deploy)
- Vault team page link
- Team member information
- Any console errors
- Broken navigation

### 🟡 Important (Should Fix Before Deploy)
- Dashboard links
- Mission/vision content
- Tool URLs
- Process accuracy

### 🟢 Nice to Have (Can Update After Deploy)
- Additional FAQs
- Resource links
- Fine-tuning content
- Additional team members

## 📝 Notes Section

Use this space to track your progress and notes:

```
Date: _______________

Critical Issues Found:
- 
- 

Important Updates Made:
- 
- 

Outstanding Items:
- 
- 

Deploy Date: _______________
Deploy Status: _______________
```

## 🆘 Common Issues Checklist

If you encounter issues, check:

- [ ] Node modules installed correctly
- [ ] Using Node.js 18+
- [ ] On Shopify internal network (for deployment)
- [ ] Quick CLI authenticated
- [ ] No TypeScript errors
- [ ] All imports correct
- [ ] Package.json dependencies correct

## ✨ Final Verification

Before hitting deploy, confirm:

- [ ] ✅ All critical items completed
- [ ] ✅ App tested thoroughly
- [ ] ✅ Content accurate and up-to-date
- [ ] ✅ Team ready for rollout
- [ ] ✅ Deployment plan clear
- [ ] ✅ Rollback plan understood

---

**Checklist Version**: 1.0  
**Last Updated**: December 2024

**Ready to Deploy?** If all critical items are checked, you're good to go! 🚀

