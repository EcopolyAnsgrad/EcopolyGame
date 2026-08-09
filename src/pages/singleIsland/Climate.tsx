import { climate as islandClimate } from "../../images/islands";
import { climateTasks } from "../../data/climateTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Climate() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />
            
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