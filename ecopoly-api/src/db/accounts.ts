import type { Env } from "../types/Env";
import { hashPassword } from "../utils/passwords";

export async function usernameExists(env: Env, username: string): Promise<boolean> {
    const result = await env.DB.prepare(
                `
                SELECT id
                FROM accounts
                WHERE username = ?
                `
            ).bind(username)
            .first();

    return result !== null;
}

export async function createAccount(env: Env, username: string, email: string | null, password: string): Promise<string> {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const passwordHash = await hashPassword(password);

    await env.DB.prepare(
            `
            INSERT INTO accounts(
                id,
                username,
                email,
                password_hash,
                created_at
            )
            VALUES (?, ?, ?, ?, ?)
            `
        )
        .bind(
            id,
            username,
            email,
            passwordHash,
            createdAt
        )
        .run();

    return id;
}

export async function getAccountByUsername(env: Env, username: string) {
    const result = await env.DB.prepare(
        `
        SELECT 
            id,
            username,
            email,
            password_hash
        FROM accounts
        WHERE username = ?
        `
    )
    .bind(username)
    .first();

    return result;
}