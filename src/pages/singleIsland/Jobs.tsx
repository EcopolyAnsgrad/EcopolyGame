import { jobs as islandJobs } from "../../images/islands";
import { jobsTasks } from "../../data/jobsTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";

export default function Jobs() {
    return (

        <div className="island-page">

            <img
                src={islandJobs}
                className="island-image"
                alt="Jobs"
            />

            <IslandBoard
                tasks={jobsTasks}            
            />

        </div>

    );

}