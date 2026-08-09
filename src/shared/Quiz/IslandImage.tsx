import { useGame } from "../../game/context/GameContext";

type IslandImageProps = {
    islandId: string;
    src: string;
    alt: string;
    totalTasks?: number;
};

function IslandImage({islandId, src, alt, totalTasks = 6,}: IslandImageProps) {
    const { getAssignments } = useGame();

    const assignments = getAssignments(islandId);

    const completedCount = assignments.filter(
            assignment => assignment.completed
        ).length;

    const progress = Math.min(
            completedCount / totalTasks,
            1
        );

    const grayscale = 100 - progress * 100;

    return (
        <img
            src={src}
            className="island-image"
            alt={alt}
            style={{
                filter: `grayscale(${grayscale}%)`,
                transition: "filter 1.2s ease",
            }}
        />
    );
}

export default IslandImage;