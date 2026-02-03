import { notFound } from "next/navigation";
import { topActions } from "@/lib/mock-data";
import { getActionById } from "@/lib/data/actions";
import { getDemoOwnerId } from "@/lib/demo";
import { ActionDetail } from "@/components/ActionDetail";

type ActionDetailPageProps = {
  params: { id: string };
};

export default async function ActionDetailPage({
  params,
}: ActionDetailPageProps) {
  const demoOwnerId = getDemoOwnerId();

  let action =
    topActions.find((item) => item.id === params.id) ??
    (demoOwnerId ? null : null);

  if (!action && demoOwnerId) {
    try {
      const data = await getActionById(params.id);
      action = {
        id: data.id,
        title: data.title,
        role: data.role ?? "Growth",
        impact: (data.impact ?? "Medium") as "High" | "Medium" | "Low",
        effort: (data.effort ?? "Low") as "High" | "Medium" | "Low",
        summary:
          data.description ?? "Complete this action to move your launch forward.",
        checklist: [],
      };
    } catch (error) {
      console.error("Failed to load action detail", error);
    }
  }

  if (!action) {
    notFound();
  }

  return (
    <ActionDetail
      title={action.title}
      role={action.role}
      impact={action.impact}
      effort={action.effort}
      summary={action.summary}
      checklist={action.checklist}
      // TODO: Load these from database when available
      why={undefined}
      instructions={undefined}
      tutorialVideoUrl={undefined}
      helpResources={undefined}
      difficulty={undefined}
    />
  );
}
