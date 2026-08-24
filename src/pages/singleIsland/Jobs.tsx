import { jobs as islandJobs } from "../../images/islands";
import { jobsTasks } from "../../data/jobsTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";
import IslandImage from "../../shared/Quiz/IslandImage";

export default function Jobs() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to groups"
            />            
            
            <IslandImage
                islandId="jobs"
                src={islandJobs}
                alt="Jobs"
            />

            <IslandBoard
                tasks={jobsTasks}            
                islandId="jobs"
            />
        </div>
    );
}