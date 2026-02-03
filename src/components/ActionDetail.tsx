interface ActionDetailProps {
  title: string;
  role: string;
  impact: "High" | "Medium" | "Low";
  effort: "Low" | "Medium" | "High";
  summary: string;
  checklist: string[];
  why?: string;
  instructions?: string[];
  tutorialVideoUrl?: string;
  helpResources?: Array<{
    type: "article" | "video" | "tool" | "guide";
    title: string;
    url: string;
  }>;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export function ActionDetail({
  title,
  role,
  impact,
  effort,
  summary,
  checklist,
  why,
  instructions,
  tutorialVideoUrl,
  helpResources,
  difficulty,
}: ActionDetailProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Action Detail
        </p>
        <h1 className="mt-3 text-4xl font-semibold">{title}</h1>
        <p className="mt-4 text-base text-slate-600">{summary}</p>
      </header>

      {/* Why This Matters */}
      {why && (
        <section className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <h2 className="text-xl font-semibold">Why this matters</h2>
          </div>
          <p className="mt-4 text-base text-slate-700">{why}</p>
        </section>
      )}

      {/* Task Info */}
      <section className="glass rounded-3xl p-7">
        <div className="flex flex-wrap gap-3 text-base text-slate-600">
          <span className="rounded-full border border-slate-200/70 px-4 py-2">
            {role}
          </span>
          <span className="rounded-full border border-slate-200/70 px-4 py-2">
            Impact: {impact}
          </span>
          <span className="rounded-full border border-slate-200/70 px-4 py-2">
            Effort: {effort}
          </span>
          {difficulty && (
            <span
              className={`rounded-full border border-slate-200/70 px-4 py-2 font-medium ${
                difficultyColors[difficulty]
              }`}
            >
              Difficulty: {difficulty}
            </span>
          )}
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      {instructions && instructions.length > 0 && (
        <section className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <h2 className="text-xl font-semibold">How to do this (step-by-step)</h2>
          </div>
          <ol className="mt-4 space-y-4">
            {instructions.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-base text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Checklist (if no instructions, use checklist) */}
      {(!instructions || instructions.length === 0) && checklist.length > 0 && (
        <section className="glass rounded-3xl p-7">
          <h2 className="text-xl font-semibold">Steps to complete</h2>
          <ul className="mt-4 space-y-4 text-base text-slate-600">
            {checklist.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tutorial Video */}
      {tutorialVideoUrl && (
        <section className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎥</span>
            <h2 className="text-xl font-semibold">Watch a tutorial</h2>
          </div>
          <a
            href={tutorialVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800"
          >
            Watch Tutorial →
          </a>
        </section>
      )}

      {/* Help Resources */}
      {helpResources && helpResources.length > 0 && (
        <section className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <h2 className="text-xl font-semibold">Get more help</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {helpResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 hover:border-slate-300"
              >
                <span className="text-xl">
                  {resource.type === "article" && "📄"}
                  {resource.type === "video" && "🎥"}
                  {resource.type === "tool" && "🛠️"}
                  {resource.type === "guide" && "📖"}
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {resource.title}
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Get Help Button */}
      <section className="glass rounded-3xl p-7">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Need help with this?</h2>
            <p className="mt-2 text-base text-slate-600">
              We can connect you with an expert who can help you complete this task.
            </p>
          </div>
          <a
            href={`/agents?role=${encodeURIComponent(role)}&task=${encodeURIComponent(title)}`}
            className="rounded-2xl border-2 border-slate-900 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
          >
            Find an Expert →
          </a>
        </div>
      </section>
    </div>
  );
}
