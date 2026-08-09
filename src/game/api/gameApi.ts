import type { LoginRequest } from "../../../shared/requests/LoginRequest";
import type { RegisterRequest } from "../../../shared/requests/RegisterRequest";
import type { GameUpdateRequest } from "../../../shared/requests/GameUpdateRequest";

import type { LoginResponse } from "../../../shared/responses/LoginResponse";
import type { RegisterResponse } from "../../../shared/responses/RegisterResponse";
import type { LoadGameResponse } from "../../../shared/responses/LoadGameResponse";
import type { SaveGameResponse } from "../../../shared/responses/SaveGameResponse";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8787";
const TOKEN_KEY = "ecopoly-session-token";

export function getSessionToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setSessionToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function clearSessionToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}

function authHeaders(): HeadersInit {
    const token = getSessionToken();

    return {
        "Content-Type": "application/json",
        ...(token
            ? {
                  Authorization: `Bearer ${token}`,
              }
            : {}),
    };
}

export async function register(request: RegisterRequest): Promise<RegisterResponse> {
    const response = await fetch(
        `${API_URL}/api/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(request),
        }
    );

    const data = await response.json() as RegisterResponse;

    if (!response.ok) {
        throw new Error(
            data.message ?? "Registration failed."
        );
    }

    return data;
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(
        `${API_URL}/api/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(request),
        }
    );

    const data = await response.json() as LoginResponse;

    if (!response.ok) {
        throw new Error(
            data.message ?? "Login failed."
        );
    }

    if (data.token) {
        setSessionToken(data.token);
    }

    return data;
}

export async function loadGame(): Promise<LoadGameResponse> {
    const response = await fetch(
        `${API_URL}/api/game`,
        {
            method: "GET",
            headers: authHeaders(),
        }
    );

    if (response.status === 401) {
        clearSessionToken();

        throw new Error(
            "Your session has expired. Please log in again."
        );
    }

    const data = await response.json() as LoadGameResponse;

    if (!response.ok) {
        throw new Error(
            data.message ?? "Could not load game."
        );
    }

    return data;
}

export async function saveGame(request: GameUpdateRequest): Promise<SaveGameResponse> {
    const response = await fetch(
        `${API_URL}/api/game`,
        {
            method: "PUT",
            headers: authHeaders(),
            body: JSON.stringify(request),
        }
    );

    if (response.status === 401) {
        clearSessionToken();

        throw new Error(
            "Your session has expired. Please log in again."
        );
    }

    const data = await response.json() as SaveGameResponse;

    if (!response.ok) {
        throw new Error(
            data.message ?? "Could not save game."
        );
    }

    return data;
}

