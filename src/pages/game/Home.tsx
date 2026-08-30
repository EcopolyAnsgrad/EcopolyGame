import { Link } from "react-router-dom";
import "./Home.css";
import HomeBlueButton from "../../shared/UI/HomeBlueButton";
import FooterLogo from "../../shared/UI/FooterLogo";
import polishPDF from "../../assets/printables/Polish printable game.pdf";
import germanPDF from "../../assets/printables/German printable game.pdf";
import * as logos from "../../images/logos";
import { useGame } from "../../game/context/GameContext";
import { getSessionToken } from "../../game/api/gameApi";

function Home() {
    const { gameLoading } = useGame();
    const loggedIn = !gameLoading && getSessionToken() !== null;

    return (
        <div className="mainPage">
            <div className="topContent">
                <div className="leftMenu">
                    <Link to="/french" className="downloadable-button-wrapper">
                        <HomeBlueButton title="GAME 2:" language="FRENCH" className="blue-button"/>
                    </Link>
                    <a href={germanPDF} target="_blank" rel="noopener noreferrer" className="downloadable-button-wrapper">
                        <HomeBlueButton title="GAME 3:" language="GERMAN" className="blue-button" />
                    </a>
                    <a href={polishPDF} target="_blank" rel="noopener noreferrer" className="downloadable-button-wrapper">
                        <HomeBlueButton title="GAME 4:" language="POLISH" className="blue-button" />
                    </a>
                </div>
                
                <div className="main-Content"> 
                    <h1 className="title">Welcome to the ECOPOLY GAMES</h1>
                        <Link to={loggedIn ? "/groups" : "/login"} className="main-Button">
                            <div className="mainLink">
                                GAME 1:
                            </div>

                            <div className="mainLink">
                                {loggedIn ? "CONTINUE GAME" : "ONLINE"}
                            </div>

                            <div className="subtitle"> 
                                {loggedIn ? "Return to your class" : "Online Game"}
                            </div>
                        </Link>

                    <div className="bottom-Buttons">
                        <Link to="/about" className="green-button">
                            <button>About the project</button>
                        </Link>
                        <Link to="/authors" className="green-button">
                            <button>Authors</button>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <FooterLogo logoSrc={logos.horizontal} altText="Cofunded by the European Union" />
                <FooterLogo logoSrc={logos.ansgard} altText="ECOPOLY Logo" />
                <FooterLogo logoSrc={logos.erasmus} altText="Erasmus Logo" />
                <div className="footerRight"> 
                    <FooterLogo logoSrc={logos.tiraqueau} altText="Tiraqueau Logo" />
                    <FooterLogo logoSrc={logos.krotoszyn} altText="Krotoszyn Logo" />
                    <FooterLogo logoSrc={logos.gat} altText="GAT Logo" />
                </div>
            </footer>
        </div>
    );
}

export default Home;