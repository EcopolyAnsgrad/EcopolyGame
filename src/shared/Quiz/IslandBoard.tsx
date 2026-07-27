import type {TaskDefinition} from "../types/TaskDefinition"
import TaskCard from "./TaskCard";
import "./tasks.css"
import { useGame } from "../../game/context/GameContext";

type IslandBoardProps = {
    islandId: string;
    tasks: TaskDefinition[];
};

function IslandBoard({islandId, tasks,}: IslandBoardProps) {
    const {
        groups,
        getAssignments,
        assignTask,
        completeTask,
    } = useGame();

    const assignments =
        getAssignments(islandId);

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

        assignTask(
            islandId,
            taskId,
            random.id
        );
    }

        function updateCompleted(taskId: number, completed: boolean) {
            completeTask(
                islandId,
                taskId,
                completed
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