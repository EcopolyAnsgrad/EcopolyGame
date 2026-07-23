import type { Group } from "./Group";

export type TaskAssignment = {
    taskId: number;
    assignedGroupID?: number;
    completed: boolean;
};