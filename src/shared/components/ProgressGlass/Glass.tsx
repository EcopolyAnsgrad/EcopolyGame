import Bubble from "./Bubble.tsx";
import GlassOutline from "./Outline.tsx";
import  { bubbleLayout } from "./bubbleLayout.tsx";
import type { BubbleColor, BubbleData, TaskCompletion } from "./types.tsx";

interface Props {
    history: TaskCompletion[];
}

const colorOrder: BubbleColor[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "cyan",
];

export default function Glass({history}: Props) {

    const bubbles: BubbleData[] =
        bubbleLayout.map((position,index)=>({

            ...position,

            color:
                history[index]?.color ?? "red",

            visible:
                index < history.length
        }));


    return (
        <svg
            width={300}
            height={360}
            viewBox="0 0 300 360"
        >

            {bubbles.map((bubble, index)=>(
                <Bubble
                    key={bubble.id}
                    bubble={bubble}
                    index={index}
                />
            ))}

            <GlassOutline/>

        </svg>
    );
}