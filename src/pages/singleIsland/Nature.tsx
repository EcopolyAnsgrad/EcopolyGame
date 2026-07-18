import { nature as islandNature } from "../../images/islands";

export default function Nature() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <img
        src={islandNature}
        alt="Nature island"
        style={{ position: "absolute", top: 0, left: 0, maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
