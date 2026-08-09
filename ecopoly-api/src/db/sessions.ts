import type { Env } from "../types/Env";
import { generateSessionToken, hashSessionToken, createSessionExpiry,} from "../utils/session";

export async function createSession(env: Env, accountId: string): Promise<string> {
    const token = generateSessionToken();
    const tokenHash = await hashSessionToken(token);
    const createdAt = new Date().toISOString();
    const expiresAt = createSessionExpiry();

    await env.DB
        .prepare(
            `
            INSERT INTO sessions (
                token_hash,
                account_id,
                created_at,
                expires_at
            )
            VALUES (?, ?, ?, ?)
            `
        ).bind(
            tokenHash,
            accountId,
            createdAt,
            expiresAt
        ).run();

    return token;
}

export async function getAccountIdFromSession(env: Env, token: string): Promise<string | null> {
    const tokenHash = await hashSessionToken(token);

    const result = await env.DB
            .prepare(
                `
                SELECT account_id
                FROM sessions
                WHERE token_hash = ?
                  AND expires_at > ?
                `
            ).bind(
                tokenHash,
                new Date().toISOString()
            ).first<{ account_id: string }>();

    return result?.account_id ?? null;
}

export async function deleteSession(env: Env, token: string): Promise<void> {
    const tokenHash = await hashSessionToken(token);

    await env.DB.prepare(
            `
            DELETE FROM sessions
            WHERE token_hash = ?
            `
        ).bind(tokenHash)
        .run();
}