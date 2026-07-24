import { climate as islandClimate } from "../../images/islands";
import { climateTasks } from "../../data/climateTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Climate() {
    return (

        <div className="island-page">

            <img
                src={islandClimate}
                className="island-image"
                alt="Climate"
            />

            <IslandBoard
                tasks={climateTasks}            
            />

        </div>

    );

}