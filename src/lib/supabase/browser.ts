import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabaseBrowser = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase browser keys are missing.");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};
