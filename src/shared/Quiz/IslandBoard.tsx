import type {TaskDefinition} from "../types/TaskDefinition"
import type { TaskAssignment } from "../types/TaskAssignment";
import { useState } from "react";
import type { Group } from "../types/Group";
import TaskCard from "./TaskCard";




type IslandBoardProps = {
    tasks: TaskDefinition[];
    groups: Group[];
};

function IslandBoard({tasks, groups,}: IslandBoardProps) {
    const [assignments, setAssignments] = useState<TaskAssignment[]>(
        tasks.map(task => ({
            taskId: task.id,
            completed: false,
        }))
    );

    function assignRandomGroup(taskId:number){
        const usedGroups =
            assignments
                .filter(a => a.assignedGroupID)
                .map(a => a.assignedGroupID!);

        const available =
            groups.filter(
                g => !usedGroups.includes(g.id)
            );

        if(available.length===0)
            return;

        const random =
            available[
                Math.floor(
                    Math.random()*available.length
                )
            ];

        setAssignments(old =>
            old.map(a =>
                a.taskId===taskId
                    ? {
                        ...a,
                        assignedGroupID: random.id
                    }
                    : a
            )
        );
    }

        function updateCompleted(taskId: number, completed: boolean) {
            setAssignments(current =>
                current.map(assignment =>
                    assignment.taskId === taskId
                        ? {
                            ...assignment,
                            completed,
                        }
                        : assignment
                )
            );
        }


    return(
        <div className="task-grid">

        {tasks.map(task=>{

            const assignment =
                assignments.find(
                    a=>a.taskId===task.id
                )!;

                const assignedGroup =
                    groups.find(
                        g => g.id === assignment.assignedGroupID
                    );

            return (

                <TaskCard
                    key={task.id}
                    task={task}
                    assignedGroup={assignedGroup}
                    completed={assignment?.completed ?? false}
                    onAssign={()=>
                        assignRandomGroup(task.id)
                    }
                        onCompletedChange={(completed) => {
                            updateCompleted(task.id, completed);
                        }}

                />

            );

        })}

        </div>

    );
}

export default IslandBoard;