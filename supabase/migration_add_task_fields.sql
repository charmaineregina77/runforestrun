-- Migration: Add beginner-friendly fields to tasks table
-- Run this after the initial schema.sql

alter table public.tasks 
  add column if not exists why text, -- Why this task matters for success
  add column if not exists instructions jsonb, -- Step-by-step instructions array
  add column if not exists tutorial_video_url text, -- Link to tutorial video
  add column if not exists help_resources jsonb, -- Additional help resources
  add column if not exists difficulty text default 'intermediate'; -- beginner, intermediate, advanced

-- Add index for difficulty filtering
create index if not exists tasks_difficulty_idx on public.tasks (difficulty);

-- Add comment explaining new fields
comment on column public.tasks.why is 'Explains why this task matters for e-commerce success, written in beginner-friendly language';
comment on column public.tasks.instructions is 'Step-by-step instructions array for completing the task';
comment on column public.tasks.tutorial_video_url is 'URL to video tutorial for this task';
comment on column public.tasks.help_resources is 'JSON array of additional help resources (guides, articles, tools)';
comment on column public.tasks.difficulty is 'Task difficulty level: beginner, intermediate, or advanced';
