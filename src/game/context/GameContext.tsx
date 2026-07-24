import {createContext, useContext, useState,} from "react";

import type { Group } from "../../shared/types/Group";
import { COLORS } from "../../constants/colors";



type GameContextType = {

    groups: Group[];

    setGroups: React.Dispatch<
        React.SetStateAction<Group[]>
    >;

};

const GameContext =
    createContext<GameContextType | null>(null);

export function GameProvider({children,}: {children: React.ReactNode;}) {
    function createInitialGroups(): Group[] {

        return COLORS.slice(0,6).map(
            (color,index)=>({
                id:index+1,
                name:"",
                color,
            })
        );

    }
    
    const [groups,setGroups] =
        useState<Group[]>(
            createInitialGroups()
        );

    return (

        <GameContext.Provider
            value={{
                groups,
                setGroups,
            }}
        >
            {children}
        </GameContext.Provider>

    );
}

export function useGame() {

    const context =
        useContext(GameContext);

    if (!context) {
        throw new Error(
            "useGame must be used inside GameProvider"
        );
    }

    return context;
}