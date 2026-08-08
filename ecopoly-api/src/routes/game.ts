import type { Env } from "../types/Env";
import {getGame, saveGame as saveGameToDb} from "../db/games";
import type { GameState } from "../../../shared/models/GameState";
import { requireAccount } from "../utils/auth";
import { GameUpdateRequest } from "../../../shared/requests/GameUpdateRequest";


export async function loadGame(request: Request, env: Env): Promise<Response> {
    const accountId = await requireAccount(
            request,
            env
        );

    if (!accountId) {
        return Response.json(
            {
                success: false,
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    const game = await getGame(
        env,
        accountId
    );

    if (!game) {
        return Response.json(
            {
                success: true,
                game: null,
            }
        );
    }

    return Response.json({
        success: true,
        game,
    });
}

export async function saveGame(request: Request, env: Env): Promise<Response> {
    const accountId = await requireAccount(
            request,
            env
        );

    if (!accountId) {
        return Response.json(
            {
                success: false,
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    const body = await request.json() as GameUpdateRequest;

    if (!body.game) {
        return Response.json(
            {
                success: false,
                message: "Missing game",
            },
            {
                status: 400,
            }
        );
    }

    const savedGame = await saveGameToDb(
        env,
        accountId,
        body.game
    );

    return Response.json({
        success: true,
        game: savedGame,
    });
}