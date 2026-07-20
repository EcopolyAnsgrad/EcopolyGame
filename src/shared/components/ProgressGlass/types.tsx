export type BubbleColor =
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "purple"
    | "cyan";

export interface BubblePosition {
    id: number;
    x: number;
    y: number;
}

export interface BubbleData extends BubblePosition {
    color: BubbleColor;
    visible: boolean;
}

export interface TaskCompletion {
    id: string;
    color: BubbleColor;
    completedAt: string;
}
