import { createContext, useContext, useState, useEffect } from "react";
import type { GameState } from "../types/GameState";
import type { Group } from "../types/Group";
import type { TaskAssignment } from "../types/TaskAssignment";
import { COLORS } from "../../constants/colors";
import {createGame} from "../CreateGame";

type GameContextType = {
    game: GameState;

    groups: Group[];

    updateGroup: (group: Group) => void;

    assignTask: (
        islandId: string,
        taskId: number,
        groupId: number
    ) => void;

    completeTask: (
        islandId: string,
        taskId: number,
        completed: boolean
    ) => void;

    getAssignments: (
        islandId: string
    ) => TaskAssignment[];

    saveGame: () => Promise<void>;

    loadGame: (game: GameState) => void;
};

const GameContext = createContext<GameContextType | null>(null);
    
export function GameProvider({children,}: {children: React.ReactNode;}) {
    async function saveGame(): Promise<void> {
        // Later:
        // await gameService.saveGame(game);

        console.log("Saving game...");
    }

    function loadGame(game: GameState): void {

        setGame(game);
    }

    const [game, setGame] = useState<GameState>(
            createGame("")
        );

        useEffect(() => {
            if (!game.accountId)
                return;

            saveGame();
        }, [game]);

    function updateGroup(group: Group) {

        setGame(current => ({
            ...current,
            
            updatedAt: new Date().toISOString(),

            groups:
                current.groups.map(g =>
                    g.id === group.id
                        ? group
                        : g
                ),
        }));
    }

    function assignTask(
        islandId: string,
        taskId: number,
        groupId: number
    ) {
        setGame(current => {
            const islandAssignments =
                current.assignments[islandId] ?? [];

            const exists =
                islandAssignments.some(
                    assignment =>
                        assignment.taskId === taskId
                );

            const updatedAssignments =
                exists ? islandAssignments.map(assignment =>
                        assignment.taskId === taskId
                            ? {
                                ...assignment,
                                assignedGroupID: groupId,
                            }
                            : assignment
                ):[
                    ...islandAssignments,
                    {
                        islandId,
                        taskId,
                        assignedGroupID: groupId,
                        completed: false,
                    }
                ];

            return {
                ...current,

                updatedAt: new Date().toISOString(),

                assignments: {
                    ...current.assignments,
                    [islandId]:
                        updatedAssignments,
                },
            };
        });
    }

    function completeTask(
        islandId: string,
        taskId: number,
        completed: boolean
    ) {
        setGame(current => {
            const islandAssignments =
                current.assignments[islandId] ?? [];

            const updatedAssignments =
                islandAssignments.map(
                    assignment =>
                        assignment.taskId === taskId
                            ? {
                                ...assignment,
                                completed,
                            }: assignment
                        );

            return {
                ...current,

                updatedAt: new Date().toISOString(),

                assignments: {
                    ...current.assignments,

                    [islandId]:
                        updatedAssignments,
                },
            };
        });
    }

    function getAssignments(
        islandId: string
    ): TaskAssignment[] {
        return game.assignments[islandId] ?? [];
    }

    return (
        <GameContext.Provider
            value={{
                game,
                groups: game.groups,
                updateGroup,
                assignTask,
                completeTask,
                getAssignments,
                saveGame,
                loadGame,
            }}>
            {children}
        </GameContext.Provider>

    );

}

export function useGame() {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error(
            "useGame must be used inside GameProvider"
        );
    }

    return context;
}