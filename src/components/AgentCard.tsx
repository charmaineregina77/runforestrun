import Link from "next/link";
import { Agent } from "@/lib/data/agents";
import { getRoleDisplayName } from "@/lib/roles";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const experienceLabels: Record<string, string> = {
    junior: "Junior",
    mid: "Mid-Level",
    senior: "Senior",
    expert: "Expert",
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{agent.name}</h3>
          <p className="mt-1 text-sm text-slate-600">
            {getRoleDisplayName(agent.role)}
          </p>
        </div>
        {agent.rating > 0 && (
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold">⭐</span>
              <span className="font-semibold">{agent.rating.toFixed(1)}</span>
            </div>
            <p className="text-xs text-slate-500">
              {agent.reviews_count} review{agent.reviews_count !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {agent.experience_level && (
        <div className="mt-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {experienceLabels[agent.experience_level] || agent.experience_level}
          </span>
        </div>
      )}

      {agent.bio && (
        <p className="mt-4 line-clamp-3 text-sm text-slate-600">{agent.bio}</p>
      )}

      {agent.hourly_rate && (
        <p className="mt-4 text-sm font-medium text-slate-900">
          ${agent.hourly_rate}/hour
        </p>
      )}

      {agent.skills && agent.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {agent.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
            >
              {skill}
            </span>
          ))}
          {agent.skills.length > 3 && (
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
              +{agent.skills.length - 3} more
            </span>
          )}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        {agent.portfolio_url && (
          <a
            href={agent.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            View Portfolio
          </a>
        )}
        <Link
          href={`/agents/${agent.id}`}
          className="flex-1 rounded-2xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800"
        >
          Connect
        </Link>
      </div>
    </div>
  );
}
