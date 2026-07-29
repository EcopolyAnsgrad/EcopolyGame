import { createContext, useContext, useState } from "react";

type AuthState = {
    username: string | null;
    loggedIn: boolean;
};

type AuthContextType = {
    auth: AuthState;
    login: (username: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children,}: {children: React.ReactNode;}) {
    const [auth, setAuth] = useState<AuthState>({
            username: null,
            loggedIn: false,
        });

    function login(username: string) {
        setAuth({
            username,
            loggedIn: true,
        });
    }

    function logout() {
        setAuth({
            username: null,
            loggedIn: false,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error("Missing AuthProvider");

    return context;
} 