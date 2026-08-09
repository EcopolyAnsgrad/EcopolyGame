import type { Group } from "../../../shared/models/Group";
import "./tasks.css"

import type { TaskDefinition } from "../../../shared/models/TaskDefinition";
type TaskCardProps = {
    task: TaskDefinition;
    assignedGroup?: Group;
    completed: boolean;
    highlighted?: boolean;

    onCompletedChange: (completed: boolean) => void;
};

function TaskCard({task, assignedGroup, completed, highlighted, onCompletedChange,}: TaskCardProps) {
    if (!assignedGroup) {
        return (
            <div
                className={`
                    task-card
                    task-card--face-down
                    ${highlighted ? "task-card--highlighted" : ""}
                `}
            >
                <span>
                    {task.id}
                </span>
            </div>
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