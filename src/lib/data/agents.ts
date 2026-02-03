/**
 * Agent/Service Provider Data Access
 */

import { supabaseServer } from "../supabase/server";
import { Role } from "../roles";

export interface Agent {
  id: string;
  name: string;
  email: string | null;
  role: Role;
  experience_level: string | null;
  hourly_rate: number | null;
  rating: number;
  reviews_count: number;
  portfolio_url: string | null;
  bio: string | null;
  skills: string[] | null;
  contact_info: Record<string, any> | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AgentConnection {
  id: string;
  user_id: string;
  agent_id: string;
  company_id: string;
  task_id: string | null;
  status: string;
  message: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Get all agents, optionally filtered by role
 */
export async function getAgents(role?: Role): Promise<Agent[]> {
  const supabase = supabaseServer();

  let query = supabase
    .from("agents")
    .select("*")
    .eq("status", "active")
    .order("rating", { ascending: false })
    .order("reviews_count", { ascending: false });

  if (role) {
    query = query.eq("role", role);
  }

  const { data, error } = await query;

  if (error) throw error;

  return (data || []) as Agent[];
}

/**
 * Get agent by ID
 */
export async function getAgentById(agentId: string): Promise<Agent> {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("agents")
    .select("*")
    .eq("id", agentId)
    .single();

  if (error) throw error;

  return data as Agent;
}

/**
 * Get agents for a specific task/role
 */
export async function getAgentsForTask(
  taskRole: string,
  limit = 5
): Promise<Agent[]> {
  // Extract primary role from "Role + Role" format
  const primaryRole = taskRole.split(" + ")[0].trim();

  return getAgents(primaryRole as Role).then((agents) =>
    agents.slice(0, limit)
  );
}

/**
 * Create agent connection request
 */
export async function createAgentConnection(
  userId: string,
  agentId: string,
  companyId: string,
  taskId: string | null,
  message?: string
): Promise<AgentConnection> {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("agent_connections")
    .insert({
      user_id: userId,
      agent_id: agentId,
      company_id: companyId,
      task_id: taskId,
      status: "requested",
      message: message || null,
    })
    .select()
    .single();

  if (error) throw error;

  return data as AgentConnection;
}

/**
 * Get user's agent connections
 */
export async function getUserAgentConnections(
  userId: string
): Promise<AgentConnection[]> {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("agent_connections")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data || []) as AgentConnection[];
}
