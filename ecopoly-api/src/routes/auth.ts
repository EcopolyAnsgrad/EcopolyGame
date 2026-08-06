import type { Env } from "../types/Env";
import type { RegisterRequest } from "../../../shared/requests/RegisterRequest";

import {usernameExists, createAccount,} from "../db/accounts";
import {createGame,} from "../db/games";

export async function register(request: Request, env: Env): Promise<Response> {
    try {
        const body = await request.json() as RegisterRequest;

        if (!body.username || !body.password) {
            return Response.json(
                {
                    success: false,
                    message: "Missing username or password."
                },
                { status: 400 }
            );
        }

        if (await usernameExists(env, body.username)) {
            return Response.json(
                {
                    success: false,
                    message: "Username already exists."
                },
                { status: 409 }
            );
        }

        const accountId = await createAccount(
            env,
            body.username,
            body.email ?? null,
            body.password,
        );

        const game = await createGame(env, accountId);

        return Response.json({
            success: true,
            accountId,
            });
    } catch (e) {
        console.error("REGISTER ERROR:", e);

        return Response.json(
            {
                success: false,
                error: String(e)
            },
            { status: 500 }
        );
    }
}