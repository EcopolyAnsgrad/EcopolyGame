import { COLORS } from "../constants/colors";

type Task = {
    id: number;
    name: string;
    description: string;

    groupId: number | null
    groupName: string;
    groupColor: string;

    taskCompleted: boolean;
};

type TaskCardProps = {
    task: Task;
    onTaskChange: (id: number, field: keyof Task, value: string | boolean) => void;
    groups: Group[];
    onAssignGroup: (taskId: number, groupId: number) => void;
};
type Group = {
    id: number;
    name: string;
    color: string;
};


function TaskCard({task, onTaskChange, groups, onAssignGroup}: TaskCardProps) {

    return (
        <div
            className="task-card"
            style={{
                backgroundColor: task.groupColor || "white"
            }}
        >

            <h2>
                Task {task.id}
            </h2>


            <label>
                Name:
                <input
                    value={task.name}
                    onChange={(e) =>
                        onTaskChange(
                            task.id,
                            "name",
                            e.target.value
                        )
                    }
                />
            </label>


            <label>
                Description:
                <textarea
                    value={task.description}
                    onChange={(e) =>
                        onTaskChange(
                            task.id,
                            "description",
                            e.target.value
                        )
                    }
                />
            </label>


            <label>
                Assigned group:
                
                <select
                    value={task.groupId ?? ""}
                    onChange={(e) =>
                        onAssignGroup(
                            task.id,
                            Number(e.target.value)
                        )
                    }
                >

                    <option value="">
                        Select group
                    </option>


                    {groups.map(group => (
                        <option
                            key={group.id}
                            value={group.id}
                        >
                            {group.name}
                        </option>
                    ))}

                </select>

            </label>


            <p>
                Group:
                {task.groupName || "Not assigned"}
            </p>


            <label>
                Completed:

                <input
                    type="checkbox"
                    checked={task.taskCompleted}
                    onChange={(e) =>
                        onTaskChange(
                            task.id,
                            "taskCompleted",
                            e.target.checked
                        )
                    }
                />

            </label>

        </div>
    );
}

export default TaskCard;