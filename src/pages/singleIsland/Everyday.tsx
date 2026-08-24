import { everyday as islandEveryday } from "../../images/islands";
import { everydayTasks } from "../../data/everydayTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";
import "../game/islands.css";

export default function Everyday() {
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
                islandId="everyday"
                src={islandEveryday}
                alt="Everyday"
            />

            <IslandBoard
                tasks={everydayTasks}          
                islandId="everyday"  
            />
        </div>
    );
}