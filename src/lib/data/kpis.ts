import { supabaseServer } from "@/lib/supabase/server";

export type Kpi = {
  id: string;
  label: string;
  value: string;
  status: string;
  hint: string | null;
  updated_at: string;
};

export async function getKpis(companyId: string) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("kpis")
    .select("id,label,value,status,hint,updated_at")
    .eq("company_id", companyId)
    .order("label");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Kpi[];
}
