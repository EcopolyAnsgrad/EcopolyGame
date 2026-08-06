export interface BubblePosition {
    id: number;
    x: number;
    y: number;
}

export interface BubbleData extends BubblePosition {
    color: number;
    visible: boolean;
}

export interface TaskCompletion {
    id: string;
    color: string;
    completedAt: string;
}
