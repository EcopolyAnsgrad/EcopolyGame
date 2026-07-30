import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Home.css";
import HomeBlueButton from "../../shared/UI/HomeBlueButton";
import FooterLogo from "../../shared/UI/FooterLogo";
import polishPDF from "../../assets/printables/Polish printable game.pdf";
import germanPDF from "../../assets/printables/German printable game.pdf";
import * as logos from "../../images/logos";


function Home() {
    return (
        <div className="mainPage">
            <div className="topContent">
                <div className="leftMenu">
                    <Link to="/french">
                        <HomeBlueButton title="GAME 2:" language="FRENCH" className="blue-button" />
                    </Link>
                    <a href={germanPDF} target="_blank" rel="noopener noreferrer">
                        <HomeBlueButton title="GAME 3:" language="GERMAN" className="blue-button" />
                    </a>
                    <a href={polishPDF} target="_blank" rel="noopener noreferrer">
                        <HomeBlueButton title="GAME 4:" language="POLISH" className="blue-button" />
                    </a>
                </div>
                
                <div className="mainContent"> 
                    <h1 className="title">Welcome to the ECOPOLY GAMES</h1>
                    <Link to="/login" className="mainButton"></Link>
                    <Link to="/groups" className="mainButton">
                        <div className="mainLink">GAME 1:</div>  
                        <div className="mainLink">ONLINE</div>  
                        <div className="subtitile">Online Game</div>
                    </Link>

                    <div className="bottomButtons">
                        <Link to="/about" className="yellow-button">
                            <button>About the project</button>
                        </Link>
                        <Link to="/authors" className="yellow-button">
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