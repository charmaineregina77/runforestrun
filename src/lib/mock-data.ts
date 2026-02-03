export type ActionItem = {
  id: string;
  title: string;
  role: string;
  impact: "High" | "Medium" | "Low";
  effort: "Low" | "Medium" | "High";
  summary: string;
  checklist: string[];
};

export const topActions: ActionItem[] = [
  {
    id: "clarify-offer",
    title: "Clarify your core offer on the homepage",
    role: "Product + Growth",
    impact: "High",
    effort: "Low",
    summary:
      "Rewrite the headline and subhead so a first-time visitor knows what you sell and why it matters in 5 seconds.",
    checklist: [
      "Write a 1-sentence value proposition",
      "Add a product-in-use hero image",
      "Include social proof above the fold",
    ],
  },
  {
    id: "launch-ads",
    title: "Launch your first two ad creatives",
    role: "Media Buyer + Designer",
    impact: "High",
    effort: "Medium",
    summary:
      "Ship two simple creatives with different hooks so you can learn which angle converts.",
    checklist: [
      "Pick two hooks (problem vs. transformation)",
      "Create 2 static images or 10s videos",
      "Set $15/day budget for 7 days",
    ],
  },
  {
    id: "capture-email",
    title: "Add an email capture flow",
    role: "Growth",
    impact: "Medium",
    effort: "Low",
    summary:
      "Collect emails so every visitor becomes a future customer, even before sales start.",
    checklist: [
      "Add a pop-up with a simple offer",
      "Create a 3-email welcome flow",
      "Add capture form to footer",
    ],
  },
];

export const roadmapMilestones = [
  {
    title: "Validate",
    status: "In progress",
    tasks: [
      "Define target customer",
      "Confirm product-market fit signal",
      "Choose pricing anchor",
    ],
  },
  {
    title: "Build",
    status: "Next up",
    tasks: [
      "Finish homepage and PDP",
      "Set up checkout + shipping",
      "Install analytics",
    ],
  },
  {
    title: "Launch",
    status: "Locked",
    tasks: ["Create first ad set", "Set budget and goal", "Publish launch email"],
  },
  {
    title: "Grow",
    status: "Locked",
    tasks: ["Test 3 new creatives", "Optimize PDP", "Introduce upsell offer"],
  },
];

export const readinessChecklist = [
  {
    title: "Brand & Messaging",
    items: [
      "Clear value proposition on homepage",
      "Logo and brand colors applied consistently",
      "3-5 benefit bullets on product page",
    ],
  },
  {
    title: "Store & Checkout",
    items: [
      "Product page includes trust signals",
      "Shipping and returns policy visible",
      "Checkout tested on mobile",
    ],
  },
  {
    title: "Growth Foundations",
    items: [
      "Email capture active",
      "Meta pixel installed",
      "Google Analytics installed",
    ],
  },
];

export const kpis = [
  { label: "Traffic", value: "0", status: "Yellow", hint: "Aim for 100+ visits" },
  { label: "CVR", value: "0%", status: "Red", hint: "Target 1.5%+" },
  { label: "AOV", value: "$0", status: "Red", hint: "Add bundles/upsells" },
  { label: "CAC", value: "$0", status: "Yellow", hint: "Benchmark $20-40" },
  { label: "ROAS", value: "0x", status: "Red", hint: "Goal 2x+" },
];
