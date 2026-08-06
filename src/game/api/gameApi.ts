// services/gameApi.ts

import type { GameState } from "../../../shared/models/GameState";
import type { LoadGameResponse } from "../../../shared/responses/LoadGameResponse";
import type { GameUpdateRequest } from "../../../shared/requests/GameUpdateRequest";
import type { UpdateGameResponse } from "../../../shared/responses/UpdateGameResponse";

const API = "/api";

export async function loadGame(accountId: string): Promise<GameState> {
    const response = await fetch(
        `${API}/game?accountId=${accountId}`
    );

    if (!response.ok)
        throw new Error("Cannot load game");

    const data = await response.json() as LoadGameResponse;

    return data.game;
}

export async function saveGame(game: GameState): Promise<void> {
    const body: GameUpdateRequest = {
        game
    };

    const response = await fetch(
        `${API}/game`,
        {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                accountId: game.accountId,
                game
            })
        }
    );

    if (!response.ok)
        throw new Error("Cannot save game");

    await response.json() as UpdateGameResponse;
}