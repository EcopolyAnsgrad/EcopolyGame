import { agriculture as islandAgriculture } from "../../images/islands";
import { agricultureTasks } from "../../data/agricultureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import { useGame } from "../../game/context/GameContext";

export default function Agriculture() {
    return (
        <div className="island-page">
            <img
                src={islandAgriculture}
                className="island-image"
                alt="Agriculture"
            />

            <IslandBoard
                tasks={agricultureTasks} 
                islandId="agriculture"            
            />
        </div>
    );
}