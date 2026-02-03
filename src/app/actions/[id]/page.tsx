import { notFound } from "next/navigation";
import { topActions } from "@/lib/mock-data";

type ActionDetailPageProps = {
  params: { id: string };
};

export default function ActionDetailPage({ params }: ActionDetailPageProps) {
  const action = topActions.find((item) => item.id === params.id);

  if (!action) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-300">
          Action Detail
        </p>
        <h1 className="mt-2 text-3xl font-semibold">{action.title}</h1>
        <p className="mt-3 text-sm text-slate-300">{action.summary}</p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 px-3 py-1">
            {action.role}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Impact: {action.impact}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Effort: {action.effort}
          </span>
        </div>

        <h2 className="mt-6 text-lg font-semibold">Steps to complete</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          {action.checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/40 px-4 py-3"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold">Suggested template</h2>
        <p className="mt-2 text-sm text-slate-300">
          Use this as your starting copy:
        </p>
        <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">
          Headline: “The simplest way to [solve core problem] without
          [biggest pain].”
          <br />
          Subhead: “Built for [target audience], ready in [timeframe].”
        </div>
      </section>
    </div>
  );
}
