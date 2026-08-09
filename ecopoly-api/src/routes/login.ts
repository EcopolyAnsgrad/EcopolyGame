import type { Env } from "../types/Env";
import type { LoginRequest } from "../../../shared/requests/LoginRequest";

import { getAccountByUsername } from "../db/accounts";
import { verifyPassword } from "../utils/passwords";
import { getGame } from "../db/games";
import { createSession } from "../db/sessions";

export async function login(request: Request, env: Env): Promise<Response> {
    try {
        const body = await request.json() as LoginRequest;
        const username = body.username?.trim().toLowerCase();

        if (!username || !body.password) {
            return Response.json(
                {
                    success: false,
                    message: "Missing username or password."
                },
                { status: 400 }
            );
        }

        const account = await getAccountByUsername(env, username);

        if (!account) {
            return Response.json(
                {
                    success: false,
                    message: "Invalid username or password."
                },
                { status: 401 }
            );
        }

        const valid = await verifyPassword(
            body.password,
            account.password_hash as string
        );

        if (!valid) {
            return Response.json(
                {
                    success: false,
                    message: "Invalid username or password."
                },
                { status: 401 }
            );
        }

        const token = await createSession(
                env,
                account.id as string
            );

        const game = await getGame(
                env,
                account.id as string
            );

        return Response.json({
            success: true,
            token,
            game,
        });
    } catch (e) {
        console.error("LOGIN ERROR:", e);

        return Response.json(
            {
                success: false,
                error: String(e)
            },
            { status: 500 }
        );
    }
}