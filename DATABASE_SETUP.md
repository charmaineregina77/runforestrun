# Database Setup - Step by Step

## Step 1: Open Supabase SQL Editor

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. You should see a SQL editor interface

## Step 2: Copy the Schema SQL

The SQL schema is in `supabase/schema.sql`. Here's what you need to run:

```sql
-- Run Forest Run MVP schema

create table if not exists public.profiles (
  id uuid primary key,
  email text unique,
  full_name text,
  created_at timestamp with time zone default now()
);

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles (id) on delete cascade,
  name text not null,
  product_category text,
  launch_target_date date,
  created_at timestamp with time zone default now()
);

create table if not exists public.milestones (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id) on delete cascade,
  title text not null,
  status text not null default 'Locked',
  order_index integer not null default 0
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  milestone_id uuid references public.milestones (id) on delete cascade,
  title text not null,
  role text, -- E-commerce role: Growth Marketer, Media Buyer, Designer, Product Manager, Data Analyst, Content Creator, Operations, Customer Success (or combinations like "Designer + Product Manager")
  impact text, -- High, Medium, Low
  effort text, -- Low, Medium, High
  description text,
  order_index integer not null default 0
);

create table if not exists public.task_completions (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks (id) on delete cascade,
  completed_by uuid references public.profiles (id) on delete cascade,
  completed_at timestamp with time zone default now()
);

create table if not exists public.kpis (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id) on delete cascade,
  label text not null,
  value text not null,
  status text not null,
  hint text,
  updated_at timestamp with time zone default now()
);

create index if not exists milestones_company_idx on public.milestones (company_id);
create index if not exists tasks_milestone_idx on public.tasks (milestone_id);
create index if not exists task_completions_task_idx on public.task_completions (task_id);
create index if not exists kpis_company_idx on public.kpis (company_id);
```

## Step 3: Run the SQL

1. **Copy the entire SQL above** (or from `supabase/schema.sql` file)
2. **Paste it** into the Supabase SQL Editor
3. **Click the "Run" button** (or press Cmd/Ctrl + Enter)
4. You should see: **"Success. No rows returned"** ✅

## Step 4: Verify Tables Were Created

1. In Supabase Dashboard, go to **Table Editor** (left sidebar)
2. You should see these tables:
   - ✅ profiles
   - ✅ companies
   - ✅ milestones
   - ✅ tasks
   - ✅ task_completions
   - ✅ kpis

## Optional: Add Demo Data

If you want to test with demo data:

1. Go back to SQL Editor
2. Open `supabase/seed.sql` in your project
3. Copy and paste that SQL
4. Click Run

This will create a demo company with sample tasks and milestones.

## ✅ Database Setup Complete!

Once you see the tables in Table Editor, you're done with database setup!
