/**
 * Success Scoring System
 * Calculates readiness scores for different aspects of the e-commerce business
 */

import { supabaseServer } from "./supabase/server";

export type MetricType =
  | "store_readiness"
  | "launch_readiness"
  | "marketing_readiness"
  | "operations_readiness"
  | "overall_score";

export interface SuccessMetric {
  id: string;
  company_id: string;
  metric_type: MetricType;
  score: number; // 0-100
  details: Record<string, any>;
  calculated_at: string;
}

/**
 * Calculate store readiness score
 * Based on: product pages, checkout setup, payment methods, shipping
 */
export async function calculateStoreReadiness(
  companyId: string
): Promise<number> {
  const supabase = supabaseServer();

  // Get all tasks for Build milestone
  const { data: milestones } = await supabase
    .from("milestones")
    .select("id")
    .eq("company_id", companyId)
    .eq("title", "Build")
    .single();

  if (!milestones) return 0;

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, title")
    .eq("milestone_id", milestones.id);

  if (!tasks || tasks.length === 0) return 0;

  // Get completed tasks
  const { data: completions } = await supabase
    .from("task_completions")
    .select("task_id")
    .in(
      "task_id",
      tasks.map((t) => t.id)
    );

  const completedTaskIds = new Set(
    completions?.map((c) => c.task_id) || []
  );

  // Store-related tasks (weighted)
  const storeTasks = [
    { id: "build-homepage-pdp", weight: 30 },
    { id: "build-checkout-shipping", weight: 25 },
    { id: "build-product-copy", weight: 20 },
    { id: "build-brand-assets", weight: 15 },
    { id: "build-email-capture", weight: 10 },
  ];

  let score = 0;
  let totalWeight = 0;

  for (const task of storeTasks) {
    const taskData = tasks.find((t) => t.id === task.id);
    if (taskData) {
      totalWeight += task.weight;
      if (completedTaskIds.has(taskData.id)) {
        score += task.weight;
      }
    }
  }

  return totalWeight > 0 ? Math.round((score / totalWeight) * 100) : 0;
}

/**
 * Calculate launch readiness score
 * Based on: ads setup, email sequences, landing pages, analytics
 */
export async function calculateLaunchReadiness(
  companyId: string
): Promise<number> {
  const supabase = supabaseServer();

  const { data: milestones } = await supabase
    .from("milestones")
    .select("id")
    .eq("company_id", companyId)
    .eq("title", "Launch")
    .single();

  if (!milestones) return 0;

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id")
    .eq("milestone_id", milestones.id);

  if (!tasks || tasks.length === 0) return 0;

  const { data: completions } = await supabase
    .from("task_completions")
    .select("task_id")
    .in(
      "task_id",
      tasks.map((t) => t.id)
    );

  const completedCount = completions?.length || 0;
  const totalTasks = tasks.length;

  return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
}

/**
 * Calculate marketing readiness score
 * Based on: email capture, analytics, ad setup, content
 */
export async function calculateMarketingReadiness(
  companyId: string
): Promise<number> {
  const supabase = supabaseServer();

  // Check for marketing-related tasks across all milestones
  const { data: milestones } = await supabase
    .from("milestones")
    .select("id, title")
    .eq("company_id", companyId);

  if (!milestones || milestones.length === 0) return 0;

  const milestoneIds = milestones.map((m) => m.id);

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, role")
    .in("milestone_id", milestoneIds)
    .in("role", [
      "Growth Marketer",
      "Media Buyer",
      "Content Creator",
      "Data Analyst",
    ]);

  if (!tasks || tasks.length === 0) return 0;

  const { data: completions } = await supabase
    .from("task_completions")
    .select("task_id")
    .in(
      "task_id",
      tasks.map((t) => t.id)
    );

  const completedCount = completions?.length || 0;
  const totalTasks = tasks.length;

  return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
}

/**
 * Calculate operations readiness score
 * Based on: fulfillment, shipping, customer support, inventory
 */
export async function calculateOperationsReadiness(
  companyId: string
): Promise<number> {
  const supabase = supabaseServer();

  const { data: milestones } = await supabase
    .from("milestones")
    .select("id")
    .eq("company_id", companyId);

  if (!milestones || milestones.length === 0) return 0;

  const milestoneIds = milestones.map((m) => m.id);

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id")
    .in("milestone_id", milestoneIds)
    .in("role", ["Operations", "Customer Success"]);

  if (!tasks || tasks.length === 0) return 0;

  const { data: completions } = await supabase
    .from("task_completions")
    .select("task_id")
    .in(
      "task_id",
      tasks.map((t) => t.id)
    );

  const completedCount = completions?.length || 0;
  const totalTasks = tasks.length;

  return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
}

/**
 * Calculate overall success score
 * Weighted average of all readiness scores
 */
export async function calculateOverallScore(
  companyId: string
): Promise<number> {
  const [store, launch, marketing, operations] = await Promise.all([
    calculateStoreReadiness(companyId),
    calculateLaunchReadiness(companyId),
    calculateMarketingReadiness(companyId),
    calculateOperationsReadiness(companyId),
  ]);

  // Weighted average
  const overall =
    store * 0.3 + launch * 0.3 + marketing * 0.25 + operations * 0.15;

  return Math.round(overall);
}

/**
 * Get all success metrics for a company
 */
export async function getSuccessMetrics(
  companyId: string
): Promise<SuccessMetric[]> {
  const supabase = supabaseServer();

  // Calculate all metrics
  const [store, launch, marketing, operations, overall] = await Promise.all([
    calculateStoreReadiness(companyId),
    calculateLaunchReadiness(companyId),
    calculateMarketingReadiness(companyId),
    calculateOperationsReadiness(companyId),
    calculateOverallScore(companyId),
  ]);

  // Save to database
  const metrics: Omit<SuccessMetric, "id" | "calculated_at">[] = [
    {
      company_id: companyId,
      metric_type: "store_readiness",
      score: store,
      details: {},
    },
    {
      company_id: companyId,
      metric_type: "launch_readiness",
      score: launch,
      details: {},
    },
    {
      company_id: companyId,
      metric_type: "marketing_readiness",
      score: marketing,
      details: {},
    },
    {
      company_id: companyId,
      metric_type: "operations_readiness",
      score: operations,
      details: {},
    },
    {
      company_id: companyId,
      metric_type: "overall_score",
      score: overall,
      details: {
        store_readiness: store,
        launch_readiness: launch,
        marketing_readiness: marketing,
        operations_readiness: operations,
      },
    },
  ];

  // Upsert metrics
  for (const metric of metrics) {
    await supabase.from("success_metrics").upsert(
      {
        ...metric,
        calculated_at: new Date().toISOString(),
      },
      {
        onConflict: "company_id,metric_type",
      }
    );
  }

  // Return from database
  const { data, error } = await supabase
    .from("success_metrics")
    .select("*")
    .eq("company_id", companyId)
    .order("calculated_at", { ascending: false });

  if (error) throw error;

  return (data || []) as SuccessMetric[];
}

/**
 * Get score color (for UI)
 */
export function getScoreColor(score: number): string {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-yellow-600";
  if (score >= 40) return "text-orange-600";
  return "text-red-600";
}

/**
 * Get score status text
 */
export function getScoreStatus(score: number): string {
  if (score >= 80) return "Ready";
  if (score >= 60) return "Almost Ready";
  if (score >= 40) return "Getting There";
  return "Needs Work";
}
