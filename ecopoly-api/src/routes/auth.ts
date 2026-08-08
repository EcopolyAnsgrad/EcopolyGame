import type { Env } from "../types/Env";
import type { RegisterRequest } from "../../../shared/requests/RegisterRequest";

import {usernameExists, createAccount,} from "../db/accounts";
import {createGame,} from "../db/games";

export async function register(request: Request, env: Env): Promise<Response> {
    try {
        const body = await request.json() as RegisterRequest;
        
        const username = body.username?.trim().toLowerCase();
        const password = body.password;
        const email = body.email?.trim() || null;

        if (!username || !password) {
            return Response.json(
                {
                    success: false,
                    message: "Missing username or password.",
                },
                {
                    status: 400,
                }
            );
        }

        if (username.length < 3 || username.length > 50) {
            return Response.json(
                {
                    success: false,
                    message: "Username must be between 3 and 50 characters.",
                },
                {
                    status: 400,
                }
            );
        }

        if (password.length < 8) {
            return Response.json(
                {
                    success: false,
                    message: "Password must contain at least 8 characters.",
                },
                {
                    status: 400,
                }
            );
        }

        const usernamePattern = /^[a-z0-9_-]+$/;

        if (!usernamePattern.test(username)) {
            return Response.json(
                {
                    success: false,
                    message:
                        "Username may contain letters, numbers, underscores and hyphens.",
                },
                {
                    status: 400,
                }
            );
        }

        const accountId = await createAccount(env, username, email, password,);

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