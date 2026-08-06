import type { Env } from "../types/Env";
import type { GameState } from "../../../shared/models/GameState";

export async function createGame(
    env: Env,
    accountId: string
) {
    const now = new Date().toISOString();

    const game = {
        ID: crypto.randomUUID(),
        accountId,

        createdAt: now,
        updatedAt: now,
        version: 1,

        groups: [],

        assignments: {},
    };

    await env.DB.prepare(
            `
            INSERT INTO games (
                account_id,
                game_state,
                updated_at
            )
            VALUES (?, ?, ?)
            `
        )
        .bind(
            accountId,
            JSON.stringify(game),
            game.updatedAt
        ).run();

    return game;
}

export async function getGame(env: Env, accountId: string): Promise<GameState | null> {
    const result = await env.DB.prepare(
        `
        SELECT game_state
        FROM games
        WHERE account_id = ?
        `
    ).bind(accountId)
    .first();

    if (!result) {
        return null;
    }

    return JSON.parse(
        result.game_state as string
    ) as GameState;
}

export async function updateGame(env: Env, accountId: string, game: GameState): Promise<void> {
    const now = new Date().toISOString();

    game.updatedAt = now;
    game.version++;

    await env.DB.prepare(
        `
        UPDATE games
        SET 
            game_state = ?,
            updated_at = ?
        WHERE account_id = ?
        `
    ).bind(
        JSON.stringify(game),
        now,
        accountId
    ).run();
}