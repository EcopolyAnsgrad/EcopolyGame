import type { Group } from "./Group";

export type TaskAssignment = {
    islandId: string;
    taskId: number;
    assignedGroupId?: number;
    completed: boolean;
    completedAt?:string;
};