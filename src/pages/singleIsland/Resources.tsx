import { resources as islandResources } from "../../images/islands";
import { resourcesTasks } from "../../data/resourcesTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";
import "../game/islands.css";

export default function Resources() {
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
                islandId="resources"
                src={islandResources}
                alt="Resources"
            />

            <IslandBoard
                tasks={resourcesTasks}           
                islandId="resources" 
            />
        </div>
    );
}