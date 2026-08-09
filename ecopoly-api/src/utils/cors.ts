const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://ecopolyansgrad.github.io",
];

export function getCorsHeaders(request: Request): Record<string, string> {
    const origin = request.headers.get("Origin") ?? "";
    const allowed = ALLOWED_ORIGINS.includes(origin);

    const headers: Record<string, string> = {
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
    };

    if (allowed) {
        headers["Access-Control-Allow-Origin"] = origin;
    }

    return headers;
}