"use client";

import { getScoreColor, getScoreStatus } from "@/lib/success-scoring";
import type { SuccessMetric } from "@/lib/success-scoring";

interface SuccessMetricsProps {
  metrics: SuccessMetric[];
}

export function SuccessMetrics({ metrics }: SuccessMetricsProps) {
  const metricLabels: Record<string, { label: string; emoji: string }> = {
    store_readiness: { label: "Store Readiness", emoji: "🏪" },
    launch_readiness: { label: "Launch Readiness", emoji: "🚀" },
    marketing_readiness: { label: "Marketing Readiness", emoji: "📢" },
    operations_readiness: { label: "Operations Readiness", emoji: "📦" },
    overall_score: { label: "Overall Score", emoji: "⭐" },
  };

  const getMetric = (type: string) => {
    return metrics.find((m) => m.metric_type === type);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">How you're doing</h2>
        <p className="mt-2 text-slate-600">
          These scores show how ready you are for each stage of your business
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(metricLabels).map(([type, info]) => {
          const metric = getMetric(type);
          if (!metric) return null;

          const score = metric.score;
          const color = getScoreColor(score);
          const status = getScoreStatus(score);

          return (
            <div key={type} className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{info.emoji}</span>
                  <div>
                    <h3 className="font-semibold">{info.label}</h3>
                    <p className="text-xs text-slate-500">{status}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${color}`}>
                    {score}
                  </span>
                  <span className="text-xl text-slate-400">/100</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full transition-all ${color.replace("text-", "bg-")}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>

              {score < 80 && (
                <p className="mt-4 text-sm text-slate-600">
                  Complete more tasks to improve your score
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Score Highlight */}
      {getMetric("overall_score") && (
        <div className="glass rounded-3xl border-2 border-slate-900 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Overall Success Score</h3>
              <p className="mt-2 text-slate-600">
                {getMetric("overall_score")!.score >= 80
                  ? "You're ready to launch! 🎉"
                  : getMetric("overall_score")!.score >= 60
                    ? "You're getting close! Keep going."
                    : "You're making progress. Focus on completing tasks."}
              </p>
            </div>
            <div className="text-right">
              <div
                className={`text-6xl font-bold ${getScoreColor(getMetric("overall_score")!.score)}`}
              >
                {getMetric("overall_score")!.score}
              </div>
              <p className="text-sm text-slate-500">out of 100</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
