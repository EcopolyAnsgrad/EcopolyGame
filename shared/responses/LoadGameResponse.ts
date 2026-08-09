import type { GameState } from "../models/GameState";

export interface LoadGameResponse {
    success: boolean;
    game: GameState | null;
    message?: string;
}