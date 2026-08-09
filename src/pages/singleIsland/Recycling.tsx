import { recycling as islandRecycling } from "../../images/islands";
import { recyclingTasks } from "../../data/recyclingTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import { useGame } from "../../game/context/GameContext";

export default function Recycling() {
    return (
        <div className="island-page">
            <img
                src={islandRecycling}
                className="island-image"
                alt="Recycling"
            />

            <IslandBoard
                tasks={recyclingTasks}    
                islandId="recycling"        
            />
        </div>
    );
}