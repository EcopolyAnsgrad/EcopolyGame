import { COLORS } from "../constants/colors";
import type { GameState } from "../../shared/models/GameState";

export function createGame(username: string): GameState {
    return {
        //ID: crypto.randomUUID(),
        accountId: username,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),

        groups: COLORS.slice(0, 6).map(
                (color, index) => ({
                    id: index + 1,
                    name: "",
                    color,
                })
            ),
        assignments: {},

        version: 1,
    };
}