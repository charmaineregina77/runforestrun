import Link from "next/link";

interface TaskCardProps {
  id: string;
  title: string;
  role: string;
  impact: "High" | "Medium" | "Low";
  effort: "Low" | "Medium" | "High";
  summary: string;
  why?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export function TaskCard({
  id,
  title,
  role,
  impact,
  effort,
  summary,
  why,
  difficulty,
}: TaskCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-3">
          <span>{role}</span>
          {difficulty && (
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                difficultyColors[difficulty]
              }`}
            >
              {difficulty}
            </span>
          )}
        </div>
        <span>
          Impact: {impact} · Effort: {effort}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-base text-slate-600">{summary}</p>
      {why && (
        <div className="mt-4 rounded-2xl bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-900">Why this matters:</p>
          <p className="mt-1 text-sm text-blue-800">{why}</p>
        </div>
      )}
      <Link
        className="mt-5 inline-flex text-sm font-semibold text-slate-900 hover:text-slate-700"
        href={`/actions/${id}`}
      >
        Open action →
      </Link>
    </div>
  );
}
