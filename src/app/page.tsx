import Link from "next/link";
import { roadmapMilestones, topActions as mockActions } from "@/lib/mock-data";
import { getCompanyProfile } from "@/lib/data/company";
import { getTopActions } from "@/lib/data/actions";
import { getDemoOwnerId } from "@/lib/demo";

export default async function Home() {
  const demoOwnerId = getDemoOwnerId();
  let topActions = mockActions;

  if (demoOwnerId) {
    try {
      const company = await getCompanyProfile(demoOwnerId);
      const data = await getTopActions(company.id);
      if (data.length) {
        topActions = data.map((action) => ({
          id: action.id,
          title: action.title,
          role: action.role ?? "Growth",
          impact: (action.impact ?? "Medium") as "High" | "Medium" | "Low",
          effort: (action.effort ?? "Low") as "High" | "Medium" | "Low",
          summary:
            action.description ??
            "Complete this action to move your launch forward.",
          checklist: [],
        }));
      }
    } catch (error) {
      console.error("Failed to load top actions", error);
    }
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Founder Home
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          Your next 3 actions to reach first sales
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Run Forest Run turns your launch into a daily plan. Focus on the
          highest-impact work without guessing.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Top 3 Actions</h2>
            <span className="text-xs text-slate-500">Updated today</span>
          </div>
          <div className="grid gap-4">
            {topActions.map((action) => (
              <div
                key={action.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{action.role}</span>
                  <span>
                    Impact: {action.impact} · Effort: {action.effort}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{action.summary}</p>
                <Link
                  className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:text-slate-700"
                  href={`/actions/${action.id}`}
                >
                  Open action →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Launch Progress</h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Current milestone</p>
            <h3 className="mt-2 text-xl font-semibold">Validate</h3>
            <p className="mt-2 text-sm text-slate-600">
              2 of 5 tasks complete. Keep momentum to unlock Build.
            </p>
            <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-2/5 rounded-full bg-slate-900" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700">
              Upcoming milestones
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {roadmapMilestones.slice(1).map((milestone) => (
                <li
                  key={milestone.title}
                  className="flex items-center justify-between"
                >
                  <span>{milestone.title}</span>
                  <span className="text-xs text-slate-400">
                    {milestone.tasks.length} tasks
                  </span>
                </li>
              ))}
            </ul>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:text-slate-700"
              href="/roadmap"
            >
              View roadmap →
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Store Readiness
          </p>
          <h3 className="mt-2 text-xl font-semibold">70% complete</h3>
          <p className="mt-2 text-sm text-slate-600">
            Finish 4 more tasks to launch ads.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Ads Ready
          </p>
          <h3 className="mt-2 text-xl font-semibold">No campaigns yet</h3>
          <p className="mt-2 text-sm text-slate-600">
            Create your first two creatives to unlock launch.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            KPIs
          </p>
          <h3 className="mt-2 text-xl font-semibold">Waiting on data</h3>
          <p className="mt-2 text-sm text-slate-600">
            Connect Shopify to start tracking performance.
          </p>
        </div>
      </section>
    </div>
  );
}
