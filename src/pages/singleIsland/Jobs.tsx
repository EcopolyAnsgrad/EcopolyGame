import { jobs as islandJobs } from "../../images/islands";

export default function Jobs() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandJobs}
        alt="Jobs island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
