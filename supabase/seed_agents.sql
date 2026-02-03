-- Seed data for agents marketplace
-- Run this after migration_phase2_agents_success.sql

insert into public.agents (id, name, email, role, experience_level, hourly_rate, rating, reviews_count, bio, skills, portfolio_url, status)
values
  -- Designers
  (
    'a1111111-1111-1111-1111-111111111111',
    'Sarah Chen',
    'sarah@example.com',
    'Designer',
    'senior',
    75,
    4.8,
    24,
    'E-commerce design specialist with 8+ years creating high-converting stores. Expert in Shopify, brand identity, and conversion-focused design.',
    '["Shopify Design", "Brand Identity", "UI/UX", "Product Photography"]',
    'https://portfolio.example.com/sarah',
    'active'
  ),
  (
    'a2222222-2222-2222-2222-222222222222',
    'Marcus Johnson',
    'marcus@example.com',
    'Designer',
    'expert',
    120,
    4.9,
    47,
    'Award-winning designer specializing in DTC brands. Helped 50+ e-commerce businesses increase conversion rates by 30%+.',
    '["E-commerce Design", "Conversion Optimization", "Brand Strategy", "Visual Identity"]',
    'https://portfolio.example.com/marcus',
    'active'
  ),

  -- Developers
  (
    'a3333333-3333-3333-3333-333333333333',
    'Alex Rivera',
    'alex@example.com',
    'Product Manager',
    'senior',
    90,
    4.7,
    18,
    'Full-stack developer and Shopify expert. Builds custom features, integrations, and optimizes store performance.',
    '["Shopify Development", "Custom Features", "API Integration", "Performance Optimization"]',
    'https://portfolio.example.com/alex',
    'active'
  ),

  -- Marketers
  (
    'a4444444-4444-4444-4444-444444444444',
    'Jordan Kim',
    'jordan@example.com',
    'Growth Marketer',
    'expert',
    100,
    4.9,
    32,
    'Growth marketing expert who has scaled 20+ e-commerce brands from $0 to $1M+ revenue. Specializes in email marketing and conversion optimization.',
    '["Email Marketing", "Conversion Optimization", "Growth Strategy", "A/B Testing"]',
    'https://portfolio.example.com/jordan',
    'active'
  ),

  -- Media Buyers
  (
    'a5555555-5555-5555-5555-555555555555',
    'Taylor Smith',
    'taylor@example.com',
    'Media Buyer',
    'senior',
    85,
    4.8,
    28,
    'Paid ads specialist managing $500K+ monthly ad spend. Expert in Meta, Google, and TikTok ads for e-commerce.',
    '["Meta Ads", "Google Ads", "TikTok Ads", "ROAS Optimization"]',
    'https://portfolio.example.com/taylor',
    'active'
  ),

  -- Data Analysts
  (
    'a6666666-6666-6666-6666-666666666666',
    'Casey Brown',
    'casey@example.com',
    'Data Analyst',
    'senior',
    80,
    4.7,
    15,
    'Data analyst helping e-commerce businesses make data-driven decisions. Expert in GA4, conversion tracking, and performance dashboards.',
    '["Google Analytics", "Data Analysis", "Conversion Tracking", "Performance Dashboards"]',
    'https://portfolio.example.com/casey',
    'active'
  ),

  -- Content Creators
  (
    'a7777777-7777-7777-7777-777777777777',
    'Morgan Lee',
    'morgan@example.com',
    'Content Creator',
    'mid',
    60,
    4.6,
    12,
    'Copywriter and content strategist specializing in e-commerce. Creates compelling product descriptions, email sequences, and ad copy.',
    '["Copywriting", "Email Content", "Product Descriptions", "Ad Copy"]',
    'https://portfolio.example.com/morgan',
    'active'
  ),

  -- Operations
  (
    'a8888888-8888-8888-8888-888888888888',
    'Riley Davis',
    'riley@example.com',
    'Operations',
    'senior',
    70,
    4.8,
    20,
    'Operations expert helping e-commerce businesses streamline fulfillment, shipping, and customer service processes.',
    '["Fulfillment", "Shipping", "Inventory Management", "Process Optimization"]',
    'https://portfolio.example.com/riley',
    'active'
  )
on conflict (id) do nothing;
