import type {TaskDefinition} from "../../../shared/models/TaskDefinition"
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

    const assignments = getAssignments(islandId);

    function assignRandomGroup(taskId:number){
        const existing = assignments.find(
                assignment => assignment.taskId === taskId
            );

        if (existing?.assignedGroupId) {
            return;
        }

         const usedGroupIds = assignments
                .filter(
                    assignment => assignment.assignedGroupId !== undefined
                )
                .map(
                    assignment => assignment.assignedGroupId!
                );

        const availableGroups = groups.filter(
                group => !usedGroupIds.includes(group.id)
            );

        if (availableGroups.length === 0) {
            return;
        }

        const randomIndex = Math.floor(
                Math.random() * availableGroups.length
            );

        const randomGroup = availableGroups[randomIndex];

        assignTask(
            islandId,
            taskId,
            randomGroup.id
        );
    }

    return(
        <div className="task-grid">
        {tasks.map(task=>{
            const assignment = assignments.find(
                    a=>a.taskId===task.id
                );

            const assignedGroup =
                assignment?.assignedGroupId
                    ? groups.find(
                        group => group.id === assignment.assignedGroupId
                        ) : undefined;

            return (

                <TaskCard
                    key={task.id}
                    task={task}
                    assignedGroup={assignedGroup}
                    completed={assignment?.completed ?? false}
                    onAssign={()=>
                        assignRandomGroup(task.id)
                    }
                    onCompletedChange={(completed) => completeTask(
                            islandId,
                            task.id,
                            completed
                        )}
                />
            );
        })}
        </div>
    );
}

export default IslandBoard;