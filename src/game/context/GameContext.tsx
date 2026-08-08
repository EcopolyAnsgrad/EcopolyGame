import { createContext, useContext, useState } from "react";
import type { GameState } from "../../../shared/models/GameState";
import type { Group } from "../../../shared/models/Group";
import type { TaskAssignment } from "../../../shared/models/TaskAssignment";

type GameContextType = {
    game: GameState | null;
    groups: Group[];

    setCurrentGame: (game: GameState) => void;

    clearCurrentGame: () => void;

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

    getAssignments: (islandId: string) => TaskAssignment[];

    //setGame: (game: GameState) => void;
};

const GameContext = createContext<GameContextType | null>(null);
    
export function GameProvider({children,}: {children: React.ReactNode;}) {
    const [game, setGame] = useState<GameState | null>(null);

    /*async function saveGame(): Promise<void> {
        await gameService.saveGame(game);
    }

    function loadGame(game: GameState): void {
        setGame(game);
    }*/

    function setCurrentGame(newGame: GameState): void {
        setGame(newGame);
    }

    function clearCurrentGame(): void {
        setGame(null);
    }

        /*useEffect(() => {
            if (!game.id)
                return;

            saveGame();
        }, [game]);*/

    function updateGroup(group: Group) {
        setGame(current => {
            if (!current) {
                return current;
            }

            return {
                ...current,
                updatedAt:
                    new Date().toISOString(),
                groups:
                    current.groups.map(g =>
                        g.id === group.id
                            ? group
                            : g
                    ),
            };
        });
    }

    function assignTask(
        islandId: string,
        taskId: number,
        groupId: number
    ) {
        setGame(current => {
            if (!current) {
                return current;
            }

            const islandAssignments = current.assignments[islandId] ?? [];

            const exists = islandAssignments.some(
                    assignment => assignment.taskId === taskId
                );

            const updatedAssignments = exists ? islandAssignments.map(
                    assignment => assignment.taskId === taskId
                            ? {
                                  ...assignment,
                                  assignedGroupId: groupId,
                              }
                            : assignment
                )
                : [
                      ...islandAssignments,
                      {
                          islandId,
                          taskId,
                          assignedGroupId: groupId,
                          completed: false,
                      },
                  ];

            return {
                ...current,

                updatedAt:
                    new Date().toISOString(),

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
            if (!current) {
                return current;
            }

            const islandAssignments = current.assignments[islandId] ?? [];

            const updatedAssignments = islandAssignments.map(
                    assignment => assignment.taskId === taskId
                            ? {
                                  ...assignment,
                                  completed,
                              }
                            : assignment
                );

            return {
                ...current,
                updatedAt: new Date().toISOString(),
                assignments: {
                    ...current.assignments,
                    [islandId]: updatedAssignments,
                },
            };
        });
    }

    function getAssignments(islandId: string): TaskAssignment[] {
        if (!game) {
            return [];
        }

        return (
            game.assignments[islandId] ?? []
        );
    }

    return (
        <GameContext.Provider
            value={{
                game,
                groups: game?.groups ?? [],
                setCurrentGame,
                clearCurrentGame,
                updateGroup,
                assignTask,
                completeTask,
                getAssignments,
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