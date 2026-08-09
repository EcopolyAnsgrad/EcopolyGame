import { resources as islandResources } from "../../images/islands";
import { resourcesTasks } from "../../data/resourcesTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Resources() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />

            <img
                src={islandResources}
                className="island-image"
                alt="Resources"
            />

            <IslandBoard
                tasks={resourcesTasks}           
                islandId="resources" 
            />
        </div>
    );
}