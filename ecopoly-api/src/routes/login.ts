import type { Env } from "../types/Env";
import type { LoginRequest } from "../models/LoginRequest";

import { getAccountByUsername } from "../db/accounts";
import { verifyPassword } from "../utils/passwords";

export async function login(request: Request, env: Env): Promise<Response> {
    try {
        const body = await request.json() as LoginRequest;

        if (!body.username || !body.password) {
            return Response.json(
                {
                    success: false,
                    message: "Missing username or password."
                },
                { status: 400 }
            );
        }

        const account = await getAccountByUsername(env, body.username);

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

        return Response.json({
            success: true,
            accountId: account.id,
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