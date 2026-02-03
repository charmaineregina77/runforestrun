import { redirect } from "next/navigation";
import { upsertCompanyProfile } from "@/lib/data/company";
import { getDemoOwnerId } from "@/lib/demo";

async function saveCompanyProfile(formData: FormData) {
  "use server";

  const demoOwnerId = getDemoOwnerId();

  if (!demoOwnerId) {
    throw new Error("Missing DEMO_OWNER_ID.");
  }

  const name = String(formData.get("brand_name") ?? "").trim();
  const productCategory = String(formData.get("product_category") ?? "").trim();
  const launchTargetDate = String(formData.get("launch_target_date") ?? "").trim();

  if (!name) {
    throw new Error("Brand name is required.");
  }

  await upsertCompanyProfile(demoOwnerId, {
    name,
    product_category: productCategory || null,
    launch_target_date: launchTargetDate || null,
  });

  redirect("/");
}

export default function OnboardingPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Onboarding
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Connect your store</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Plug in Shopify and your ad platforms so Run Forest Run can generate
          your daily action plan.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Company profile</h2>
          <p className="mt-3 text-base text-slate-600">
            Tell us what you sell so we can personalize your roadmap.
          </p>
          <form action={saveCompanyProfile} className="mt-5 space-y-4">
            <input
              name="brand_name"
              className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900"
              placeholder="Brand name"
              required
            />
            <input
              name="product_category"
              className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900"
              placeholder="Product category"
            />
            <input
              name="launch_target_date"
              type="date"
              className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900"
            />
            <button className="w-full rounded-2xl bg-slate-900 py-3 text-base font-semibold text-white">
              Save profile
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="glass rounded-3xl p-7">
            <h2 className="text-xl font-semibold">Shopify</h2>
            <p className="mt-3 text-base text-slate-600">
              Connect your store to track orders, products, and traffic.
            </p>
            <button className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-3 text-base font-semibold text-slate-700">
              Connect Shopify
            </button>
          </div>
          <div className="glass rounded-3xl p-7">
            <h2 className="text-xl font-semibold">Meta + Google Ads</h2>
            <p className="mt-3 text-base text-slate-600">
              Pull spend and performance data to shape your action plan.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <button className="rounded-2xl border border-slate-300 px-4 py-3 text-base font-semibold text-slate-700">
                Connect Meta
              </button>
              <button className="rounded-2xl border border-slate-300 px-4 py-3 text-base font-semibold text-slate-700">
                Connect Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
