import { useMemo } from "react";

import type { GameState } from "../../shared/models/GameState";
import type { TaskCompletion } from "../shared/components/ProgressGlass/types";

export function useProgressHistory(game: GameState | null) {
    const history = useMemo<TaskCompletion[]>(() => {
            if (!game) {
                return [];
            }

            return Object.values(game.assignments).flat()
                .filter(
                    assignment =>
                        assignment.completed &&
                        assignment.completedAt
                ).map(assignment => {
                    const group =
                        game.groups.find(
                            group =>
                                group.id ===
                                assignment.assignedGroupId
                        );

                    return {
                        id: `${assignment.islandId}-${assignment.taskId}`,
                        color: group?.color ?? "gray",
                        completedAt: assignment.completedAt!,
                    };
                }).sort(
                    (a, b) => a.completedAt.localeCompare(
                            b.completedAt
                        )
                );
        }, [game]);

    return {
        history,
    };
}