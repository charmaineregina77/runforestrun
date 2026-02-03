# Vercel Deployment Checklist - Run Forest Run

Follow these steps to deploy your app to Vercel using the Dashboard method.

## ✅ Pre-Deployment Checklist

### Step 1: Prepare Your Code for Git

If you haven't already, initialize git and push to GitHub/GitLab/Bitbucket:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Create a repository on GitHub/GitLab/Bitbucket, then:
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

### Step 2: Set Up Supabase (If Not Done)

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project (or use existing)
3. Wait for project to be ready
4. Go to **Settings** → **API**
5. Copy these values (you'll need them for Vercel):
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

6. Set up database:
   - Go to **SQL Editor** in Supabase
   - Click **New Query**
   - Copy and paste the entire contents of `supabase/schema.sql`
   - Click **Run** to create all tables
   - (Optional) Run `supabase/seed.sql` for demo data

### Step 3: Deploy to Vercel Dashboard

1. **Go to Vercel**: [vercel.com/new](https://vercel.com/new)
   - Sign in or create account

2. **Import Your Repository**:
   - Click "Import Project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your `runforestrun` repository
   - Click "Import"

3. **Configure Project** (Vercel should auto-detect Next.js):
   - **Framework Preset**: Next.js ✅
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Add Environment Variables** (IMPORTANT!):
   - Click "Environment Variables" section
   - Add each variable one by one:

   | Variable Name | Value | Notes |
   |--------------|-------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL | From Supabase Settings → API |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | From Supabase Settings → API |
   | `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service_role key | From Supabase Settings → API (secret!) |
   | `DEMO_OWNER_ID` | `11111111-1111-1111-1111-111111111111` | Optional - only if using demo data |

   ⚠️ Make sure to add these for **Production**, **Preview**, and **Development** environments (or at least Production)

5. **Deploy**:
   - Click "Deploy" button
   - Wait for build to complete (usually 1-2 minutes)
   - You'll see a success message with your deployment URL

### Step 4: Verify Deployment

1. Visit your deployment URL (e.g., `runforestrun.vercel.app`)
2. Check that the app loads correctly
3. If you see errors, check:
   - Vercel dashboard → Your project → **Deployments** → Click latest → **Logs**
   - Verify all environment variables are set correctly
   - Check Supabase project is active (not paused)

## 🎉 You're Done!

Your app is now live! Vercel will automatically:
- Deploy new versions when you push to your main branch
- Create preview deployments for pull requests
- Provide HTTPS and a global CDN

## 🔧 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Make sure `package.json` has correct build script

### App Loads But Shows Errors
- Check browser console for errors
- Verify Supabase keys are correct
- Ensure database schema is set up in Supabase

### Database Connection Issues
- Verify Supabase project URL is correct
- Check Supabase project is not paused
- Ensure service_role key is set (not just anon key)

## 📝 Next Steps

- Set up custom domain (Vercel → Settings → Domains)
- Configure automatic deployments
- Set up monitoring and analytics
