import { createContext, useContext, useState } from "react";
import type { GameState } from "../types/GameState";
import type { Group } from "../types/Group";
import type { TaskAssignment } from "../types/TaskAssignment";
import { COLORS } from "../../constants/colors";

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
};


const GameContext =
    createContext<GameContextType | null>(null);

function createInitialGame(): GameState {
    const now = new Date().toISOString();

    return {
        ID: crypto.randomUUID(),
        accountId: "",

        createdAt: now,
        updatedAt: now,
        version: 1,

        groups: COLORS.slice(0, 6).map(
            (color, index) => ({
                id: index + 1,
                name: "",
                color,
            })
        ),

        assignments: {},
    };
}

export function GameProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [game, setGame] =
        useState<GameState>(
            createInitialGame()
        );

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
            }}>
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