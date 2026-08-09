const encoder = new TextEncoder();

const PBKDF2_ITERATIONS = 100_000;
const HASH_LENGTH = 32;

function bytesToBase64(bytes: Uint8Array): string {
    let binary = "";

    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary);
}

function base64ToBytes(value: string): Uint8Array {
    const binary = atob(value);

    return Uint8Array.from(
        binary,
        char => char.charCodeAt(0)
    );
}

async function derivePasswordHash(
    password: string,
    salt: Uint8Array
): Promise<Uint8Array> {
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
    );

    const bits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            hash: "SHA-256",
            salt,
            iterations: PBKDF2_ITERATIONS,
        },
        keyMaterial,
        HASH_LENGTH * 8
    );

    return new Uint8Array(bits);
}

export async function hashPassword(
    password: string
): Promise<string> {
    const salt = crypto.getRandomValues(
        new Uint8Array(16)
    );

    const hash = await derivePasswordHash(
        password,
        salt
    );

    return [
        "pbkdf2-sha256",
        PBKDF2_ITERATIONS,
        bytesToBase64(salt),
        bytesToBase64(hash),
    ].join("$");
}

export async function verifyPassword(
    password: string,
    storedPassword: string
): Promise<boolean> {
    const parts = storedPassword.split("$");

    if (parts.length !== 4) {
        return false;
    }

    const [
        algorithm,
        iterationsString,
        saltBase64,
        hashBase64,
    ] = parts;

    if (algorithm !== "pbkdf2-sha256") {
        return false;
    }

    const iterations = Number(iterationsString);

    if (!Number.isFinite(iterations)) {
        return false;
    }

    const salt = base64ToBytes(saltBase64);
    const expectedHash = base64ToBytes(hashBase64);

    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
    );

    const bits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            hash: "SHA-256",
            salt,
            iterations,
        },
        keyMaterial,
        expectedHash.length * 8
    );

    const actualHash = new Uint8Array(bits);

    return crypto.subtle.timingSafeEqual(
        actualHash,
        expectedHash
    );
}