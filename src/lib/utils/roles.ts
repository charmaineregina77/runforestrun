/**
 * Role utility functions for filtering, grouping, and displaying tasks by role
 */

import { Role, getRoleDisplayName, isValidRole } from "../roles";
import { EcommerceTask } from "../tasks/ecommerce-tasks";

/**
 * Extract primary role from a role string (handles "Role + Role" format)
 */
export function extractPrimaryRole(roleString: string | null): Role | null {
  if (!roleString) return null;
  
  // Handle "Role + Role" format
  const parts = roleString.split(" + ").map((r) => r.trim());
  const firstRole = parts[0];
  
  return isValidRole(firstRole) ? firstRole : null;
}

/**
 * Extract all roles from a role string (handles "Role + Role" format)
 */
export function extractAllRoles(roleString: string | null): Role[] {
  if (!roleString) return [];
  
  const parts = roleString.split(" + ").map((r) => r.trim());
  return parts.filter((r): r is Role => isValidRole(r));
}

/**
 * Filter tasks by a specific role
 */
export function filterTasksByRole(
  tasks: Array<{ role: string | null }>,
  role: Role
): Array<{ role: string | null }> {
  return tasks.filter((task) => {
    if (!task.role) return false;
    const roles = extractAllRoles(task.role);
    return roles.includes(role);
  });
}

/**
 * Group tasks by role
 */
export function groupTasksByRole(
  tasks: Array<{ role: string | null }>
): Record<string, Array<{ role: string | null }>> {
  const grouped: Record<string, Array<{ role: string | null }>> = {};
  
  tasks.forEach((task) => {
    if (!task.role) {
      const unassigned = grouped["Unassigned"] || [];
      unassigned.push(task);
      grouped["Unassigned"] = unassigned;
      return;
    }
    
    const roles = extractAllRoles(task.role);
    if (roles.length === 0) {
      const unassigned = grouped["Unassigned"] || [];
      unassigned.push(task);
      grouped["Unassigned"] = unassigned;
      return;
    }
    
    roles.forEach((role) => {
      const roleName = getRoleDisplayName(role);
      const roleTasks = grouped[roleName] || [];
      roleTasks.push(task);
      grouped[roleName] = roleTasks;
    });
  });
  
  return grouped;
}

/**
 * Get role statistics from tasks
 */
export function getRoleStatistics(
  tasks: Array<{ role: string | null }>
): Array<{ role: string; count: number; percentage: number }> {
  const roleCounts: Record<string, number> = {};
  let total = 0;
  
  tasks.forEach((task) => {
    if (!task.role) {
      roleCounts["Unassigned"] = (roleCounts["Unassigned"] || 0) + 1;
      total++;
      return;
    }
    
    const roles = extractAllRoles(task.role);
    if (roles.length === 0) {
      roleCounts["Unassigned"] = (roleCounts["Unassigned"] || 0) + 1;
      total++;
      return;
    }
    
    roles.forEach((role) => {
      const roleName = getRoleDisplayName(role);
      roleCounts[roleName] = (roleCounts[roleName] || 0) + 1;
      total++;
    });
  });
  
  return Object.entries(roleCounts)
    .map(([role, count]) => ({
      role,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Format role string for display
 */
export function formatRoleForDisplay(role: string | null): string {
  if (!role) return "Unassigned";
  return getRoleDisplayName(role as Role);
}
