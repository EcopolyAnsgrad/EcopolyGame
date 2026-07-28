import type { Account } from "./Account";
import type { GameState } from "./GameState";

export type LoginResponse = {
    account: Account;
    token: string;
    game: GameState;
};