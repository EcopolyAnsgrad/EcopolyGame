import { resources as islandResources } from "../../images/islands";
import { resourcesTasks } from "../../data/resourcesTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Resources() {
    return (

        <div className="island-page">

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