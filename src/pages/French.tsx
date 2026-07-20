
import CartesEvenements from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_CARTES_EVENEMENTS.pdf";
import CartesSpeciales from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_CARTES_SPECIALES.pdf";
import JeuNationalCartes from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_CARTES.pdf";
import JeuNationalIles from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_ILES.pdf";
import JeuNationalResources from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_RESSOURCES_ENSEIGNANTS.pdf";
import Regles from "../assets/printables/French printable game/FRENCH-NATIONAL_GAME/FRANCE_REGLES DU JEU.pdf";
import HomeBlueButton from "../shared/components/HomeBlueButton";
import "./French.css";
import "./Home.css";
import { Link } from "react-router-dom";

export default function French() {
    return (
        <>
            <h1>French printable games</h1>
            <Link to="/" className="back-button"> BACK</Link>

            <div className="links">
                <ul>
                    <li className="link"><a href={CartesEvenements} target="_blank" >FRENCH-NATIONAL_GAME/FRANCE_CARTES_EVENEMENTS.pdf</a></li>
                    <li><a href={CartesSpeciales} target="_blank" className="link">FRENCH-NATIONAL_GAME/FRANCE_CARTES_SPECIALES.pdf</a></li>
                    <li><a href={JeuNationalCartes} target="_blank" className="link">FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_CARTES.pdf</a></li>
                    <li><a href={JeuNationalIles} target="_blank" className="link">FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_ILES.pdf</a></li>
                    <li><a href={JeuNationalResources} target="_blank" className="link">FRENCH-NATIONAL_GAME/FRANCE_JEU_NATIONAL_RESSOURCES_ENSEIGNANTS.pdf</a></li>
                    <li><a href={Regles} target="_blank" className="link">FRENCH-NATIONAL_GAME/FRANCE_REGLES DU JEU.pdf</a></li>
                </ul>
            </div>
        </>
    );
}