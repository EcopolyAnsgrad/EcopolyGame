function toHex(buffer: ArrayBuffer): string {
    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

export async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hash = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    return toHex(hash);
}

export async function verifyPassword(
    password: string,
    hash: string
): Promise<boolean> {
    const passwordHash = await hashPassword(password);

    return passwordHash === hash;
}