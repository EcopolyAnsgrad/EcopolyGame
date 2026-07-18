import { agriculture as islandAgriculture } from "../../images/islands";

export default function Agriculture() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandAgriculture}
        alt="Agriculture island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
