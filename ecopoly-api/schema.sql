CREATE TABLE accounts (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
);

CREATE TABLE games (
    account_id TEXT PRIMARY KEY,
    game_state TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    FOREIGN KEY(account_id)
        REFERENCES accounts(id)
);