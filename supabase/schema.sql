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
  role text,
  impact text,
  effort text,
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
