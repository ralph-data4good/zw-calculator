# ⚡ Quick Setup: Enable GitHub Actions Deployment

Your code has been pushed! Now you need to configure GitHub Pages to use GitHub Actions.

## 🎯 Required Steps (Do This Now!)

### Step 1: Enable GitHub Actions for Pages

1. **Go to your repository**: https://github.com/ralph-data4good/zw-calculator

2. **Click the Settings tab** (top right of repository page)

3. **In the left sidebar**, scroll down and click **Pages**

4. **Under "Build and deployment"**:
   - Find the **Source** dropdown
   - Change from "Deploy from a branch" to **"GitHub Actions"**
   - That's it! No need to save, it's automatic

### Step 2: Verify Workflow Started

1. **Go to the Actions tab**: https://github.com/ralph-data4good/zw-calculator/actions

2. You should see a workflow run called **"Deploy to GitHub Pages"**
   - If it's running: 🟡 Yellow dot (wait 2-3 minutes)
   - If it succeeded: ✅ Green checkmark
   - If it failed: ❌ Red X (see troubleshooting below)

3. **First-time note**: The workflow might fail the first time if Pages isn't configured yet. That's why Step 1 is important!

## ✅ That's It!

After completing Steps 1 and 2, your site will automatically deploy to:

### 🌐 https://ralph-data4good.github.io/zw-calculator/

## 🔄 How It Works From Now On

Every time you push to the `main` branch:
1. GitHub Actions automatically builds your project
2. Deploys to GitHub Pages
3. Your site updates in ~2-3 minutes

No manual deployment needed! 🎉

## 📊 Check Your Deployment

### Option 1: Via Actions Tab
```
https://github.com/ralph-data4good/zw-calculator/actions
```
- Click on the latest "Deploy to GitHub Pages" run
- See detailed logs of build and deployment

### Option 2: Via Environments
```
https://github.com/ralph-data4good/zw-calculator/deployments
```
- See all deployments with timestamps
- Click "View deployment" to see the live site

## 🐛 Troubleshooting

### If the workflow fails with "permissions" error:

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check ✅ **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**
6. Re-run the failed workflow from the Actions tab

### If the site shows 404:

1. Make sure you completed **Step 1** above (set Source to "GitHub Actions")
2. Wait 2-3 minutes for deployment to complete
3. Hard refresh your browser (Ctrl+Shift+R)

### If nothing happens:

1. Check the Actions tab - is the workflow running?
2. If no workflow appeared, GitHub Actions might not be enabled:
   - Go to **Settings** → **Actions** → **General**
   - Make sure "Allow all actions and reusable workflows" is selected

## 🎨 What You'll See

Once deployed, your site will feature:

### Eco-Centric Design System
- 🌱 Sage green primary colors (#4A7C59)
- ☀️ Warm yellow accents (#F5C563)
- ✨ Soft, organic shadows
- 🎯 Better contrast and readability
- 🌓 Enhanced dark mode with navy palette

## 📝 Next Steps

After setup is complete:

1. ✅ Visit your live site: https://ralph-data4good.github.io/zw-calculator/
2. ✅ Test all calculator functionality
3. ✅ Verify the new eco design system looks good
4. ✅ Test dark mode
5. ✅ Share with your team! 🎉

## 🚀 Making Updates

To deploy changes in the future:

```bash
# Make your changes to the code
git add .
git commit -m "Your commit message"
git push origin main

# That's it! GitHub Actions handles the rest
```

---

## ⚙️ Configuration Files

These files control the deployment:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Base path: `/zw-calculator/`
- `package.json` - Build scripts

## 📚 Documentation

- `GITHUB_ACTIONS_DEPLOYMENT.md` - Detailed deployment guide
- `ECO_DESIGN_SYSTEM.md` - Complete design system documentation
- `DESIGN_SYSTEM_CHANGES.md` - What changed in the design

---

**Need Help?** Check the Actions tab for deployment logs or refer to `GITHUB_ACTIONS_DEPLOYMENT.md` for detailed troubleshooting.

**Ready to Go!** Complete Step 1 above and watch your site deploy automatically! 🚀🌱

