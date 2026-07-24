import { nature as islandNature } from "../../images/islands";
import { natureTasks } from "../../data/natureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Nature() {
    return (

        <div className="island-page">

            <img
                src={islandNature}
                className="island-image"
                alt="Nature"
            />

            <IslandBoard
                tasks={natureTasks}            
            />

        </div>

    );

}