# Supabase Setup for Run Forest Run

## Your Supabase Project
- **URL**: `https://cttoedvsuokbrgzooqrn.supabase.co`

## Environment Variables Needed

You need to set up these environment variables for your app to work:

### For Vercel Deployment:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: `https://cttoedvsuokbrgzooqrn.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Get this from: Supabase Dashboard → Settings → API → "anon public" key
   - This is used for client-side (browser) operations

3. **SUPABASE_SERVICE_ROLE_KEY**
   - Get this from: Supabase Dashboard → Settings → API → "service_role" key
   - ⚠️ Keep this secret! Only used server-side

## How to Get Your Keys

1. Go to your Supabase project: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn
2. Click **Settings** (gear icon) in the left sidebar
3. Click **API** in the settings menu
4. You'll see:
   - **Project URL** → Use for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → Use for `SUPABASE_SERVICE_ROLE_KEY` (click "Reveal" to see it)

## Setting Up the Database

1. In Supabase Dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `supabase/schema.sql`
4. Paste and click **Run** (or press Cmd/Ctrl + Enter)
5. (Optional) Run `supabase/seed.sql` for demo data

## For Local Development

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://cttoedvsuokbrgzooqrn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## For Vercel Deployment

When deploying to Vercel, add these as Environment Variables in the Vercel dashboard (before clicking Deploy).
