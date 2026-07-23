import { agriculture as islandAgriculture } from "../../images/islands";
import { agricultureTasks } from "../../data/agricultureTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Agriculture() {
const groups = [
    {
        id: 1,
        name: "Green Team",
        color: "green",
    },
    {
        id: 2,
        name: "Blue Team",
        color: "blue",
    },
];

    return (

        <div className="island-page">

            <img
                src={islandAgriculture}
                className="island-image"
                alt="Agriculture"
            />

            <IslandBoard
                tasks={agricultureTasks} groups={groups}            
            />

        </div>

    );

}