import { Link } from "react-router-dom";
import "./islands.css";
import { ISLANDS_NAVIGATION } from "../../constants/islandNavigator";
import { useGame } from "../../game/context/GameContext";
import * as gameApi from "../../game/api/gameApi";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../../shared/UI/NavigationButton";
import "./Groups.css";

function Islands() {    
    const navigate = useNavigate();
    const {clearCurrentGame} = useGame();
  
    async function handleLogout() {
        await gameApi.logout();
        clearCurrentGame();
        navigate(
            "/",
            {
                replace: true,
            }
          );
    }

  return (
    <div className="mainPage">
      <div className="island-navigation">
          <NavigationButton
              to="/groups"
              label="back to groups"
          />

          <button className="logout-button" onClick={handleLogout}>
              Log out
          </button>
      </div>
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