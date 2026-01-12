# 🚀 Deployment Guide - Task Manager Frontend

This guide covers deploying your React Task Manager Frontend to various platforms.

---

## 🎯 Recommended: Netlify (Easiest & Fastest)

### Step 1: Prepare Your Code

1. Make sure all files are committed to GitHub
2. Push to your repository

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login (use GitHub for easy connection)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **"GitHub"** and authorize Netlify
5. Choose your repository: `task-manager-frontend` (or create it first)
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18` (or latest)
7. Click **"Deploy site"**
8. Wait 2-3 minutes for build to complete
9. **Done!** Your site is live 🎉

### Step 3: Set Environment Variable (Optional)

If you want to use a different API URL:
1. Go to Site settings → Environment variables
2. Add: `VITE_API_URL` = `https://task-management-api-production-96e5.up.railway.app`
3. Redeploy

### Your Site URL

Netlify will give you a URL like:
- `https://your-app-name.netlify.app`
- Or a custom domain if you set one up

---

## 🌐 Alternative: Vercel

### Step 1: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click **"New Project"**
4. Import your `task-manager-frontend` repository
5. Vercel auto-detects Vite settings
6. Click **"Deploy"**
7. Wait for deployment (usually 1-2 minutes)
8. **Done!** 🎉

### Configuration

Vercel automatically uses `vercel.json` for configuration. No extra setup needed!

---

## 📦 GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/task-manager-frontend",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Select source: `gh-pages` branch
3. Save

---

## 🔧 Pre-Deployment Checklist

### ✅ Before Deploying:

- [ ] All code is committed to GitHub
- [ ] API URL is correct in `src/config/api.js`
- [ ] Test locally: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] All features work (login, tasks, etc.)

### Build Command

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

---

## 🧪 Testing Your Deployment

After deployment, test:

1. **Homepage loads** - Should redirect to login if not authenticated
2. **Register** - Create a new account
3. **Login** - Sign in with credentials
4. **Create Task** - Add a new task
5. **Filter/Search** - Test filtering and search
6. **Edit/Delete** - Update and delete tasks
7. **Responsive** - Test on mobile/tablet

---

## 🔗 Your Deployed URLs

After deployment, you'll have:

- **Frontend:** `https://your-app.netlify.app` (or Vercel URL)
- **Backend API:** `https://task-management-api-production-96e5.up.railway.app`
- **Swagger UI:** `https://task-management-api-production-96e5.up.railway.app/swagger-ui.html`

---

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (needs 16+)
- Verify all dependencies are in `package.json`
- Check build logs for errors

### API Connection Issues

- Verify API URL in `src/config/api.js`
- Check CORS settings on backend (should allow your frontend domain)
- Test API directly in browser/Swagger

### 404 Errors on Refresh

- Ensure redirect rules are set (Netlify/Vercel configs included)
- Check `netlify.toml` or `vercel.json` has redirect rules

### Environment Variables

- Set `VITE_API_URL` in deployment platform if needed
- Rebuild after adding environment variables

---

## 📝 Quick Deploy Commands

### Netlify CLI (if installed)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Vercel CLI (if installed)

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🎯 Recommended Workflow

1. **Develop locally:** `npm run dev`
2. **Test everything works**
3. **Build:** `npm run build`
4. **Preview build:** `npm run preview`
5. **Commit and push to GitHub**
6. **Deploy via Netlify/Vercel (auto-deploys on push)**

---

## ✨ Post-Deployment

After deployment:

1. Test all features on live site
2. Share the URL in your portfolio
3. Update portfolio with new project link
4. Celebrate! 🎉

---

**Your frontend is ready to deploy!** 🚀
