import type { GameState } from "../../shared/models/GameState";

export interface SaveGameResponse {
    success: boolean;
    message?: string;
    game?: GameState;
}