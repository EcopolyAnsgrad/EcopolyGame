import type { TaskCompletion } from "../shared/components/ProgressGlass/types.tsx";

import { loadGame } from "../game/api/gameApi.ts";

export async function getProgressHistory(accountId: string): Promise<TaskCompletion[]> {
    const game = await loadGame(accountId);

    return Object.values(game.assignments)
        .flat()
        .filter(a => a.completed)
        .sort(
            (a,b)=>
                a.completedAt!.localeCompare(
                    b.completedAt!
                )
        )
        .map(a=>{
            const group = game.groups.find(
                    g=>g.id===a.assignedGroupID
                );

            return{
                id:`${a.islandId}-${a.taskId}`,
                color:group?.color ?? "gray",
                completedAt:a.completedAt!
            };
        });
}