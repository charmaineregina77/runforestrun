# Vercel Deployment - Step by Step Guide

## Step 1: Go to Vercel

1. Open: https://vercel.com/new
2. If not logged in, sign in with your GitHub account (recommended)

## Step 2: Import Your Repository

1. Click **"Import Project"** or **"Add New Project"**
2. You'll see a list of your GitHub repositories
3. Find and click on **"runforestrun"** (or whatever you named it)
4. Click **"Import"**

## Step 3: Configure Project Settings

Vercel should auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` (default - leave as is)
- **Build Command**: `npm run build` (default - leave as is)
- **Output Directory**: `.next` (default - leave as is)
- **Install Command**: `npm install` (default - leave as is)

**Don't click Deploy yet!** We need to add environment variables first.

## Step 4: Add Environment Variables (CRITICAL!)

1. **Scroll down** to the **"Environment Variables"** section
2. Click to expand it
3. Add these 3 variables one by one:

### Variable 1: NEXT_PUBLIC_SUPABASE_URL

1. Click **"Add"** or the **"+"** button
2. **Key**: `NEXT_PUBLIC_SUPABASE_URL`
3. **Value**: `https://cttoedvsuokbrgzooqrn.supabase.co`
4. **Environments**: Check all three:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**

### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY

1. Click **"Add"** again
2. **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. **Value**: 
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms
   ```
4. **Environments**: Check all three:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**

### Variable 3: SUPABASE_SERVICE_ROLE_KEY

1. Click **"Add"** one more time
2. **Key**: `SUPABASE_SERVICE_ROLE_KEY`
3. **Value**: 
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk
   ```
4. **Environments**: Check all three:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**

## Step 5: Deploy!

1. Scroll back up
2. Click the big **"Deploy"** button
3. Wait 1-2 minutes while Vercel:
   - Installs dependencies
   - Builds your Next.js app
   - Deploys to production

## Step 6: Verify Deployment

1. You'll see a progress screen with build logs
2. When complete, you'll see:
   - ✅ "Building"
   - ✅ "Ready"
   - A URL like: `runforestrun.vercel.app` or `runforestrun-xxxxx.vercel.app`

3. **Click the URL** to visit your live app! 🎉

## Step 7: Check Your App

1. Visit your deployment URL
2. The app should load
3. If you see errors:
   - Check the browser console (F12)
   - Go to Vercel Dashboard → Your Project → Deployments → Latest → Logs
   - Verify all environment variables are set correctly

## ✅ Deployment Complete!

Your app is now live on the internet!

## Future Deployments

Vercel automatically deploys when you:
- Push to the `main` branch → Production deployment
- Push to other branches → Preview deployment
- Open a Pull Request → Preview deployment

## Managing Environment Variables Later

If you need to update environment variables:

1. Go to: Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit or add variables as needed
3. Redeploy (or wait for next automatic deployment)

## Custom Domain (Optional)

To add a custom domain:

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

## 🎉 Congratulations!

Your Run Forest Run app is now live and ready to use!
