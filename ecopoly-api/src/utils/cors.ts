const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    // add your GitHub Pages origin later
];

export function getCorsHeaders(request: Request): Record<string, string> {
    const origin = request.headers.get("Origin") ?? "";
    const allowed = ALLOWED_ORIGINS.includes(origin);

    return {
        "Access-Control-Allow-Origin": allowed ? origin : ALLOWED_ORIGINS[0],
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
    };
}