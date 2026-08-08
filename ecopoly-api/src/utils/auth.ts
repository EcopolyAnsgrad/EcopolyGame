import type { Env } from "../types/Env";
import { getAccountIdFromSession } from "../db/sessions";

export async function requireAccount(request: Request, env: Env): Promise<string | null> {
    const authorization = request.headers.get("Authorization");

    if (!authorization?.startsWith("Bearer ")) {
        return null;
    }

    const token = authorization.slice("Bearer ".length);

    if (!token) {
        return null;
    }

    return getAccountIdFromSession(
        env,
        token
    );
}