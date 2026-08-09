import { agriculture as islandAgriculture } from "../../images/islands";
import { agricultureTasks } from "../../data/agricultureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Agriculture() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />

            <img
                src={islandAgriculture}
                className="island-image"
                alt="Agriculture"
            />

            <IslandBoard
                tasks={agricultureTasks} 
                islandId="agriculture"            
            />
        </div>
    );
}