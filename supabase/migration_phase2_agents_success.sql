-- Migration: Phase 2 - Agents Marketplace & Success Scoring
-- Run this after migration_add_task_fields.sql

-- Agents table
create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  role text not null, -- Growth Marketer, Media Buyer, Designer, Product Manager, Data Analyst, Content Creator, Operations, Customer Success
  experience_level text, -- junior, mid, senior, expert
  hourly_rate numeric,
  rating numeric default 0,
  reviews_count integer default 0,
  portfolio_url text,
  bio text,
  skills jsonb, -- Array of skills
  contact_info jsonb, -- Contact details
  status text default 'active', -- active, inactive, verified
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Agent connections (when users connect with agents)
create table if not exists public.agent_connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles (id) on delete cascade,
  agent_id uuid references public.agents (id) on delete cascade,
  company_id uuid references public.companies (id) on delete cascade,
  task_id uuid references public.tasks (id) on delete cascade,
  status text not null default 'requested', -- requested, connected, in_progress, completed, cancelled
  message text, -- Initial message from user
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Success metrics (readiness scores)
create table if not exists public.success_metrics (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id) on delete cascade,
  metric_type text not null, -- store_readiness, launch_readiness, marketing_readiness, operations_readiness, overall_score
  score integer not null check (score >= 0 and score <= 100), -- 0-100
  details jsonb, -- Additional details about the score
  calculated_at timestamp with time zone default now(),
  unique(company_id, metric_type)
);

-- User assessments (from onboarding)
create table if not exists public.user_assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles (id) on delete cascade,
  experience_level text, -- none, some, experienced
  skills jsonb, -- Skills user has
  gaps jsonb, -- Skills user needs help with
  roles_needed jsonb, -- Roles user needs help with
  budget_range text, -- low, medium, high
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(user_id)
);

-- Business profiles (product info, market research)
create table if not exists public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id) on delete cascade,
  product_description text,
  target_market text,
  competitors jsonb, -- Array of competitor info
  unique_value_prop text,
  market_research jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(company_id)
);

-- Indexes
create index if not exists agents_role_idx on public.agents (role);
create index if not exists agents_status_idx on public.agents (status);
create index if not exists agent_connections_user_idx on public.agent_connections (user_id);
create index if not exists agent_connections_agent_idx on public.agent_connections (agent_id);
create index if not exists agent_connections_company_idx on public.agent_connections (company_id);
create index if not exists success_metrics_company_idx on public.success_metrics (company_id);
create index if not exists user_assessments_user_idx on public.user_assessments (user_id);
create index if not exists business_profiles_company_idx on public.business_profiles (company_id);

-- Comments
comment on table public.agents is 'Service providers (designers, developers, marketers, etc.) that users can connect with';
comment on table public.agent_connections is 'Connections between users and agents for specific tasks/projects';
comment on table public.success_metrics is 'Readiness scores and success metrics for companies';
comment on table public.user_assessments is 'User experience assessments from onboarding';
comment on table public.business_profiles is 'Extended business information including product, market, competitors';
