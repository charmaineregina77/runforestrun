import { kpis } from "@/lib/mock-data";

const statusColor: Record<string, string> = {
  Red: "text-red-300",
  Yellow: "text-yellow-300",
  Green: "text-emerald-300",
};

export default function KpisPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-300">
          KPI Health
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Your launch metrics</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Once Shopify and Ads data are connected, these metrics will update in
          real-time.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <p className="text-xs uppercase tracking-widest text-slate-400">
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
