import type { Env } from "../types/Env";
import {getGame, updateGame} from "../db/games";
import type { GameState } from "../../../src/game/types/GameState";


export async function loadGame(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const accountId = url.searchParams.get(
        "accountId"
    );

    if (!accountId) {
        return Response.json(
            {
                success:false,
                message:"Missing accountId"
            },
            {
                status:400
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
                success:false,
                message:"Game not found"
            },
            {
                status:404
            }
        );
    }

    return Response.json({
        success:true,
        game
    });
}

export async function saveGame(request: Request, env: Env): Promise<Response> {
    const body = await request.json() as {
        accountId:string;
        game:GameState;
    };

    if (!body.accountId || !body.game) {
        return Response.json(
            {
                success:false,
                message:"Missing data"
            },
            {
                status:400
            }
        );
    }

    await updateGame(
        env,
        body.accountId,
        body.game
    );

    return Response.json({
        success:true
    });
}