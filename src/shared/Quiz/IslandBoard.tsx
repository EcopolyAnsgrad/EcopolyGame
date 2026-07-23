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
                .filter(a => a.assignedGroup)
                .map(a => a.assignedGroup!.id);

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
                        assignedGroup: random
                    }
                    : a
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

            return (

                <TaskCard

                    key={task.id}

                    task={task}

                    assignedGroup={assignment.assignedGroup}

                    completed={assignment.completed}

                    onAssign={()=>
                        assignRandomGroup(task.id)
                    }

                    onCompletedChange={(completed)=>{

                        setAssignments(old=>
                            old.map(a=>

                                a.taskId===task.id
                                ?
                                {
                                    ...a,
                                    completed
                                }
                                :
                                a

                            )
                        );

                    }}

                />

            );

        })}

        </div>

    );
}

export default IslandBoard;