# Run Forest Run

**Run Forest Run** is an AI-powered tool designed to support e-commerce B2C businesses on their journey to success. The platform recognizes that building a successful e-commerce business requires the coordinated effort of multiple specialized roles, and provides a comprehensive task management system that guides teams through every stage of their launch and growth.

## What is Run Forest Run?

Run Forest Run turns your e-commerce launch into a daily plan. It helps teams focus on the highest-impact work without guessing what to do next. The platform organizes tasks by milestone (Validate → Build → Launch → Grow) and assigns them to the appropriate team roles, ensuring everyone knows what to work on and when.

### Key Features

- **Role-Based Task Management**: Tasks are organized by the 8 key roles that make e-commerce businesses successful
- **Milestone-Driven Roadmap**: Progress through Validate, Build, Launch, and Grow phases
- **Impact & Effort Prioritization**: Every task is rated by impact and effort to help teams focus on what matters most
- **Comprehensive Task Library**: 50+ pre-built tasks covering all aspects of e-commerce B2C success
- **KPI Tracking**: Monitor key metrics like Traffic, CVR, AOV, CAC, and ROAS
- **Progress Visualization**: Track completion and milestone progress in real-time

## Supported Roles

Run Forest Run recognizes that e-commerce success requires a team effort. The platform supports 8 key roles:

1. **Growth Marketer** - Drives customer acquisition through strategic marketing channels, conversion optimization, and growth experiments
2. **Media Buyer** - Manages paid advertising campaigns across platforms (Meta, Google, TikTok) to acquire customers profitably
3. **Designer** - Creates visual assets, brand identity, and user experience designs that convert visitors into customers
4. **Product Manager** - Owns the product experience, store setup, checkout flow, and ensures the e-commerce platform works flawlessly
5. **Data Analyst** - Tracks performance metrics, analyzes data, and provides insights to drive data-driven decision making
6. **Content Creator** - Creates compelling copy, content, and messaging that resonates with customers and drives conversions
7. **Operations** - Ensures smooth operations including fulfillment, customer service, inventory management, and logistics
8. **Customer Success** - Ensures customer satisfaction, retention, and lifetime value through support, engagement, and loyalty programs

Tasks can be assigned to a single role or multiple roles (e.g., "Designer + Product Manager") when collaboration is required.

## Getting Started

## Local setup

1. Copy `.env.example` to `.env.local` and fill in keys.
2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Supabase

Use `supabase/schema.sql` to create the MVP tables in Supabase.

Optionally run `supabase/seed.sql` for demo data, then set
`DEMO_OWNER_ID=11111111-1111-1111-1111-111111111111` in `.env.local`.

## Project Structure

### Core Libraries

- **`src/lib/roles.ts`** - Role definitions and type system for all 8 e-commerce roles
- **`src/lib/tasks/ecommerce-tasks.ts`** - Comprehensive task library (50+ tasks) organized by milestone and role
- **`src/lib/utils/roles.ts`** - Utility functions for filtering, grouping, and displaying tasks by role
- **`src/lib/data/`** - Data access layer for companies, tasks, milestones, KPIs, and actions

### Task Library

The platform includes a comprehensive task library covering all aspects of e-commerce B2C success:

- **Validate** (5 tasks): Customer research, product-market fit, pricing strategy, brand positioning
- **Build** (8 tasks): Store setup, design, analytics, email capture, fulfillment, customer support
- **Launch** (7 tasks): Ad campaigns, email sequences, landing pages, retargeting, social proof
- **Grow** (10 tasks): Creative testing, conversion optimization, upsells, loyalty programs, scaling

Each task includes:
- Role assignment(s)
- Impact rating (High/Medium/Low)
- Effort rating (Low/Medium/High)
- Detailed description
- Actionable checklist
- Milestone placement

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Supabase** - PostgreSQL database and backend
- **Tailwind CSS** - Styling

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
