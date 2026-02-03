# 🚀 Final Deployment Steps - Run Forest Run

## ✅ You Have Everything Ready!

- ✅ Supabase URL
- ✅ Supabase Anon Key  
- ✅ Supabase Service Role Key
- ✅ All code files

## 📋 Step-by-Step Deployment

### Step 1: Set Up Database in Supabase

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. Open the file `supabase/schema.sql` in your project
3. **Copy the ENTIRE contents** of that file
4. Paste into the Supabase SQL Editor
5. Click **Run** (or press Cmd/Ctrl + Enter)
6. You should see: "Success. No rows returned" ✅

### Step 2: Push Code to GitHub

Open Terminal and run:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun

# Initialize git (if not done)
git init
git add .
git commit -m "Ready for Vercel deployment"

# Create a GitHub repo at github.com/new, then:
git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Go to**: https://vercel.com/new
2. **Click**: "Import Project"
3. **Connect**: Your GitHub account
4. **Select**: Your `runforestrun` repository
5. **Click**: "Import"

6. **IMPORTANT - Before clicking Deploy:**
   - Click **"Environment Variables"** section
   - Add these 3 variables one by one:

   **Variable 1:**
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://cttoedvsuokbrgzooqrn.supabase.co`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 2:**
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

   **Variable 3:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk`
   - Environment: ✅ Production ✅ Preview ✅ Development
   - Click **Save**

7. **Click**: "Deploy" button
8. **Wait**: 1-2 minutes for build to complete
9. **Visit**: Your live URL! 🎉

## 🎯 Quick Copy-Paste for Vercel

When adding environment variables in Vercel, use these exact values:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://cttoedvsuokbrgzooqrn.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk` |

## ✅ Checklist

- [ ] Database schema run in Supabase SQL Editor
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] All 3 environment variables added in Vercel
- [ ] Deployment successful
- [ ] App is live! 🎉

## 🆘 Troubleshooting

**Build fails?**
- Check that all 3 environment variables are set
- Verify Supabase project is active (not paused)

**App loads but shows errors?**
- Check browser console for errors
- Verify database schema was run successfully
- Check Vercel function logs

**Database connection issues?**
- Double-check all 3 environment variables are correct
- Ensure Supabase project is not paused

## 🎉 You're Ready!

Everything is set up. Just follow the 3 steps above and your app will be live!
