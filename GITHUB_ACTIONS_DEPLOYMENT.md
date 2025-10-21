# GitHub Actions Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions whenever you push to the `main` branch.

## 🚀 Setup Instructions

### 1. Enable GitHub Pages with Actions

You need to configure your GitHub repository to use GitHub Actions for deployment:

1. Go to your repository on GitHub: `https://github.com/ralph-data4good/zw-calculator`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (This replaces the old "Deploy from branch" method)

### 2. Verify Workflow Permissions

Ensure the workflow has the correct permissions:

1. Go to **Settings** → **Actions** → **General**
2. Scroll down to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## 📦 How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Trigger** automatically on every push to `main` branch
2. **Install** Node.js 20 and project dependencies
3. **Build** the project using `npm run build`
4. **Deploy** the `dist` folder to GitHub Pages

## 🔄 Deploying Updates

### Automatic Deployment

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Update with eco design system"
git push origin main
```

The workflow will automatically:
- Run the build
- Deploy to https://ralph-data4good.github.io/zw-calculator/
- Complete in ~2-3 minutes

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## 📊 Monitoring Deployments

### View Workflow Status

1. Go to the **Actions** tab in your GitHub repository
2. You'll see all workflow runs with their status:
   - 🟡 **In progress** - Currently deploying
   - ✅ **Success** - Deployed successfully
   - ❌ **Failed** - Build or deployment error

### View Deployment Status

1. Go to the **Environments** section (in the right sidebar of repository home)
2. Click on **github-pages**
3. You'll see all deployments with timestamps and URLs

## 🔧 Workflow Details

### Workflow File

Location: `.github/workflows/deploy.yml`

### Key Features

- **Node.js 20**: Uses the latest LTS version
- **Caching**: Caches npm dependencies for faster builds
- **Concurrent Deployment Control**: Prevents conflicting deployments
- **Manual Trigger**: Can be run manually via workflow_dispatch

### Build Steps

1. **Checkout code** - Gets your latest code
2. **Setup Node.js** - Installs Node.js 20 with npm caching
3. **Install dependencies** - Runs `npm ci` for clean install
4. **Build project** - Runs `npm run build` (TypeScript + Vite)
5. **Upload artifact** - Prepares dist folder
6. **Deploy** - Deploys to GitHub Pages

## 🛠️ Troubleshooting

### Build Fails

If the build fails in GitHub Actions:

1. Check the error in the Actions tab
2. Common issues:
   - TypeScript errors: Fix in your code
   - Missing dependencies: Run `npm install` locally
   - Build errors: Test `npm run build` locally first

### Deployment Fails

If deployment fails:

1. Verify GitHub Pages is set to "GitHub Actions" source
2. Check workflow permissions are correct
3. Ensure the `gh-pages` branch exists (it will be auto-created)

### Site Not Updating

If the site deploys but changes don't appear:

1. Wait 1-2 minutes for CDN propagation
2. Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
3. Clear browser cache
4. Check the deployment URL matches: https://ralph-data4good.github.io/zw-calculator/

## 🎯 Current Configuration

- **Repository**: ralph-data4good/zw-calculator
- **Deployment URL**: https://ralph-data4good.github.io/zw-calculator/
- **Base Path**: `/zw-calculator/` (configured in `vite.config.ts`)
- **Build Output**: `dist/` directory
- **Trigger**: Push to `main` branch + Manual trigger

## 📝 Environment Variables

Currently, no environment variables are needed. If you need to add secrets or environment variables in the future:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secret
4. Reference it in the workflow with `${{ secrets.YOUR_SECRET }}`

## ✅ Benefits of GitHub Actions Deployment

✨ **Automated** - No manual deployment needed  
🔄 **Consistent** - Same build process every time  
🚀 **Fast** - Builds complete in 2-3 minutes  
📊 **Trackable** - Full deployment history  
🔒 **Secure** - No need to share credentials  
🎯 **Reliable** - Runs on GitHub's infrastructure  

## 🌟 Next Deploy

Your next deployment with the **Eco Design System** will happen automatically when you push:

```bash
git add .
git commit -m "Deploy eco design system"
git push origin main
```

Then watch the magic happen at: https://github.com/ralph-data4good/zw-calculator/actions

---

**Happy Deploying!** 🚀🌱

