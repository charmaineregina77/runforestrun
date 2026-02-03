import { supabaseServer } from "@/lib/supabase/server";

export type ActionTask = {
  id: string;
  title: string;
  role: string | null;
  impact: string | null;
  effort: string | null;
  description: string | null;
  milestone_id: string | null;
};

export async function getTopActions(companyId: string, limit = 3) {
  const supabase = supabaseServer();
  const { data: milestoneRows, error: milestoneError } = await supabase
    .from("milestones")
    .select("id")
    .eq("company_id", companyId);

  if (milestoneError) {
    throw new Error(milestoneError.message);
  }

  const milestoneIds = (milestoneRows ?? []).map((row) => row.id);

  if (!milestoneIds.length) {
    return [];
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("id,title,role,impact,effort,description,milestone_id")
    .in("milestone_id", milestoneIds)
    .order("order_index", { ascending: true })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as ActionTask[];
}

export async function getActionById(actionId: string) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("tasks")
    .select("id,title,role,impact,effort,description,milestone_id")
    .eq("id", actionId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as ActionTask;
}
