import { recycling as islandRecycling } from "../../images/islands";
import { recyclingTasks } from "../../data/recyclingTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Recycling() {
    return (

        <div className="island-page">

            <img
                src={islandRecycling}
                className="island-image"
                alt="Recycling"
            />

            <IslandBoard
                tasks={recyclingTasks}            
            />

        </div>

    );

}