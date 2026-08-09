import { createContext, useContext, useState, useRef, useEffect,} from "react";
import type { GameState } from "../../../shared/models/GameState";
import type { Group } from "../../../shared/models/Group";
import type { TaskAssignment } from "../../../shared/models/TaskAssignment";
import * as gameApi from "../api/gameApi";

type GameContextType = {
    game: GameState | null;
    gameLoading: boolean;
    groups: Group[];

    setCurrentGame: (game: GameState) => void;

    clearCurrentGame: () => void;

    updateGroup: (group: Group) => void;

    assignTask: (
        islandId: string,
        taskId: number,
        groupId: number
    ) => void;

    assignTasks: (
        islandId: string,
        assignments: {
            taskId: number;
            groupId: number;
        }[]
    ) => void;

    completeTask: (
        islandId: string,
        taskId: number,
        completed: boolean
    ) => void;

    getAssignments: (islandId: string) => TaskAssignment[];
};

const GameContext = createContext<GameContextType | null>(null);
    
export function GameProvider({children,}: {children: React.ReactNode;}) {
    const skipNextSave = useRef(false);
    const [game, setGame] = useState<GameState | null>(null);
    const [gameLoading, setGameLoading] = useState(true);

    useEffect(() => {
        async function restoreGame() {

            const token = gameApi.getSessionToken();

            if (!token) {
                setGameLoading(false);
                return;
            }

            try {
                const response =await gameApi.loadGame();

                if (response.game) {
                    skipNextSave.current = true;
                    setGame(response.game);
                }
            } catch (error) {
                console.error(
                    "Could not restore game:",
                    error
                );
                gameApi.clearSessionToken();
                setGame(null);
            } finally {
                setGameLoading(false);
            }
        }
        restoreGame();
    }, []);
    
    function setCurrentGame(newGame: GameState): void {
        skipNextSave.current = true;
        setGame(newGame);
    }

    function clearCurrentGame(): void {
        setGame(null);
    }

    function updateGroup(group: Group) {
        setGame(current => {
            if (!current) {
                return current;
            }

            return {
                ...current,
                groups:
                    current.groups.map(g =>
                        g.id === group.id
                            ? group
                            : g
                    ),
            };
        });
    }

    function assignTask(islandId: string, taskId: number, groupId: number) {
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
                assignments: {
                    ...current.assignments,

                    [islandId]:
                        updatedAssignments,
                },
            };
        });
    }

    function assignTasks(islandId: string, newAssignments: {taskId: number; groupId: number;}[]) {
        setGame(current => {
            if (!current) {
                return current;
            }

            const assignments: TaskAssignment[] = newAssignments.map(item => ({
                    islandId,
                    taskId: item.taskId,
                    assignedGroupId:
                        item.groupId,
                    completed: false,
                }));

            return {
                ...current,
                assignments: {
                    ...current.assignments,
                    [islandId]: assignments,
                },
            };
        });
    }

    function completeTask(islandId: string, taskId: number, completed: boolean) {
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
                                completedAt: completed
                                      ? new Date().toISOString()
                                      : undefined,
                              }
                            : assignment
                );

            return {
                ...current,
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

    useEffect(() => {
        if (!game) {
            return;
        }

        if (skipNextSave.current) {
            skipNextSave.current = false;

            return;
        }

        const timeout = window.setTimeout(
                async () => {
                    try {
                        const response = await gameApi.saveGame({
                                game,
                            });

                        if (response.game) {
                            skipNextSave.current = true;

                            setGame(response.game);
                        }

                    } catch (error) {
                        console.error(
                            "Autosave failed:",
                            error
                        );
                    }
                },
                800
            );

        return () => {
            window.clearTimeout(timeout);
        };
    }, [game]);

    return (
        <GameContext.Provider
            value={{
                game,
                gameLoading,
                groups: game?.groups ?? [],
                setCurrentGame,
                clearCurrentGame,
                updateGroup,
                assignTask,
                assignTasks,
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