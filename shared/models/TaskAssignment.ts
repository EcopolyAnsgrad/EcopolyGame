export type TaskAssignment = {
    islandId: string;
    taskId: number;
    assignedGroupId?: number;
    completed: boolean;
    completedAt?:string;
};