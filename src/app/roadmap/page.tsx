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
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Launch Roadmap
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Milestones to first sale</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Each milestone is a focused sprint. Complete the tasks in order and
          your store will be launch-ready.
        </p>
      </header>

      <div className="grid gap-8">
        {milestones.map((milestone) => (
          <div key={milestone.title} className="glass rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{milestone.title}</h2>
              <span className="text-xs uppercase tracking-widest text-slate-500">
                {milestone.status}
              </span>
            </div>
            <ul className="mt-5 space-y-3 text-base text-slate-600">
              {milestone.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
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
