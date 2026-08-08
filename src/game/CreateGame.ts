
import type { GameState } from "../../shared/models/GameState";
import type { Group } from "../../shared/models/Group";

export function createGame(groups: Group[]): GameState {
    const now = new Date().toISOString();

    return {
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
        version: 0,
        groups,
        assignments: {},
    };
}