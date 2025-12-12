# Quick Deployment to Quick Platform

## ✅ Ready to Deploy!

Your MMS Customer Success Handbook is built and ready. Here's how to deploy it to Quick:

### App Configuration

**App Name**: `mms-csm-handbook`  
**Display Name**: MMS Customer Success Handbook  
**URL (after deployment)**: https://quick.shopify.io/apps/mms-csm-handbook

---

## Deployment Steps

### 1. Install Quick CLI (if not already installed)

```bash
npm install -g @shopify/quick-cli
```

### 2. Authenticate with Quick

```bash
quick login
```

This will open a browser window for Shopify SSO authentication.

### 3. Deploy the App

From the project root directory:

```bash
cd "/Users/aiko/Desktop/MMS Handbook"
quick deploy
```

The deployment process will:
- Upload your built assets
- Configure the app on Quick platform
- Make it available at the Quick apps directory

### 4. Access Your App

After deployment, you can access it at:
- **Quick Directory**: https://quick.shopify.io
- **Direct Link**: https://quick.shopify.io/apps/mms-csm-handbook

---

## Alternative: Manual Deployment

If `quick deploy` doesn't work, you may need to:

1. **Check Quick CLI version**:
   ```bash
   quick --version
   ```

2. **Update if needed**:
   ```bash
   npm update -g @shopify/quick-cli
   ```

3. **Try deploying again**

---

## Current Status

✅ **App built successfully**  
✅ **Team members updated (21 people)**  
✅ **Vault team page link updated**  
✅ **Config updated with CSM-specific naming**  

### What's Running Now

The app is currently running locally at:
**http://localhost:3000**

You can preview it right now in your browser!

---

## After Deployment

### Share with Team

Once deployed, share in your team Slack channel:

```
📚 The MMS Customer Success Handbook is now live!

Access it here: https://quick.shopify.io/apps/mms-csm-handbook

Your central resource for team info, metrics, tools, and more!
```

### Add to Bookmarks

Team members should bookmark the app for easy access.

---

## Updating the App Later

When you need to make updates:

1. Make your changes to the code/data files
2. Build: `npm run build`
3. Deploy: `quick deploy`

Quick will automatically version your deployments.

---

## Need Help?

- **Quick Platform Support**: #help-quick on Slack
- **App Issues**: Contact whoever set this up (that's you!)
- **Content Updates**: See CONTENT_GUIDE.md

---

**Your app is ready to deploy!** 🚀


