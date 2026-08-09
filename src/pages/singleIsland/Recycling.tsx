import { recycling as islandRecycling } from "../../images/islands";
import { recyclingTasks } from "../../data/recyclingTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Recycling() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />

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