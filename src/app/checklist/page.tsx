import { readinessChecklist } from "@/lib/mock-data";

export default function ChecklistPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Store Readiness
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Launch checklist</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Complete these essentials before you spend on ads. This is the minimum
          to look credible and convert visitors into buyers.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {readinessChecklist.map((group) => (
          <div key={group.title} className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
