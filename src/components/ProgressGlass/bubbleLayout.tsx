import type { BubblePosition } from "./types.tsx";

const ROWS = [4, 5, 6, 7, 7, 7, 6];

const BUBBLE_SIZE = 28;
const HORIZONTAL_SPACING = 34;
const VERTICAL_SPACING = 31;

const START_Y = 260;

export const bubbleLayout: BubblePosition[] = [];

let id = 0;

ROWS.forEach((count, row) => {
    const width = (count - 1) * HORIZONTAL_SPACING;
    const startX = 150 - width / 2;

    for (let i = 0; i < count; i++) {
        bubbleLayout.push({
            id: id++,
            x: startX + i * HORIZONTAL_SPACING,
            y: START_Y - row * VERTICAL_SPACING,
        });
    }
});