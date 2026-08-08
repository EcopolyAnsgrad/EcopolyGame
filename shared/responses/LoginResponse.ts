import { GameState } from "../models/GameState";

export interface LoginResponse {
    success: boolean;
    message?: string;

    accountId?: string;

    game?: GameState | null;
}