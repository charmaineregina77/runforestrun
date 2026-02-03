import { getSuccessMetrics } from "@/lib/success-scoring";
import { SuccessMetrics } from "@/components/SuccessMetrics";
import { getDemoOwnerId } from "@/lib/demo";
import { getCompanyProfile } from "@/lib/data/company";

export default async function SuccessPage() {
  const demoOwnerId = getDemoOwnerId();
  let metrics: any[] = [];

  if (demoOwnerId) {
    try {
      const company = await getCompanyProfile(demoOwnerId);
      metrics = await getSuccessMetrics(company.id);
    } catch (error) {
      console.error("Failed to load success metrics", error);
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Success Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-semibold">How you're doing</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Track your readiness scores across all aspects of your e-commerce
          business. These scores update as you complete tasks.
        </p>
      </header>

      {metrics.length > 0 ? (
        <SuccessMetrics metrics={metrics} />
      ) : (
        <div className="glass rounded-3xl p-12 text-center">
          <p className="text-lg text-slate-600">
            Complete tasks to see your success scores
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Your scores will appear here as you progress through your roadmap
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="glass rounded-3xl p-8">
        <h2 className="text-xl font-semibold">Understanding your scores</h2>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900">Store Readiness</h3>
            <p className="mt-1">
              How ready your online store is. Based on product pages, checkout
              setup, payment methods, and shipping configuration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Launch Readiness</h3>
            <p className="mt-1">
              How ready you are to launch. Based on ad setup, email sequences,
              landing pages, and marketing foundations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Marketing Readiness</h3>
            <p className="mt-1">
              How ready your marketing is. Based on email capture, analytics,
              ad campaigns, and content strategy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Operations Readiness</h3>
            <p className="mt-1">
              How ready your operations are. Based on fulfillment setup,
              customer support, inventory management, and logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
