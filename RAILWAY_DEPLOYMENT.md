# 🚂 Railway Deployment Guide - React Frontend

This guide will help you deploy your React Task Manager Frontend to Railway.

---

## ⚠️ Important Note

**Railway is great for backends, but for static sites (React frontends), Netlify or Vercel are typically:**
- ✅ Faster deployment
- ✅ Better performance (CDN)
- ✅ Easier setup
- ✅ Free tier with more features

**However, if you want to use Railway (maybe to keep everything in one place), this guide will help!**

---

## 📋 Prerequisites

1. ✅ Code pushed to GitHub
2. ✅ Railway account ([railway.app](https://railway.app))
3. ✅ GitHub connected to Railway

---

## 🚀 Step-by-Step Deployment

### Step 1: Create New Project on Railway

1. Go to [railway.app](https://railway.app) and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository: `task-manager-frontend`
5. Click **"Deploy Now"**

---

### Step 2: Configure Service Type

Railway should auto-detect it's a Node.js project. If not:

1. Click on your service
2. Go to **Settings** tab
3. Under **"Service Type"**, select **"Web Service"**

---

### Step 3: Configure Build Settings

1. Go to **Settings** → **Build & Deploy**
2. Set the following:

   **Build Command:**
   ```bash
   npm install && npm run build
   ```

   **Start Command:**
   ```bash
   npx serve -s dist -l $PORT
   ```

   **OR** if you prefer, you can use:
   ```bash
   npm start
   ```
   (We added this script to package.json)

---

### Step 4: Set Environment Variables (Optional)

If you want to use a different API URL:

1. Go to **Variables** tab
2. Add new variable:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://task-management-api-production-96e5.up.railway.app`
3. Click **"Add"**

**Note:** Railway will rebuild automatically when you add variables.

---

### Step 5: Configure Root Directory (If Needed)

If Railway doesn't detect the project correctly:

1. Go to **Settings** → **Source**
2. Set **Root Directory:** `/` (or leave empty)
3. Railway should auto-detect from the repo root

---

### Step 6: Deploy!

1. Railway will automatically start building
2. Watch the build logs in the **Deployments** tab
3. Wait 2-5 minutes for build to complete
4. Once deployed, Railway will give you a URL like:
   ```
   https://your-app-name.up.railway.app
   ```

---

## 🔧 Configuration Files

We've created `railway.json` to help Railway understand your project:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npx serve -s dist -l $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

Railway should auto-detect this file.

---

## 🐛 Troubleshooting

### Build Fails

**Problem:** Build command fails

**Solution:**
- Check build logs in Railway dashboard
- Ensure Node.js version is 18+ (Railway auto-detects)
- Verify all dependencies are in `package.json`
- Check that `npm run build` works locally

### 404 Errors on Page Refresh

**Problem:** React Router routes return 404

**Solution:**
- The `serve` command with `-s` flag should handle this
- If not, create a `public/_redirects` file (for Netlify-style redirects)
- Or use a custom server script

### Port Issues

**Problem:** App doesn't start

**Solution:**
- Railway sets `$PORT` automatically
- Make sure start command uses `$PORT` variable
- Check logs: `npx serve -s dist -l $PORT`

### Static Files Not Found

**Problem:** CSS/JS files return 404

**Solution:**
- Ensure build completed successfully
- Check that `dist` folder exists after build
- Verify `vite.config.js` has correct `outDir: 'dist'`

---

## 🔄 Custom Domain (Optional)

1. Go to **Settings** → **Networking**
2. Click **"Generate Domain"** (Railway provides one automatically)
3. For custom domain:
   - Click **"Custom Domain"**
   - Enter your domain
   - Follow DNS setup instructions

---

## 📊 Monitoring

Railway provides:
- **Metrics:** CPU, Memory usage
- **Logs:** Real-time application logs
- **Deployments:** History of all deployments

---

## 💰 Pricing

Railway offers:
- **Free tier:** $5 credit/month
- **Hobby:** $20/month (if you exceed free tier)
- Static sites are usually very cheap (or free)

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Code pushed to GitHub
- [ ] `railway.json` created
- [ ] `package.json` has `start` script
- [ ] Build works locally: `npm run build`
- [ ] API URL is correct (or set as env variable)
- [ ] All dependencies in `package.json`

---

## 🎯 After Deployment

1. **Test your app:**
   - Visit the Railway URL
   - Register a new user
   - Create tasks
   - Test all features

2. **Update your portfolio:**
   - Add the Railway URL to your portfolio
   - Link to the GitHub repo

3. **Monitor:**
   - Check Railway dashboard for any issues
   - Review logs if something breaks

---

## 🔗 Quick Links

- **Railway Dashboard:** [railway.app](https://railway.app)
- **Documentation:** [docs.railway.app](https://docs.railway.app)
- **Your API:** [task-management-api-production-96e5.up.railway.app](https://task-management-api-production-96e5.up.railway.app)

---

## 💡 Alternative: Use Netlify/Vercel

If you run into issues with Railway, consider:

- **Netlify:** Better for static sites, free CDN, instant deploys
- **Vercel:** Great for React apps, automatic optimizations

Both are free and easier for React frontends!

---

**Need help?** Check Railway's documentation or their Discord community.
