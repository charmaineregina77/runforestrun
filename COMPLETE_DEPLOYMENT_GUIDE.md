# 🚀 Complete Deployment Guide - Run Forest Run

Follow these steps in order to deploy your app to Vercel.

## ✅ Prerequisites Checklist

- ✅ Supabase project created
- ✅ Supabase URL: `https://cttoedvsuokbrgzooqrn.supabase.co`
- ✅ Supabase Anon Key: Ready
- ✅ Supabase Service Role Key: Ready
- ✅ All code files ready

## 📋 Step-by-Step Deployment

### STEP 1: Set Up Database (5 minutes)

**Goal**: Create all tables in your Supabase database

1. **Open Supabase SQL Editor**
   - Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new

2. **Copy the Schema**
   - Open `supabase/schema.sql` in your project
   - Copy the ENTIRE file contents

3. **Paste and Run**
   - Paste into Supabase SQL Editor
   - Click **"Run"** button (or Cmd/Ctrl + Enter)
   - Should see: "Success. No rows returned" ✅

4. **Verify**
   - Go to **Table Editor** in Supabase
   - You should see 6 tables: profiles, companies, milestones, tasks, task_completions, kpis

**✅ Step 1 Complete!** See `DATABASE_SETUP.md` for detailed instructions.

---

### STEP 2: Push Code to GitHub (5 minutes)

**Goal**: Get your code on GitHub so Vercel can import it

1. **Create GitHub Repository**
   - Go to: https://github.com/new
   - Name: `runforestrun`
   - Don't check any boxes (no README, .gitignore, license)
   - Click "Create repository"

2. **Run Git Commands** (in Terminal)
   ```bash
   cd /Users/charmaineregina/Documents/Codex/runforestrun
   git init
   git add .
   git commit -m "Initial commit - Run Forest Run"
   git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
   git branch -M main
   git push -u origin main
   ```

3. **Authenticate** (if prompted)
   - Username: Your GitHub username
   - Password: Use Personal Access Token (get from github.com/settings/tokens)

4. **Verify**
   - Go to: https://github.com/YOUR_USERNAME/runforestrun
   - You should see all your files ✅

**✅ Step 2 Complete!** See `GITHUB_PUSH.md` for detailed instructions.

---

### STEP 3: Deploy to Vercel (5 minutes)

**Goal**: Deploy your app and make it live

1. **Import Project**
   - Go to: https://vercel.com/new
   - Click "Import Project"
   - Select your `runforestrun` repository
   - Click "Import"

2. **Add Environment Variables** (BEFORE clicking Deploy!)
   - Scroll to "Environment Variables" section
   - Add these 3 variables:

   | Key | Value |
   |-----|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://cttoedvsuokbrgzooqrn.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms` |
   | `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk` |

   - For each variable, check all environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save" after each one

3. **Deploy**
   - Click the big **"Deploy"** button
   - Wait 1-2 minutes for build to complete

4. **Visit Your App**
   - Click the deployment URL (e.g., `runforestrun.vercel.app`)
   - Your app should be live! 🎉

**✅ Step 3 Complete!** See `VERCEL_DEPLOYMENT.md` for detailed instructions.

---

## 🎉 You're Done!

Your Run Forest Run app is now:
- ✅ Database set up in Supabase
- ✅ Code on GitHub
- ✅ Live on Vercel
- ✅ Accessible to the world!

## 📚 Detailed Guides

- **Database Setup**: See `DATABASE_SETUP.md`
- **GitHub Push**: See `GITHUB_PUSH.md`
- **Vercel Deployment**: See `VERCEL_DEPLOYMENT.md`

## 🆘 Troubleshooting

### Database Issues
- Make sure you copied the ENTIRE schema.sql file
- Check Table Editor to verify tables exist

### GitHub Issues
- Use Personal Access Token, not password
- Verify repository URL is correct

### Vercel Issues
- Check that all 3 environment variables are set
- Verify Supabase project is not paused
- Check build logs in Vercel dashboard

## 🚀 Next Steps

- Set up custom domain
- Configure automatic deployments
- Add monitoring and analytics
- Start using your app!
