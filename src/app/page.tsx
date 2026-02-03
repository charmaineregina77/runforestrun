import Link from "next/link";
import { roadmapMilestones, topActions } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-8">
        <p className="text-xs uppercase tracking-widest text-emerald-300">
          Founder Home
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          Your next 3 actions to reach first sales
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Run Forest Run turns your launch into a daily plan. Focus on the
          highest-impact work without guessing.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Top 3 Actions</h2>
            <span className="text-xs text-slate-400">Updated today</span>
          </div>
          <div className="grid gap-4">
            {topActions.map((action) => (
              <div
                key={action.id}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
              >
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{action.role}</span>
                  <span>
                    Impact: {action.impact} · Effort: {action.effort}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{action.summary}</p>
                <Link
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
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
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm text-slate-400">Current milestone</p>
            <h3 className="mt-2 text-xl font-semibold">Validate</h3>
            <p className="mt-2 text-sm text-slate-300">
              2 of 5 tasks complete. Keep momentum to unlock Build.
            </p>
            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-2/5 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-200">
              Upcoming milestones
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {roadmapMilestones.slice(1).map((milestone) => (
                <li
                  key={milestone.title}
                  className="flex items-center justify-between"
                >
                  <span>{milestone.title}</span>
                  <span className="text-xs text-slate-500">
                    {milestone.tasks.length} tasks
                  </span>
                </li>
              ))}
            </ul>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              href="/roadmap"
            >
              View roadmap →
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Store Readiness
          </p>
          <h3 className="mt-2 text-xl font-semibold">70% complete</h3>
          <p className="mt-2 text-sm text-slate-300">
            Finish 4 more tasks to launch ads.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Ads Ready
          </p>
          <h3 className="mt-2 text-xl font-semibold">No campaigns yet</h3>
          <p className="mt-2 text-sm text-slate-300">
            Create your first two creatives to unlock launch.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            KPIs
          </p>
          <h3 className="mt-2 text-xl font-semibold">Waiting on data</h3>
          <p className="mt-2 text-sm text-slate-300">
            Connect Shopify to start tracking performance.
          </p>
        </div>
      </section>
    </div>
  );
}
