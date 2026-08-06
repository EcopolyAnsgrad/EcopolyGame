import { createContext, useContext, useState, useEffect } from "react";
import type { GameState } from "../../../shared/models/GameState";
import type { Group } from "../../../shared/models/Group";
import type { TaskAssignment } from "../../../shared/models/TaskAssignment";
import {createGame} from "../CreateGame";
import * as gameService from "../../services/gameService";

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

    setGame: (game: GameState) => void;
};

const GameContext = createContext<GameContextType | null>(null);
    
export function GameProvider({children,}: {children: React.ReactNode;}) {
    async function saveGame(): Promise<void> {
        await gameService.saveGame(game);
    }

    function loadGame(game: GameState): void {
        setGame(game);
    }

    function setCurrentGame(game: GameState) {
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
                setGame: setCurrentGame,
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