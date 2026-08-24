import { everyday as islandEveryday } from "../../images/islands";
import { everydayTasks } from "../../data/everydayTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";

export default function Everyday() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to groups"
            />
                        
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