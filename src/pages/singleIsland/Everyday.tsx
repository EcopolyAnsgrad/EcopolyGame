import { everyday as islandEveryday } from "../../images/islands";
import { everydayTasks } from "../../data/everydayTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Everyday() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />
                        
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