import type { Group } from "./Group";
import type { TaskAssignment } from "./TaskAssignment";

export type GameState = {
    id:string;

    createdAt:string;
    updatedAt:string;
    version: number;

    groups: Group[];
    assignments:Record<string, TaskAssignment[]>;
}