import type { Group } from "./Group";

export type TaskAssignment = {
    islandId: string;
    taskId: number;
    assignedGroupID?: number;
    completed: boolean;
    completedAt?:string;
};