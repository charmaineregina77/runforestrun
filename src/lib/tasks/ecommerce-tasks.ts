/**
 * Run Forest Run - Comprehensive E-commerce B2C Task Library
 * 
 * This file contains a comprehensive library of tasks organized by milestone
 * and role, covering all aspects of building and growing an e-commerce B2C business.
 */

import { Role } from "../roles";

export type Impact = "High" | "Medium" | "Low";
export type Effort = "Low" | "Medium" | "High";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface EcommerceTask {
  id: string;
  title: string;
  role: Role | `${Role} + ${Role}`;
  impact: Impact;
  effort: Effort;
  description: string;
  checklist: string[];
  milestone: "Validate" | "Build" | "Launch" | "Grow";
  orderIndex: number;
  // Beginner-friendly enhancements
  why?: string; // Why this task matters for success
  instructions?: string[]; // Step-by-step instructions
  tutorialVideoUrl?: string; // Link to tutorial video
  helpResources?: Array<{
    type: "article" | "video" | "tool" | "guide";
    title: string;
    url: string;
  }>;
  difficulty?: Difficulty; // beginner, intermediate, advanced
}

/**
 * Comprehensive task library for e-commerce B2C businesses
 * Organized by milestone: Validate → Build → Launch → Grow
 */
export const ECOMMERCE_TASKS: EcommerceTask[] = [
  // ========== VALIDATE MILESTONE ==========
  {
    id: "validate-define-customer",
    title: "Define target customer persona",
    role: "Growth Marketer",
    impact: "High",
    effort: "Low",
    description:
      "Create a clear 1-sentence persona that defines who your ideal customer is, what they care about, and where they spend time online.",
    checklist: [
      "Write a 1-sentence customer persona",
      "Identify 3-5 key pain points",
      "List where they spend time online",
      "Define their buying behavior",
    ],
    milestone: "Validate",
    orderIndex: 0,
    why: "Knowing exactly who your customer is helps you create products, marketing, and messaging that actually resonates. Without this, you're guessing what people want - and that's expensive.",
    instructions: [
      "Think about who would buy your product. What's their age, location, interests?",
      "Write down their biggest problem or need that your product solves",
      "List 3-5 places they spend time online (social media, websites, forums)",
      "Describe how they typically make buying decisions",
      "Put it all in one clear sentence: 'My ideal customer is [description] who needs [problem] and I can find them [where]'"
    ],
    difficulty: "beginner",
    helpResources: [
      {
        type: "guide",
        title: "How to Create a Customer Persona (Step-by-Step)",
        url: "#"
      },
      {
        type: "tool",
        title: "Persona Template",
        url: "#"
      }
    ],
  },
  {
    id: "validate-product-market-signal",
    title: "Confirm product-market fit signal",
    role: "Product Manager",
    impact: "High",
    effort: "Medium",
    description:
      "Collect 5-10 customer interviews or pre-orders to validate that people actually want what you're building.",
    checklist: [
      "Conduct 5 customer interviews",
      "Ask about willingness to pay",
      "Identify top 3 objections",
      "Document key insights",
    ],
    milestone: "Validate",
    orderIndex: 1,
  },
  {
    id: "validate-pricing-anchor",
    title: "Choose pricing anchor and strategy",
    role: "Growth Marketer",
    impact: "Medium",
    effort: "Low",
    description:
      "Set your anchor price and bundle strategy. Research competitors and test price points that maximize revenue.",
    checklist: [
      "Research competitor pricing",
      "Set anchor price point",
      "Design bundle offers",
      "Test price sensitivity",
    ],
    milestone: "Validate",
    orderIndex: 2,
  },
  {
    id: "validate-brand-positioning",
    title: "Define brand positioning and messaging",
    role: "Content Creator",
    impact: "High",
    effort: "Medium",
    description:
      "Create your core value proposition and brand messaging that differentiates you from competitors.",
    checklist: [
      "Write core value proposition",
      "Define brand voice and tone",
      "Create messaging framework",
      "Document key differentiators",
    ],
    milestone: "Validate",
    orderIndex: 3,
  },
  {
    id: "validate-competitive-analysis",
    title: "Analyze competitive landscape",
    role: "Data Analyst",
    impact: "Medium",
    effort: "Low",
    description:
      "Research 5-10 competitors to understand market positioning, pricing, and messaging strategies.",
    checklist: [
      "List top 5 competitors",
      "Analyze their positioning",
      "Review their pricing strategy",
      "Document opportunities",
    ],
    milestone: "Validate",
    orderIndex: 4,
  },

  // ========== BUILD MILESTONE ==========
  {
    id: "build-homepage-pdp",
    title: "Finish homepage and product page design",
    role: "Designer + Product Manager",
    impact: "High",
    effort: "Medium",
    description:
      "Create conversion-focused homepage and product detail pages (PDP) that clearly communicate value and drive purchases.",
    checklist: [
      "Design homepage hero section",
      "Create product page layout",
      "Add trust signals and social proof",
      "Optimize for mobile",
      "Include clear CTAs",
    ],
    milestone: "Build",
    orderIndex: 0,
  },
  {
    id: "build-checkout-shipping",
    title: "Set up checkout and shipping configuration",
    role: "Product Manager + Operations",
    impact: "High",
    effort: "Low",
    description:
      "Configure checkout flow, payment methods, and shipping zones to ensure smooth order fulfillment.",
    checklist: [
      "Configure payment methods",
      "Set up shipping zones and rates",
      "Test checkout flow end-to-end",
      "Add shipping policy",
      "Set up tax calculation",
    ],
    milestone: "Build",
    orderIndex: 1,
  },
  {
    id: "build-analytics-setup",
    title: "Install analytics and tracking",
    role: "Data Analyst",
    impact: "High",
    effort: "Low",
    description:
      "Set up Google Analytics 4, Meta Pixel, and conversion tracking to measure performance from day one.",
    checklist: [
      "Install Google Analytics 4",
      "Install Meta Pixel",
      "Set up conversion events",
      "Test tracking accuracy",
      "Create basic dashboards",
    ],
    milestone: "Build",
    orderIndex: 2,
  },
  {
    id: "build-email-capture",
    title: "Add email capture flow",
    role: "Growth Marketer",
    impact: "Medium",
    effort: "Low",
    description:
      "Collect emails from visitors so you can nurture them into customers, even before they're ready to buy.",
    checklist: [
      "Add pop-up with offer",
      "Create email capture form",
      "Set up welcome email sequence",
      "Add footer email signup",
    ],
    milestone: "Build",
    orderIndex: 3,
  },
  {
    id: "build-brand-assets",
    title: "Create brand assets and guidelines",
    role: "Designer",
    impact: "Medium",
    effort: "Medium",
    description:
      "Develop logo, color palette, typography, and brand guidelines to ensure consistent visual identity.",
    checklist: [
      "Design logo and variations",
      "Define color palette",
      "Choose typography",
      "Create brand guidelines document",
      "Apply consistently across site",
    ],
    milestone: "Build",
    orderIndex: 4,
  },
  {
    id: "build-product-copy",
    title: "Write compelling product descriptions",
    role: "Content Creator",
    impact: "High",
    effort: "Medium",
    description:
      "Create product descriptions that highlight benefits, address objections, and drive conversions.",
    checklist: [
      "Write benefit-focused headlines",
      "Create detailed product descriptions",
      "Add social proof elements",
      "Include FAQ section",
      "Optimize for SEO",
    ],
    milestone: "Build",
    orderIndex: 5,
  },
  {
    id: "build-fulfillment-setup",
    title: "Configure fulfillment and inventory",
    role: "Operations",
    impact: "High",
    effort: "Medium",
    description:
      "Set up inventory management, fulfillment workflows, and supplier relationships to ensure smooth operations.",
    checklist: [
      "Set up inventory tracking",
      "Configure fulfillment workflows",
      "Connect with suppliers/3PL",
      "Set up low stock alerts",
      "Create packing slips",
    ],
    milestone: "Build",
    orderIndex: 6,
  },
  {
    id: "build-customer-support",
    title: "Set up customer support system",
    role: "Customer Success",
    impact: "Medium",
    effort: "Low",
    description:
      "Configure customer support tools and processes to handle inquiries and build trust.",
    checklist: [
      "Set up support email/chat",
      "Create FAQ page",
      "Write support templates",
      "Set response time goals",
    ],
    milestone: "Build",
    orderIndex: 7,
  },

  // ========== LAUNCH MILESTONE ==========
  {
    id: "launch-first-ads",
    title: "Launch your first two ad creatives",
    role: "Media Buyer + Designer",
    impact: "High",
    effort: "Medium",
    description:
      "Ship two simple creatives with different hooks (problem vs. transformation) to learn which angle converts best.",
    checklist: [
      "Pick two distinct hooks",
      "Create 2 static images or 10s videos",
      "Set up ad sets in Meta/Google",
      "Set $15-25/day budget for 7 days",
      "Configure conversion tracking",
    ],
    milestone: "Launch",
    orderIndex: 0,
  },
  {
    id: "launch-ad-budget-goal",
    title: "Set ad budget and performance goals",
    role: "Media Buyer",
    impact: "High",
    effort: "Low",
    description:
      "Define your daily budget, target ROAS, and performance benchmarks to guide campaign optimization.",
    checklist: [
      "Set daily ad budget",
      "Define target ROAS (2x+)",
      "Set CAC targets",
      "Create performance dashboard",
    ],
    milestone: "Launch",
    orderIndex: 1,
  },
  {
    id: "launch-email-sequence",
    title: "Publish launch email sequence",
    role: "Growth Marketer + Content Creator",
    impact: "Medium",
    effort: "Medium",
    description:
      "Send a 3-5 email launch sequence to your email list announcing your product and driving first sales.",
    checklist: [
      "Write launch email sequence",
      "Design email templates",
      "Set up automation",
      "Schedule send times",
      "Test email rendering",
    ],
    milestone: "Launch",
    orderIndex: 2,
  },
  {
    id: "launch-landing-pages",
    title: "Create ad-specific landing pages",
    role: "Designer + Growth Marketer",
    impact: "High",
    effort: "Medium",
    description:
      "Build dedicated landing pages that match your ad creative messaging to improve conversion rates.",
    checklist: [
      "Create landing page template",
      "Match ad messaging",
      "Add clear CTA",
      "Remove navigation distractions",
      "A/B test variations",
    ],
    milestone: "Launch",
    orderIndex: 3,
  },
  {
    id: "launch-retargeting",
    title: "Set up retargeting campaigns",
    role: "Media Buyer",
    impact: "Medium",
    effort: "Low",
    description:
      "Create retargeting campaigns for website visitors who didn't convert to maximize ROI.",
    checklist: [
      "Set up retargeting pixel",
      "Create retargeting audiences",
      "Design retargeting creatives",
      "Set lower budgets for retargeting",
    ],
    milestone: "Launch",
    orderIndex: 4,
  },
  {
    id: "launch-social-proof",
    title: "Collect and display social proof",
    role: "Customer Success + Content Creator",
    impact: "Medium",
    effort: "Low",
    description:
      "Gather reviews, testimonials, and user-generated content to build trust and credibility.",
    checklist: [
      "Set up review collection system",
      "Request reviews from early customers",
      "Display testimonials on site",
      "Share user-generated content",
    ],
    milestone: "Launch",
    orderIndex: 5,
  },
  {
    id: "launch-monitoring-dashboard",
    title: "Create performance monitoring dashboard",
    role: "Data Analyst",
    impact: "High",
    effort: "Medium",
    description:
      "Build a dashboard to track key metrics (traffic, CVR, AOV, CAC, ROAS) in real-time during launch.",
    checklist: [
      "Set up KPI dashboard",
      "Track traffic sources",
      "Monitor conversion rates",
      "Alert on anomalies",
    ],
    milestone: "Launch",
    orderIndex: 6,
  },

  // ========== GROW MILESTONE ==========
  {
    id: "grow-test-creatives",
    title: "Test 3 new ad creatives",
    role: "Media Buyer + Designer",
    impact: "High",
    effort: "Medium",
    description:
      "Continuously test new creative angles, hooks, and formats to find winning combinations and scale.",
    checklist: [
      "Identify 3 new creative angles",
      "Create new ad creatives",
      "Set up A/B tests",
      "Monitor performance for 7 days",
      "Scale winners, kill losers",
    ],
    milestone: "Grow",
    orderIndex: 0,
  },
  {
    id: "grow-optimize-pdp",
    title: "Optimize product page for conversions",
    role: "Product Manager + Designer",
    impact: "High",
    effort: "Medium",
    description:
      "A/B test product page elements (images, copy, CTAs) to improve conversion rates and average order value.",
    checklist: [
      "A/B test product images",
      "Test different CTA copy",
      "Add urgency elements",
      "Test bundle offers",
      "Optimize mobile experience",
    ],
    milestone: "Grow",
    orderIndex: 1,
  },
  {
    id: "grow-upsell-offer",
    title: "Introduce upsell and cross-sell offers",
    role: "Product Manager + Growth Marketer",
    impact: "High",
    effort: "Low",
    description:
      "Add post-purchase upsells and cross-sells to increase average order value and customer lifetime value.",
    checklist: [
      "Design upsell offer",
      "Set up post-purchase upsell",
      "Create bundle offers",
      "Test offer placement",
    ],
    milestone: "Grow",
    orderIndex: 2,
  },
  {
    id: "grow-email-automation",
    title: "Build advanced email automation",
    role: "Growth Marketer + Content Creator",
    impact: "Medium",
    effort: "Medium",
    description:
      "Create sophisticated email sequences (abandoned cart, post-purchase, win-back) to maximize revenue.",
    checklist: [
      "Set up abandoned cart emails",
      "Create post-purchase sequence",
      "Build win-back campaigns",
      "Segment email lists",
    ],
    milestone: "Grow",
    orderIndex: 3,
  },
  {
    id: "grow-loyalty-program",
    title: "Launch customer loyalty program",
    role: "Customer Success + Growth Marketer",
    impact: "Medium",
    effort: "Medium",
    description:
      "Create a loyalty or referral program to increase repeat purchases and customer lifetime value.",
    checklist: [
      "Design loyalty program structure",
      "Set up referral system",
      "Create rewards catalog",
      "Launch to existing customers",
    ],
    milestone: "Grow",
    orderIndex: 4,
  },
  {
    id: "grow-scale-ads",
    title: "Scale winning ad campaigns",
    role: "Media Buyer",
    impact: "High",
    effort: "Low",
    description:
      "Increase budgets on profitable campaigns and expand to new audiences and platforms.",
    checklist: [
      "Identify winning campaigns (ROAS > 2x)",
      "Gradually increase budgets",
      "Test lookalike audiences",
      "Expand to new platforms",
    ],
    milestone: "Grow",
    orderIndex: 5,
  },
  {
    id: "grow-content-strategy",
    title: "Develop content marketing strategy",
    role: "Content Creator + Growth Marketer",
    impact: "Medium",
    effort: "High",
    description:
      "Create blog content, social media strategy, and SEO-optimized content to drive organic traffic.",
    checklist: [
      "Create content calendar",
      "Write SEO blog posts",
      "Develop social media strategy",
      "Build backlink strategy",
    ],
    milestone: "Grow",
    orderIndex: 6,
  },
  {
    id: "grow-advanced-analytics",
    title: "Set up advanced analytics and attribution",
    role: "Data Analyst",
    impact: "Medium",
    effort: "Medium",
    description:
      "Implement advanced tracking, attribution modeling, and cohort analysis to understand customer behavior.",
    checklist: [
      "Set up multi-touch attribution",
      "Create cohort analysis",
      "Track customer lifetime value",
      "Build advanced dashboards",
    ],
    milestone: "Grow",
    orderIndex: 7,
  },
  {
    id: "grow-optimize-fulfillment",
    title: "Optimize fulfillment and operations",
    role: "Operations",
    impact: "Medium",
    effort: "Medium",
    description:
      "Streamline fulfillment processes, reduce costs, and improve shipping times to scale operations.",
    checklist: [
      "Audit fulfillment costs",
      "Negotiate better shipping rates",
      "Optimize packaging",
      "Reduce fulfillment time",
    ],
    milestone: "Grow",
    orderIndex: 8,
  },
  {
    id: "grow-customer-feedback",
    title: "Collect and act on customer feedback",
    role: "Customer Success + Product Manager",
    impact: "Medium",
    effort: "Low",
    description:
      "Systematically collect customer feedback and use it to improve products and experience.",
    checklist: [
      "Set up feedback collection",
      "Send post-purchase surveys",
      "Analyze feedback themes",
      "Prioritize improvements",
    ],
    milestone: "Grow",
    orderIndex: 9,
  },
];

/**
 * Get tasks by milestone
 */
export function getTasksByMilestone(
  milestone: "Validate" | "Build" | "Launch" | "Grow"
): EcommerceTask[] {
  return ECOMMERCE_TASKS.filter((task) => task.milestone === milestone);
}

/**
 * Get tasks by role
 */
export function getTasksByRole(role: Role): EcommerceTask[] {
  return ECOMMERCE_TASKS.filter(
    (task) =>
      task.role === role ||
      task.role.includes(role) ||
      task.role.includes(`${role} +`)
  );
}

/**
 * Get tasks by impact level
 */
export function getTasksByImpact(impact: Impact): EcommerceTask[] {
  return ECOMMERCE_TASKS.filter((task) => task.impact === impact);
}

/**
 * Get top priority tasks (High impact, Low effort)
 */
export function getTopPriorityTasks(): EcommerceTask[] {
  return ECOMMERCE_TASKS.filter(
    (task) => task.impact === "High" && task.effort === "Low"
  );
}
