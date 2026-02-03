# GitHub Push - Step by Step

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. **Repository name**: `runforestrun` (or any name you prefer)
3. **Description**: (optional) "E-commerce B2C launch management tool"
4. **Visibility**: Choose Public or Private
5. **IMPORTANT**: Do NOT check any boxes:
   - ❌ Don't add README
   - ❌ Don't add .gitignore
   - ❌ Don't add license
6. Click **"Create repository"**

## Step 2: Run Git Commands

Open Terminal and run these commands one by one:

```bash
# Navigate to your project
cd /Users/charmaineregina/Documents/Codex/runforestrun

# Check if git is initialized
git status
```

If you see "not a git repository", run:
```bash
git init
```

Then continue:

```bash
# Add all files
git add .

# Commit everything
git commit -m "Initial commit - Run Forest Run with role system and task library"

# Add your GitHub repository as remote
# REPLACE YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Authentication

When you run `git push`, you may be asked for credentials:

**Option A: Personal Access Token (Recommended)**
1. If asked for username: Enter your GitHub username
2. If asked for password: Use a **Personal Access Token** (not your password)
   - Get one at: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "Vercel Deployment"
   - Select scope: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again)
   - Paste it as the password when prompted

**Option B: SSH (Alternative)**
If you have SSH keys set up:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/runforestrun.git
git push -u origin main
```

## Step 4: Verify

1. Go to: https://github.com/YOUR_USERNAME/runforestrun
2. You should see all your files uploaded ✅
3. Check that you see:
   - `src/` folder
   - `package.json`
   - `README.md`
   - `supabase/` folder
   - etc.

## ✅ GitHub Push Complete!

Your code is now on GitHub and ready for Vercel to import!

## Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
```

**"Authentication failed"**
- Make sure you're using a Personal Access Token, not your password
- Check that the token has `repo` permissions

**"Permission denied"**
- Verify the repository URL is correct
- Make sure the repository exists on GitHub
