import { resources as islandResources } from "../../images/islands";

export default function Resources() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandResources}
        alt="Resources island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
