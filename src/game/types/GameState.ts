import type { Group } from "../../shared/types/Group";
import type { TaskAssignment } from "../../shared/types/TaskAssignment";

export type GameState = {
    ID: string;

    teacherName?: string;
    schoolName?: string;

    createdAt: string;
    updatedAt: string;

    groups: Group[];

    version: number;

    assignments: Record<string, TaskAssignment[]>;
}