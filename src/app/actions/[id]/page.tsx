import { notFound } from "next/navigation";
import { topActions } from "@/lib/mock-data";
import { getActionById } from "@/lib/data/actions";
import { getDemoOwnerId } from "@/lib/demo";

type ActionDetailPageProps = {
  params: { id: string };
};

export default async function ActionDetailPage({
  params,
}: ActionDetailPageProps) {
  const demoOwnerId = getDemoOwnerId();

  let action =
    topActions.find((item) => item.id === params.id) ??
    (demoOwnerId ? null : null);

  if (!action && demoOwnerId) {
    try {
      const data = await getActionById(params.id);
      action = {
        id: data.id,
        title: data.title,
        role: data.role ?? "Growth",
        impact: (data.impact ?? "Medium") as "High" | "Medium" | "Low",
        effort: (data.effort ?? "Low") as "High" | "Medium" | "Low",
        summary:
          data.description ?? "Complete this action to move your launch forward.",
        checklist: [],
      };
    } catch (error) {
      console.error("Failed to load action detail", error);
    }
  }

  if (!action) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Action Detail
        </p>
        <h1 className="mt-2 text-3xl font-semibold">{action.title}</h1>
        <p className="mt-3 text-sm text-slate-600">{action.summary}</p>
      </header>

      <section className="glass rounded-2xl p-6">
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full border border-slate-200 px-3 py-1">
            {action.role}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            Impact: {action.impact}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            Effort: {action.effort}
          </span>
        </div>

        <h2 className="mt-6 text-lg font-semibold">Steps to complete</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          {action.checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Suggested template</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use this as your starting copy:
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700">
          Headline: “The simplest way to [solve core problem] without
          [biggest pain].”
          <br />
          Subhead: “Built for [target audience], ready in [timeframe].”
        </div>
      </section>
    </div>
  );
}
