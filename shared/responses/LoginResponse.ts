import type { GameState } from "../models/GameState";

export interface LoginResponse {
    success: boolean;
    message?: string;
    token?: string;
    game?: GameState | null;
}