import { climate as islandClimate } from "../../images/islands";
import { climateTasks } from "../../data/climateTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";

export default function Climate() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />
            
            <IslandImage
                islandId="climate"
                src={islandClimate}
                alt="Climate"
            />

            <IslandBoard
                tasks={climateTasks}         
                islandId="climate"   
            />
        </div>
    );
}