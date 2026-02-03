# Deployment Guide - Run Forest Run to Vercel

This guide will walk you through deploying Run Forest Run to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have one
2. **Supabase Project**: You need a Supabase project with the database schema set up
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project (or use an existing one)
2. In your Supabase project dashboard:
   - Go to **Settings** → **API**
   - Copy your **Project URL** (this is `NEXT_PUBLIC_SUPABASE_URL`)
   - Copy your **anon/public key** (this is `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Copy your **service_role key** (this is `SUPABASE_SERVICE_ROLE_KEY` - keep this secret!)

3. Set up your database:
   - Go to **SQL Editor** in Supabase
   - Run the SQL from `supabase/schema.sql` to create all tables
   - (Optional) Run `supabase/seed.sql` for demo data

## Step 2: Prepare Your Code

1. Make sure your code is committed to Git:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

2. Verify your `.gitignore` includes `.env.local` (it should already)

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New Project**
3. Import your Git repository:
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select your `runforestrun` repository
   - Click **Import**

4. Configure your project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (or leave as default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. **Add Environment Variables**:
   Click **Environment Variables** and add:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` = Your Supabase service role key
   - (Optional) `DEMO_OWNER_ID` = `11111111-1111-1111-1111-111111111111` if using demo data

6. Click **Deploy**

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   cd /Users/charmaineregina/Documents/Codex/runforestrun
   vercel
   ```

4. Follow the prompts:
   - Link to existing project or create new
   - Add environment variables when prompted

5. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Deployment

1. Once deployed, Vercel will provide you with a URL (e.g., `runforestrun.vercel.app`)
2. Visit the URL to verify the app is working
3. Check the Vercel dashboard for any build errors

## Step 5: Set Up Custom Domain (Optional)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) | Yes |
| `DEMO_OWNER_ID` | UUID for demo mode (optional) | No |

## Troubleshooting

### Build Fails
- Check that all environment variables are set in Vercel
- Verify your Supabase project is active
- Check build logs in Vercel dashboard

### Database Connection Issues
- Verify Supabase URL and keys are correct
- Check Supabase project is not paused
- Ensure database schema is set up correctly

### Runtime Errors
- Check Vercel function logs
- Verify environment variables are accessible
- Check Supabase RLS (Row Level Security) policies if using auth

## Continuous Deployment

Vercel automatically deploys when you push to your main branch. To deploy other branches:

1. Push to a branch
2. Vercel creates a preview deployment
3. Merge to main for production deployment

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Supabase Documentation](https://supabase.com/docs)
