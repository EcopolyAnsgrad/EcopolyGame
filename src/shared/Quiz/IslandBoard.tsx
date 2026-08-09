import type {TaskDefinition} from "../../../shared/models/TaskDefinition"
import TaskCard from "./TaskCard";
import "./tasks.css"
import { useGame } from "../../game/context/GameContext";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";

type IslandBoardProps = {
    islandId: string;
    tasks: TaskDefinition[];
};

function IslandBoard({islandId, tasks,}: IslandBoardProps) {
    function celebrateIslandCompletion() {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: {
                y: 0.65,
            },
        });
    }

    const [assigning, setAssigning] = useState(false);
    const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
    const [currentGroupName, setCurrentGroupName] = useState<string | null>(null);
    const {groups, getAssignments, assignTasks, completeTask,} = useGame();
    const assignments = getAssignments(islandId);

    const completedCount = assignments.filter(
        assignment => assignment.completed
    ).length;

    const previousCompletedCount = useRef(completedCount);

    useEffect(() => {
        const previous = previousCompletedCount.current;

        if (previous < 6 && completedCount === 6) {
            celebrateIslandCompletion();
        }

        previousCompletedCount.current =
            completedCount;

    }, [completedCount]);

    function shuffle<T>(items: T[]): T[] {
        const copy = [...items];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }

    function createRandomAssignments() {
        const shuffledTasks = shuffle(tasks);

        const selectedTasks = shuffledTasks.slice(
                0,
                groups.length
            );

        return groups.map(
            (group, index) => ({
                groupId: group.id,
                taskId:
                    selectedTasks[index].id,
            })
        );
    }

    function sleep(ms: number) {
        return new Promise(resolve =>setTimeout(resolve, ms));
    }

    async function handleAssignAll() {
        if (assigning) {
            return;
        }

        const results = createRandomAssignments();
        setAssigning(true);

        for (const result of results) {
            const group = groups.find(
                    g => g.id === result.groupId
                );

            if (!group) {
                continue;
            }

            setCurrentGroupName(
                group.name
            );

            const availableTaskIds = tasks.map(
                    task => task.id
                );

            for (
                let spin = 0;
                spin < 12;
                spin++
            ) {
                const randomTaskId = availableTaskIds[
                        Math.floor(Math.random() * availableTaskIds.length)
                    ];

                setActiveTaskId(
                    randomTaskId
                );

                await sleep(
                    80 + spin * 10
                );
            }

            setActiveTaskId(
                result.taskId
            );

            await sleep(600);
        }

        assignTasks(islandId, results);
        setActiveTaskId(null);
        setCurrentGroupName(null);
        setAssigning(false);
    }

    const tasksAlreadyAssigned = assignments.some(
        assignment => assignment.assignedGroupId !== undefined
    );

    return (
        <div>
            <button
                type="button"
                onClick={handleAssignAll}
                disabled={tasksAlreadyAssigned || assigning}
            >
                {assigning ? "Assigning..." : tasksAlreadyAssigned ? "Tasks assigned" : "Assign tasks"}
            </button>

            {assigning && currentGroupName && (
                <div className="assignment-status">
                    Assigning task for{" "}
                    <strong>
                        {currentGroupName}
                    </strong>
                </div>
            )}

            <div className="task-grid">
                {tasks.map(task => {
                    const assignment = assignments.find(
                            a => a.taskId === task.id
                        );

                    const assignedGroup = assignment?.assignedGroupId
                            ? groups.find(
                                group => group.id === assignment.assignedGroupId
                            ) : undefined;

                    return (
                        <TaskCard
                            key={task.id}
                            task={task}
                            assignedGroup={ assignedGroup }
                            completed={ assignment?.completed ?? false }
                            highlighted={ activeTaskId === task.id }
                            onCompletedChange={
                                completed =>
                                    completeTask(
                                        islandId,
                                        task.id,
                                        completed
                                    )
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default IslandBoard;