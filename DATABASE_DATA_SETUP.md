# Database Data Setup - Run Forest Run

## Step 1: Create Database Tables (If Not Done)

First, make sure your database schema is set up:

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. Copy the ENTIRE contents of `supabase/schema.sql`
3. Paste and click **Run**
4. Verify tables exist in **Table Editor**

## Step 2: Add Demo Data (Optional but Recommended)

To see your app working with sample data, add the demo seed data:

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. Copy the ENTIRE contents of `supabase/seed.sql`
3. Paste and click **Run**
4. You should see: "Success. No rows returned" ✅

## Step 3: Enable Demo Mode in Vercel

After adding seed data, enable demo mode:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Click **Add New**
3. **Key**: `DEMO_OWNER_ID`
4. **Value**: `11111111-1111-1111-1111-111111111111`
5. **Environments**: Check all (Production, Preview, Development)
6. Click **Save**
7. **Redeploy** (or wait for next auto-deploy)

## Step 4: Verify Data

1. Go to Supabase → **Table Editor**
2. You should see data in:
   - ✅ `profiles` table (1 demo user)
   - ✅ `companies` table (1 demo company)
   - ✅ `milestones` table (4 milestones)
   - ✅ `tasks` table (6 tasks)
   - ✅ `kpis` table (1 KPI)

## What the Demo Data Includes

- **Demo User**: demo@runforestrun.ai
- **Demo Company**: "Run Forest Run Demo"
- **4 Milestones**: Validate, Build, Launch, Grow
- **6 Sample Tasks**: Various tasks across milestones
- **1 KPI**: Traffic metric

## Adding Your Own Data

Once you understand the structure, you can:

1. **Add your own profile** in the `profiles` table
2. **Create your own company** in the `companies` table
3. **Add milestones and tasks** through the app or directly in Supabase

## Next Steps

After adding demo data:
1. Visit your Vercel app URL
2. The app should now show the demo company and tasks
3. You can explore the interface and see how it works
