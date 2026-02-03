import { supabaseServer } from "@/lib/supabase/server";

export type Milestone = {
  id: string;
  title: string;
  status: string;
  order_index: number;
  tasks: {
    id: string;
    title: string;
    role: string | null;
    impact: string | null;
    effort: string | null;
    description: string | null;
    order_index: number;
  }[];
};

export async function getRoadmap(companyId: string) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("milestones")
    .select(
      "id,title,status,order_index,tasks(id,title,role,impact,effort,description,order_index)",
    )
    .eq("company_id", companyId)
    .order("order_index", { ascending: true })
    .order("order_index", { foreignTable: "tasks", ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Milestone[];
}
