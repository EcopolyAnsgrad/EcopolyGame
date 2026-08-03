CREATE TABLE Accounts (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT,
    passwordHash TEXT NOT NULL,
    createdAt TEXT NOT NULL
);

CREATE TABLE Games (
    accountId TEXT PRIMARY KEY,
    gameState TEXT NOT NULL,
    updatedAt TEXT NOT NULL,

    FOREIGN KEY(accountId)
        REFERENCES Accounts(id)
);