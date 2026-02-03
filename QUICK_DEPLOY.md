# Quick Deploy Guide - Run These Commands

## Step 1: Git Setup (Run in Terminal)

Copy and paste these commands:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun
git init
git add .
git commit -m "Ready for Vercel deployment"
```

## Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `runforestrun`
3. Make it **Public** or **Private** (your choice)
4. **Don't** check any boxes (no README, .gitignore, license)
5. Click **"Create repository"**

## Step 3: Push to GitHub

After creating the repo, GitHub will show you commands. Use these (replace YOUR_USERNAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
git branch -M main
git push -u origin main
```

If asked for credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Get one at: https://github.com/settings/tokens
  - Create token with `repo` permissions

## Step 4: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Click **"Import Project"**
3. Select your GitHub repository: `runforestrun`
4. **Before clicking Deploy**, click **"Environment Variables"**
5. Add these 3 variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL = (your Supabase URL)
   NEXT_PUBLIC_SUPABASE_ANON_KEY = (your Supabase anon key)
   SUPABASE_SERVICE_ROLE_KEY = (your Supabase service_role key)
   ```

6. Click **"Deploy"**
7. Wait 1-2 minutes for build to complete
8. Visit your live URL! 🎉

## Need Supabase Keys?

1. Go to: https://supabase.com
2. Open your project (or create one)
3. Go to: **Settings** → **API**
4. Copy the 3 values listed above

## Need Help?

- Git issues? Check: https://docs.github.com/en/get-started
- Vercel issues? Check: https://vercel.com/docs
- Supabase setup? Check: `DEPLOYMENT.md`
