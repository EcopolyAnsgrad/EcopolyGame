import { everyday as islandEveryday } from "../../images/islands";
import { everydayTasks } from "../../data/everydayTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import { useGame } from "../../game/context/GameContext";

export default function Everyday() {
    return (
        <div className="island-page">
            <img
                src={islandEveryday}
                className="island-image"
                alt="Everyday"
            />

            <IslandBoard
                tasks={everydayTasks}          
                islandId="everyday"  
            />
        </div>
    );
}