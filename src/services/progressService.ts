import type { TaskCompletion } from "../components/ProgressGlass/types.tsx";


export async function getProgressHistory()
: Promise<TaskCompletion[]> {

    return [
        {
            id: "1",
            color: "red",
            completedAt: "2026-07-16T10:00:00"
        },
        {
            id: "2",
            color: "blue",
            completedAt: "2026-07-16T10:05:00"
        },
        {
            id: "3",
            color: "red",
            completedAt: "2026-07-16T10:10:00"
        },
        {
            id: "4",
            color: "green",
            completedAt: "2026-07-16T10:20:00"
        },
        {
            id: "5",
            color: "yellow",
            completedAt: "2026-07-16T10:30:00"
        }
    ];
}