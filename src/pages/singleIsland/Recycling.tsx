import { recycling as islandRecycling } from "../../images/islands";

export default function Recycling() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandRecycling}
        alt="Recycling island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
