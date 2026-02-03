import { kpis as mockKpis } from "@/lib/mock-data";
import { getCompanyProfile } from "@/lib/data/company";
import { getKpis } from "@/lib/data/kpis";
import { getDemoOwnerId } from "@/lib/demo";

const statusColor: Record<string, string> = {
  Red: "text-red-600",
  Yellow: "text-amber-600",
  Green: "text-emerald-600",
};

export default async function KpisPage() {
  const demoOwnerId = getDemoOwnerId();
  let kpis = mockKpis;

  if (demoOwnerId) {
    try {
      const company = await getCompanyProfile(demoOwnerId);
      const data = await getKpis(company.id);
      if (data.length) {
        kpis = data.map((kpi) => ({
          label: kpi.label,
          value: kpi.value,
          status: kpi.status,
          hint: kpi.hint ?? "",
        }));
      }
    } catch (error) {
      console.error("Failed to load KPI data", error);
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          KPI Health
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Your launch metrics</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Once Shopify and Ads data are connected, these metrics will update in
          real-time.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {kpi.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{kpi.value}</h2>
            <p className={`mt-2 text-sm ${statusColor[kpi.status]}`}>
              {kpi.status} · {kpi.hint}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
