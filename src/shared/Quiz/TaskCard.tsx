import type { Group } from "../types/Group";
import "./tasks.css"

import type { TaskDefinition } from "../types/TaskDefinition";
type TaskCardProps = {
    task: TaskDefinition;
    assignedGroup?: Group;
    completed: boolean;

    onAssign: () => void;
    onCompletedChange: (completed: boolean) => void;
};

function TaskCard({task, assignedGroup, completed, onAssign, onCompletedChange,}: TaskCardProps) {
    if (!assignedGroup) {
        return (
            <div
                className="task-card hidden"
                onClick={onAssign}
            />
        );
    }

    return (
        <div
            className="task-card"
            style={{
                backgroundColor: assignedGroup.color,
            }}>
            <h2>{task.title}</h2>

            <h3>{assignedGroup.name}</h3>

            <p>{task.description}</p>

            <label>
                Completed
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) =>
                        onCompletedChange(e.target.checked)
                    }
                />
            </label>
        </div>
    );
}

export default TaskCard;