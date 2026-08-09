import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useGame } from "../context/GameContext";
import { getSessionToken } from "../api/gameApi";

type Props = {
    children: ReactNode;
};

export default function SessionRoute({children,}: Props) {
    const { gameLoading } = useGame();

    if (gameLoading) {
        return <div>Loading Ecopoly...</div>;
    }

    if (!getSessionToken()) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return children;
}