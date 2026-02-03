import { readinessChecklist } from "@/lib/mock-data";

export default function ChecklistPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Store Readiness
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Launch checklist</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Complete these essentials before you spend on ads. This is the minimum
          to look credible and convert visitors into buyers.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        {readinessChecklist.map((group) => (
          <div key={group.title} className="glass rounded-3xl p-7">
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <ul className="mt-5 space-y-4 text-base text-slate-600">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
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
