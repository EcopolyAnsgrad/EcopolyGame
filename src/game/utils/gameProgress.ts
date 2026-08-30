import type { GameState } from "../../../shared/models/GameState";

export const ISLAND_COMPLETION_TARGET = 6;

export function getIslandCompletedCount(game: GameState | null, islandId: string): number {
    if (!game) {
        return 0;
    }

    const assignments = game.assignments[islandId] ?? [];

    return assignments.filter(assignment => assignment.completed).length;
}

export function isIslandComplete(game: GameState | null, islandId: string): boolean {
    return (
        getIslandCompletedCount(game, islandId) >= ISLAND_COMPLETION_TARGET
    );
}

export function isGameComplete(game: GameState | null, islandIds: string[]): boolean {
    if (!game) {
        return false;
    }

    return islandIds.every(islandId => isIslandComplete(game, islandId));
}