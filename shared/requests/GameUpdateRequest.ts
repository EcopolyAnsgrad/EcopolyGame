import type { GameState } from "../models/GameState";

export interface GameUpdateRequest {
    game: GameState;
}