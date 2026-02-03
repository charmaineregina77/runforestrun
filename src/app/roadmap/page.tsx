import { roadmapMilestones } from "@/lib/mock-data";
import { getCompanyProfile } from "@/lib/data/company";
import { getRoadmap } from "@/lib/data/roadmap";
import { getDemoOwnerId } from "@/lib/demo";

export default async function RoadmapPage() {
  const demoOwnerId = getDemoOwnerId();

  let milestones = roadmapMilestones;

  if (demoOwnerId) {
    try {
      const company = await getCompanyProfile(demoOwnerId);
      const data = await getRoadmap(company.id);
      if (data.length) {
        milestones = data.map((item) => ({
          title: item.title,
          status: item.status,
          tasks: item.tasks.map((task) => task.title),
        }));
      }
    } catch (error) {
      console.error("Failed to load roadmap data", error);
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-emerald-300">
          Launch Roadmap
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Milestones to first sale</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Each milestone is a focused sprint. Complete the tasks in order and
          your store will be launch-ready.
        </p>
      </header>

      <div className="grid gap-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.title}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{milestone.title}</h2>
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {milestone.status}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {milestone.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-slate-950/40 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
