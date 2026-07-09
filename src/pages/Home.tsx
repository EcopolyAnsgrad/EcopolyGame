import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Home.css";
import HomeBlueButton from "../components/HomeBlueButton";
import FooterLogo from "../components/FooterLogo";
import polishPDF from "../assets/printables/Polish printable game.pdf";
import germanPDF from "../assets/printables/German printable game.pdf";


function Home() {
    return (
        <div className = "mainPage">
            <div className = "topContent">
                <div className = "leftMenu">
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
                
                <div className = "mainContent"> 
                    <h1 className = "title">Welcome to the ECOPOLY GAMES</h1>
                    <Link to="/groups" className = "mainButton">
                        <div className = "mainLink">GAME 1:</div>  
                        <div className = "mainLink">ONLINE</div>  
                        <div className = "subtitile">Online Game</div>
                    </Link>

                    <div className = "bottomButtons">
                        <Link to="/about" className = "yellow-button">
                            <button>About the project</button>
                        </Link>
                        <Link to="/authors" className = "yellow-button">
                            <button>Authors</button>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className = "footer">
                <FooterLogo logoSrc="/path/to/erasmus-logo.png" altText="ERASMUS Logo" />
                <FooterLogo logoSrc="/path/to/ecopoly-logo.png" altText="ECOPOLY Logo" />
                <div className = "footerRight"> 
                    <FooterLogo logoSrc="/path/to/school1-logo.png" altText="School 1 Logo" />
                    <FooterLogo logoSrc="/path/to/school2-logo.png" altText="School 2 Logo" />
                    <FooterLogo logoSrc="/path/to/school3-logo.png" altText="School 3 Logo" />
                </div>
            </footer>
        </div>
    );
}

export default Home;