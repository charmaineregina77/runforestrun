-- Demo seed data for Run Forest Run MVP

insert into public.profiles (id, email, full_name)
values ('11111111-1111-1111-1111-111111111111', 'demo@runforestrun.ai', 'Demo Founder')
on conflict (id) do nothing;

insert into public.companies (id, owner_id, name, product_category, launch_target_date)
values (
  '22222222-2222-2222-2222-222222222222',
  '11111111-1111-1111-1111-111111111111',
  'Run Forest Run Demo',
  'Wellness',
  '2026-03-01'
)
on conflict (id) do nothing;

insert into public.milestones (id, company_id, title, status, order_index)
values
  ('33333333-3333-3333-3333-333333333331', '22222222-2222-2222-2222-222222222222', 'Validate', 'In progress', 0),
  ('33333333-3333-3333-3333-333333333332', '22222222-2222-2222-2222-222222222222', 'Build', 'Next up', 1),
  ('33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', 'Launch', 'Locked', 2),
  ('33333333-3333-3333-3333-333333333334', '22222222-2222-2222-2222-222222222222', 'Grow', 'Locked', 3)
on conflict (id) do nothing;

insert into public.tasks (milestone_id, title, role, impact, effort, description, order_index)
values
  ('33333333-3333-3333-3333-333333333331', 'Define target customer', 'Growth', 'High', 'Low', 'Create a 1 sentence persona', 0),
  ('33333333-3333-3333-3333-333333333331', 'Confirm product-market signal', 'Product', 'High', 'Medium', 'Collect 5 customer interviews', 1),
  ('33333333-3333-3333-3333-333333333331', 'Choose pricing anchor', 'Growth', 'Medium', 'Low', 'Set anchor and bundle pricing', 2),
  ('33333333-3333-3333-3333-333333333332', 'Finish homepage and PDP', 'Design', 'High', 'Medium', 'Polish store visuals', 0),
  ('33333333-3333-3333-3333-333333333332', 'Set up checkout and shipping', 'Product', 'High', 'Low', 'Configure shipping zones', 1),
  ('33333333-3333-3333-3333-333333333332', 'Install analytics', 'Data', 'Medium', 'Low', 'Add Meta pixel and GA4', 2);

insert into public.kpis (company_id, label, value, status, hint)
values
  ('22222222-2222-2222-2222-222222222222', 'Traffic', '0', 'Yellow', 'Aim for 100+ visits'),
  ('22222222-2222-2222-2222-222222222222', 'CVR', '0%', 'Red', 'Target 1.5%+'),
  ('22222222-2222-2222-2222-222222222222', 'AOV', '$0', 'Red', 'Add bundles/upsells'),
  ('22222222-2222-2222-2222-222222222222', 'CAC', '$0', 'Yellow', 'Benchmark $20-40'),
  ('22222222-2222-2222-2222-222222222222', 'ROAS', '0x', 'Red', 'Goal 2x+');
