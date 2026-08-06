export interface LoginResponse {
    success: boolean;
    message?: string;

    accountId?: string;

    game?: unknown;
}