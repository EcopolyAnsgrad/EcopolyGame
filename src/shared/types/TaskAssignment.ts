import type { Group } from "./Group";

export type TaskAssignment = {
    taskId: number;
    assignedGroup?: Group;
    completed: boolean;
};