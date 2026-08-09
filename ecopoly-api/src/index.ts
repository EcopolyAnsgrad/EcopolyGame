import type { Env } from "./types/Env";
import { register } from "./routes/register";
import { login } from "./routes/login";
import { loadGame, saveGame } from "./routes/game";
import { getCorsHeaders } from "./utils/cors";

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        if (request.method === "OPTIONS") {
            return new Response(
                null,
                {
                    status: 204,
                    headers: getCorsHeaders(request),
                }
            );
        }

        const url = new URL(request.url);
        let response: Response;

        if (request.method === "POST" && url.pathname === "/api/register") {
            response = await register(
                    request,
                    env
                );
        }

        else if (request.method === "POST" && url.pathname === "/api/login") {
            response = await login(
                    request,
                    env
                );
        }

        else if (request.method === "GET" && url.pathname === "/api/game") {
            response = await loadGame(
                    request,
                    env
                );
        }

        else if (request.method === "PUT" && url.pathname === "/api/game") {
            response = await saveGame(
                    request,
                    env
                );
        }

        else {
            response = new Response(
                    "Not Found",
                    {
                        status: 404,
                    }
                );
        }

        const headers = new Headers(response.headers);
        const cors = getCorsHeaders(request);

        for (const [key, value] of Object.entries(cors)) {
            headers.set(
                key,
                value
            );
        }

        return new Response(
            response.body,
            {
                status: response.status,
                statusText: response.statusText,
                headers,
            }
        );
    },
};