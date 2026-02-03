import { getAgents } from "@/lib/data/agents";
import { getAllRoles, getRoleDisplayName } from "@/lib/roles";
import { AgentCard } from "@/components/AgentCard";
import { getDemoOwnerId } from "@/lib/demo";
import { getCompanyProfile } from "@/lib/data/company";

export default async function AgentsPage() {
  const demoOwnerId = getDemoOwnerId();
  let agents = await getAgents();
  let selectedRole: string | null = null;

  // Get user's company to filter agents by needed roles
  if (demoOwnerId) {
    try {
      const company = await getCompanyProfile(demoOwnerId);
      // In the future, we can filter by roles user needs help with
    } catch (error) {
      console.error("Failed to load company", error);
    }
  }

  const roles = getAllRoles();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Agent Marketplace
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          Find experts to help you succeed
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Connect with experienced professionals who can help you build your
          e-commerce business. All agents are vetted and ready to help.
        </p>
      </header>

      {/* Role Filter */}
      <div className="glass rounded-3xl p-6">
        <h2 className="mb-4 text-lg font-semibold">Filter by role</h2>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border-2 border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            All Roles
          </button>
          {roles.map((role) => (
            <button
              key={role}
              className="rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300"
            >
              {getRoleDisplayName(role)}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      {agents.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="glass rounded-3xl p-12 text-center">
          <p className="text-lg text-slate-600">
            No agents available yet. Check back soon!
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We're building our network of expert service providers.
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="glass rounded-3xl p-8">
        <h2 className="text-xl font-semibold">How it works</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="mb-3 text-3xl">1️⃣</div>
            <h3 className="font-semibold">Browse agents</h3>
            <p className="mt-2 text-sm text-slate-600">
              Find experts by role, experience, and reviews
            </p>
          </div>
          <div>
            <div className="mb-3 text-3xl">2️⃣</div>
            <h3 className="font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-slate-600">
              Send a message explaining what you need help with
            </p>
          </div>
          <div>
            <div className="mb-3 text-3xl">3️⃣</div>
            <h3 className="font-semibold">Get help</h3>
            <p className="mt-2 text-sm text-slate-600">
              Work together to complete tasks and grow your business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
