# Quick Commit & Push Commands

Run these commands in Terminal to deploy your changes:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun

# Check what's changed
git status

# Add all changes (including background color update)
git add .

# Commit
git commit -m "Update background to white and add Phase 2 features"

# Push to GitHub (triggers Vercel auto-deploy)
git push origin main
```

After pushing, check your Vercel dashboard - it will auto-deploy in 1-2 minutes!
