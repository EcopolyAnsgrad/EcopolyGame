import * as islands from "../../images/islands";
import React from "react";
import { Link } from "react-router-dom";
import "./islands.css";
import { ISLANDS_NAVIGATION } from "../../constants/islandNavigator";

function Islands() {
  return (
    <div className="mainPage">
      <div className="image-grid">
        {ISLANDS_NAVIGATION.map((island) => (
          <Link
            key={island.path}
            to={island.path}
            className="image-button"
          >
            <img src={island.image} alt={island.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Islands;