import type { Group } from "../../../shared/models/Group";
import "./tasks.css"

import type { TaskDefinition } from "../../../shared/models/TaskDefinition";
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
            <button
                type="button"
                className="task-card task-card--face-down"
                onClick={onAssign}
                aria-label={`Assign task ${task.id}`}
            >
                <span className="task-card-number">
                    {task.id}
                </span>
            </button>
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