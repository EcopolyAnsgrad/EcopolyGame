import { everyday as islandEveryday } from "../../images/islands";

export default function Everyday() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandEveryday}
        alt="Everyday island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
