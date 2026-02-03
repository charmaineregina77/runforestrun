/**
 * Run Forest Run - E-commerce B2C Role Definitions
 * 
 * This file defines all the roles that contribute to e-commerce B2C success.
 * Each role represents a key function in building and growing an e-commerce business.
 */

export type Role =
  | "Growth Marketer"
  | "Media Buyer"
  | "Designer"
  | "Product Manager"
  | "Data Analyst"
  | "Content Creator"
  | "Operations"
  | "Customer Success";

export interface RoleDefinition {
  id: Role;
  name: string;
  description: string;
  keyResponsibilities: string[];
  typicalTasks: string[];
}

export const ROLES: Record<Role, RoleDefinition> = {
  "Growth Marketer": {
    id: "Growth Marketer",
    name: "Growth Marketer",
    description:
      "Drives customer acquisition through strategic marketing channels, conversion optimization, and growth experiments.",
    keyResponsibilities: [
      "Customer acquisition strategy",
      "Conversion rate optimization",
      "Email marketing and automation",
      "Landing page optimization",
      "A/B testing and experimentation",
      "Marketing funnel development",
    ],
    typicalTasks: [
      "Set up email capture flows",
      "Optimize homepage messaging",
      "Create conversion-focused landing pages",
      "Design A/B tests",
      "Build marketing automation sequences",
    ],
  },
  "Media Buyer": {
    id: "Media Buyer",
    name: "Media Buyer",
    description:
      "Manages paid advertising campaigns across platforms (Meta, Google, TikTok) to acquire customers profitably.",
    keyResponsibilities: [
      "Paid ad campaign management",
      "Creative testing and optimization",
      "Budget allocation and scaling",
      "Audience targeting and segmentation",
      "Performance monitoring and ROAS optimization",
      "Ad platform setup and configuration",
    ],
    typicalTasks: [
      "Launch ad creatives",
      "Set up conversion tracking",
      "Create ad sets and campaigns",
      "Optimize ad spend and budgets",
      "Test new creative angles",
      "Scale winning campaigns",
    ],
  },
  Designer: {
    id: "Designer",
    name: "Designer",
    description:
      "Creates visual assets, brand identity, and user experience designs that convert visitors into customers.",
    keyResponsibilities: [
      "Brand identity and visual design",
      "Product page design (PDP)",
      "Homepage and landing page design",
      "Ad creative design",
      "Email template design",
      "Mobile-first responsive design",
    ],
    typicalTasks: [
      "Design homepage hero sections",
      "Create product page layouts",
      "Design ad creatives (static/video)",
      "Build email templates",
      "Create brand assets and guidelines",
      "Design conversion-focused CTAs",
    ],
  },
  "Product Manager": {
    id: "Product Manager",
    name: "Product Manager",
    description:
      "Owns the product experience, store setup, checkout flow, and ensures the e-commerce platform works flawlessly.",
    keyResponsibilities: [
      "Store and product setup",
      "Checkout and payment configuration",
      "Shipping and fulfillment setup",
      "Product catalog management",
      "User experience optimization",
      "Platform integrations",
    ],
    typicalTasks: [
      "Set up product pages",
      "Configure checkout and shipping",
      "Install and configure apps",
      "Set up payment methods",
      "Optimize product descriptions",
      "Manage inventory and variants",
    ],
  },
  "Data Analyst": {
    id: "Data Analyst",
    name: "Data Analyst",
    description:
      "Tracks performance metrics, analyzes data, and provides insights to drive data-driven decision making.",
    keyResponsibilities: [
      "Analytics setup and tracking",
      "KPI monitoring and reporting",
      "Data analysis and insights",
      "Conversion funnel analysis",
      "Customer behavior analysis",
      "Performance dashboards",
    ],
    typicalTasks: [
      "Install analytics tools (GA4, Meta Pixel)",
      "Set up conversion tracking",
      "Create performance dashboards",
      "Analyze conversion funnels",
      "Track and report KPIs",
      "Identify optimization opportunities",
    ],
  },
  "Content Creator": {
    id: "Content Creator",
    name: "Content Creator",
    description:
      "Creates compelling copy, content, and messaging that resonates with customers and drives conversions.",
    keyResponsibilities: [
      "Copywriting and messaging",
      "Product descriptions",
      "Email content and sequences",
      "Social media content",
      "Blog and SEO content",
      "Brand voice and tone",
    ],
    typicalTasks: [
      "Write homepage copy",
      "Create product descriptions",
      "Write email sequences",
      "Develop brand messaging",
      "Create social media content",
      "Write ad copy and headlines",
    ],
  },
  Operations: {
    id: "Operations",
    name: "Operations",
    description:
      "Ensures smooth operations including fulfillment, customer service, inventory management, and logistics.",
    keyResponsibilities: [
      "Fulfillment and shipping",
      "Inventory management",
      "Customer service",
      "Returns and refunds",
      "Supplier relationships",
      "Process optimization",
    ],
    typicalTasks: [
      "Set up shipping zones and rates",
      "Configure fulfillment workflows",
      "Set up customer service tools",
      "Create return policies",
      "Manage inventory levels",
      "Optimize fulfillment processes",
    ],
  },
  "Customer Success": {
    id: "Customer Success",
    name: "Customer Success",
    description:
      "Ensures customer satisfaction, retention, and lifetime value through support, engagement, and loyalty programs.",
    keyResponsibilities: [
      "Customer support",
      "Retention strategies",
      "Loyalty programs",
      "Customer feedback collection",
      "Upsell and cross-sell",
      "Customer onboarding",
    ],
    typicalTasks: [
      "Set up customer support system",
      "Create loyalty program",
      "Design onboarding flows",
      "Set up review collection",
      "Create upsell offers",
      "Build retention email sequences",
    ],
  },
};

/**
 * Get all available roles
 */
export function getAllRoles(): Role[] {
  return Object.keys(ROLES) as Role[];
}

/**
 * Get role definition by role ID
 */
export function getRoleDefinition(role: Role): RoleDefinition {
  return ROLES[role];
}

/**
 * Get role display name
 */
export function getRoleDisplayName(role: Role | string | null): string {
  if (!role) return "Unassigned";
  return ROLES[role as Role]?.name || role;
}

/**
 * Get role color for UI (can be extended with actual color values)
 */
export function getRoleColor(role: Role | string | null): string {
  const colorMap: Record<string, string> = {
    "Growth Marketer": "blue",
    "Media Buyer": "purple",
    Designer: "pink",
    "Product Manager": "green",
    "Data Analyst": "orange",
    "Content Creator": "yellow",
    Operations: "gray",
    "Customer Success": "teal",
  };
  return colorMap[role || ""] || "slate";
}

/**
 * Check if a role string is a valid role
 */
export function isValidRole(role: string | null): role is Role {
  return role !== null && role in ROLES;
}
