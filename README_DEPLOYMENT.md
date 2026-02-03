# Quick Deployment Checklist

## ✅ What You Have Ready

- ✅ Supabase Project URL: `https://cttoedvsuokbrgzooqrn.supabase.co`
- ✅ Supabase Anon Key: ✅ Ready
- ✅ Supabase Service Role Key: ✅ Ready

## 📋 Deployment Steps

### Step 1: Get Your Service Role Key

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/settings/api
2. Scroll to **"service_role"** section
3. Click **"Reveal"** button
4. Copy the key (it's long, starts with `eyJ...`)

### Step 2: Set Up Database

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. Open `supabase/schema.sql` in your project
3. Copy the entire SQL file
4. Paste into Supabase SQL Editor
5. Click **Run** (or press Cmd/Ctrl + Enter)
6. You should see "Success" message

### Step 3: Push Code to GitHub

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun
git init
git add .
git commit -m "Ready for deployment"
```

Then create a GitHub repo and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/runforestrun.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. **Before clicking Deploy**, click **"Environment Variables"**
4. Add these 3 variables:

   | Key | Value |
   |-----|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://cttoedvsuokbrgzooqrn.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms` |
   | `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk` |

5. Make sure to select **all environments** (Production, Preview, Development)
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Visit your live URL! 🎉

## 🎯 You're Almost There!

You just need:
1. Get the service_role key from Supabase
2. Run the database schema SQL
3. Push code to GitHub
4. Deploy to Vercel with the 3 environment variables

Need help with any step? Let me know!
