import { nature as islandNature } from "../../images/islands";
import { natureTasks } from "../../data/natureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";
import "../game/islands.css";

export default function Nature() {
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