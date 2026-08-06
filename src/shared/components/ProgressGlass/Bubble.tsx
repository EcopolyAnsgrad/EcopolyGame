import { motion } from "framer-motion";
import type { BubbleData } from "./types";
import { COLORS } from "../../../constants/colors";

interface Props {
    bubble: BubbleData;
    index: number;
}


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
            fill={COLORS[bubble.color]}
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