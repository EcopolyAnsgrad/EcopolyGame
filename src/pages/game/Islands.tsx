import { Link } from "react-router-dom";
import "./islands.css";
import { ISLANDS_NAVIGATION } from "../../constants/islandNavigator";
import { useGame } from "../../game/context/GameContext";
import * as gameApi from "../../game/api/gameApi";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../../shared/UI/NavigationButton";
import "./Groups.css";
import "./Home.css";
import { isIslandComplete } from "../../game/utils/gameProgress";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { isGameComplete } from "../../game/utils/gameProgress";

function Islands() {    
    const navigate = useNavigate();
    const {game, clearCurrentGame} = useGame();
    const allIslandsComplete = isGameComplete(game, ISLANDS_NAVIGATION.map(island => island.islandId));
    const celebrationShown = useRef(false);
  
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

    useEffect(() => {
      if (!allIslandsComplete || celebrationShown.current) {
        return;
    }

    celebrationShown.current = true;

    const duration = 3000;
    const end = Date.now() + duration;
    const interval = window.setInterval(() => {
            if (Date.now() > end) {
                window.clearInterval(interval);

                return;
            }

            confetti({particleCount: 35, spread: 80, origin: {
                    x: Math.random(),
                    y: Math.random() * 0.4 + 0.2,
                },
            });
        }, 250);

    return () => {window.clearInterval(interval);};}, [allIslandsComplete]);

  return (
    <div className="mainPage islands-page">
      <div className="island-navigation">
        <div className="island-page-navigation">
          <NavigationButton
              to="/groups"
              label="back to groups"
          />

          <NavigationButton
              to="/"
              label="Back to home"
          />
        </div>

          <button className="logout-button" onClick={handleLogout}>
              Log out
          </button>
      </div>

        {allIslandsComplete && (
          <section className="game-complete-message">
            <h1>Congratulations!</h1>
            <p>You have restored every island.</p>
            <strong>You are now Ecopoly Super Eco-Heroes!</strong>
          </section>
        )}

        <div className="image-grid">
        {ISLANDS_NAVIGATION.map(island => {
          const completed = isIslandComplete(game, island.islandId);

          return (
              <Link key={island.path} to={island.path} 
              className={`image-button ${completed ? "island-completed" : ""}`}>
                  
                  <img
                      src={island.image}
                      alt={island.title}
                  />

                  {completed && (
                    <div className="island-complete-badge" aria-label="Island completed"                      >
                          ✓
                      </div>
                  )}
              </Link>
          );
      })}
      </div>
    </div>
  );
}

export default Islands;