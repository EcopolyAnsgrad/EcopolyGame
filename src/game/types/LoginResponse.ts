import type { Account } from "../../../shared/models/Account";
import type { GameState } from "../../../shared/models/GameState";

export type LoginResponse = {
    account: Account;
    token: string;
    game: GameState;
};