const SESSION_LENGTH_DAYS = 365;

function bytesToBase64Url(bytes: Uint8Array): string {
    let binary = "";

    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

function bytesToHex(bytes: Uint8Array): string {
    return [...bytes]
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

export function generateSessionToken(): string {
    const bytes = crypto.getRandomValues(
        new Uint8Array(32)
    );

    return bytesToBase64Url(bytes);
}

export async function hashSessionToken(token: string): Promise<string> {
    const encoded = new TextEncoder().encode(token);

    const digest = await crypto.subtle.digest(
            "SHA-256",
            encoded
        );

    return bytesToHex(
        new Uint8Array(digest)
    );
}

export function createSessionExpiry(): string {
    const expiresAt = new Date();

    expiresAt.setDate(
        expiresAt.getDate() + SESSION_LENGTH_DAYS
    );

    return expiresAt.toISOString();
}