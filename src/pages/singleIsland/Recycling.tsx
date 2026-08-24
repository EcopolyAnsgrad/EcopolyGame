import { recycling as islandRecycling } from "../../images/islands";
import { recyclingTasks } from "../../data/recyclingTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";
import "../game/islands.css";

export default function Recycling() {
    return (
        <div className="island-page">
            <div className="island-page-navigation">            
                <NavigationButton
                    to="/groups"
                    label="Back to groups"
                />

                <NavigationButton
                    to="/islands"
                    label="Back to islands"
                />
            </div>

            <IslandImage
                islandId="recycling"
                src={islandRecycling}
                alt="Recycling"
            />

            <IslandBoard
                tasks={recyclingTasks}    
                islandId="recycling"        
            />
        </div>
    );
}