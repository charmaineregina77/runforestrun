# Git Setup Commands - Copy and Paste These

Run these commands in your terminal, one at a time:

```bash
# Navigate to your project
cd /Users/charmaineregina/Documents/Codex/runforestrun

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit everything
git commit -m "Prepare for Vercel deployment - Add role system and comprehensive task library"

# Check status
git status
```

## Next: Connect to GitHub

1. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `runforestrun` (or any name you prefer)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Connect and push** (replace YOUR_USERNAME with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
   git branch -M main
   git push -u origin main
   ```

3. **If you get authentication errors**, you may need to:
   - Use a Personal Access Token instead of password
   - Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/runforestrun.git`

## Alternative: Run the Setup Script

I've also created a setup script. You can run:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun
./setup-git.sh
```

This will check git status and guide you through the next steps.
