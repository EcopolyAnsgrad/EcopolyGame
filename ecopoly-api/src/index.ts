import type { Env } from "./types/Env";
import { register } from "./routes/auth";
import { login } from "./routes/login";
import {loadGame, saveGame} from "./routes/game";

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);

        if (request.method === "POST" && url.pathname === "/api/register") {
            return register(request, env);
        }

        if (request.method === "POST" && url.pathname === "/api/login") {
            return login(request, env);
        }

        if (request.method === "GET" && url.pathname === "/api/game") {
            return loadGame(request, env);
        }

        if (request.method === "PUT" && url.pathname === "/api/game") {
            return saveGame(request, env);
        }

        return new Response("Not Found",{status: 404,});
    },
};