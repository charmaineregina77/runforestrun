import { supabaseServer } from "@/lib/supabase/server";

export type CompanyProfile = {
  id: string;
  name: string;
  product_category: string | null;
  launch_target_date: string | null;
};

export async function getCompanyProfile(ownerId: string) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("companies")
    .select("id,name,product_category,launch_target_date")
    .eq("owner_id", ownerId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as CompanyProfile;
}

export async function upsertCompanyProfile(
  ownerId: string,
  profile: Omit<CompanyProfile, "id">,
) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("companies")
    .upsert(
      {
        owner_id: ownerId,
        name: profile.name,
        product_category: profile.product_category,
        launch_target_date: profile.launch_target_date,
      },
      { onConflict: "owner_id" },
    )
    .select("id,name,product_category,launch_target_date")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as CompanyProfile;
}
