import { jobs as islandJobs } from "../../images/islands";
import { jobsTasks } from "../../data/jobsTasks";
import IslandBoard from "../../shared/Quiz/IslandBoard";
import NavigationButton from "../../shared/UI/NavigationButton";

export default function Jobs() {
    return (
        <div className="island-page">
            <NavigationButton
                to="/groups"
                label="Back to overview"
            />            
            
            <img
                src={islandJobs}
                className="island-image"
                alt="Jobs"
            />

            <IslandBoard
                tasks={jobsTasks}            
                islandId="jobs"
            />
        </div>
    );
}