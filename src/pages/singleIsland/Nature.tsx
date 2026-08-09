import { nature as islandNature } from "../../images/islands";
import { natureTasks } from "../../data/natureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";

export default function Nature() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />

            <IslandImage
                islandId="nature"
                src={islandNature}
                alt="Nature"
            />

            <IslandBoard
                tasks={natureTasks}            
                islandId="nature"
            />
        </div>
    );
}