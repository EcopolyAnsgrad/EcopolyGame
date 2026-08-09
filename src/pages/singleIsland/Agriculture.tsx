import { agriculture as islandAgriculture } from "../../images/islands";
import { agricultureTasks } from "../../data/agricultureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";

export default function Agriculture() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />

            <IslandImage
                islandId="agriculture"
                src={islandAgriculture}
                alt="Agriculture"
            />

            <IslandBoard
                tasks={agricultureTasks} 
                islandId="agriculture"            
            />
        </div>
    );
}