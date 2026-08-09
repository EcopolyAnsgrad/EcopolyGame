import type { Env } from "../types/Env";
import { deleteSession } from "../db/sessions";

export async function logout(request: Request, env: Env): Promise<Response> {
    const authorization = request.headers.get(
            "Authorization"
        );

    if (!authorization?.startsWith("Bearer ")) {
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

    const token = authorization.slice(
            "Bearer ".length
        );

    await deleteSession(
        env,
        token
    );

    return Response.json({
        success: true,
    });
}