import { motion } from "framer-motion";
import type { BubbleData } from "./types";

interface Props {
    bubble: BubbleData;
    index: number;
}

const colors = {
    red: "#ff5252",
    blue: "#4285F4",
    green: "#4CAF50",
    yellow: "#FFD54F",
    purple: "#AB47BC",
    cyan: "#26C6DA",
};

export default function Bubble({ bubble, index }: Props) {
  const delay =
        index < 10
            ? index * 0.5 
            : 5 + (index - 10) * 0.15; 

    return (
        <motion.circle
            cx={bubble.x}
            cy={bubble.y}
            r={13}
            fill={colors[bubble.color]}
            initial={{
                scale: 0,
                opacity: 0,
                y: 18,
            }}
            animate={{
                scale: bubble.visible ? 1 : 0,
                opacity: bubble.visible ? 1 : 0,
                y: bubble.visible ? 0 : 18,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
                delay,
            }}
        />
    );
}