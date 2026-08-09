import { climate as islandClimate } from "../../images/islands";
import { climateTasks } from "../../data/climateTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import { useGame } from "../../game/context/GameContext";

export default function Climate() {
    return (
        <div className="island-page">
            <img
                src={islandClimate}
                className="island-image"
                alt="Climate"
            />

            <IslandBoard
                tasks={climateTasks}         
                islandId="climate"   
            />
        </div>
    );
}