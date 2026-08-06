import type { GameState } from "../models/GameState";

export interface LoadGameResponse {
    success: boolean;
    game: GameState;
    message?: string;
}