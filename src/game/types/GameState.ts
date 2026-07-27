import type { Group } from "../../shared/types/Group";
import type { TaskAssignment } from "../../shared/types/TaskAssignment";

export type GameState = {
    gameId: string;
    teacherName?: string;

    groups: Group[];

    assignments: Record<string, TaskAssignment[]>;
}