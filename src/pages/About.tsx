import NavigationButton from "../shared/UI/NavigationButton";
import FooterLogo from "../shared/UI/FooterLogo";

import * as logos from "../images/logos";

import "./About.css";

function About() {
    return (
        <div className="about-page">
            <NavigationButton
                to="/"
                label="Back to home"
            />

            <main className="about-content">
                <h1>About the project</h1>

                <section className="about-card">
                    <h2>ECOPOLY</h2>

                    <p>
                        ECOPOLY is an educational project focused on
                        environmental awareness, sustainability and
                        collaborative learning.
                    </p>

                    <p>
                        The project seems simple at glance and there lies its beauty. 
                        It is a challenge and task game that can be played by students of all ages, and it is designed to teach them about the importance of protecting the environment and making sustainable choices. 
                        Guided by responsible adults children will be divide into 6 groups, each group will bve assigned task from each category and confirmed individualy.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <FooterLogo
                    logoSrc={logos.horizontal}
                    altText="Co-funded by the European Union"
                />

                <FooterLogo
                    logoSrc={logos.ansgard}
                    altText="ECOPOLY"
                />

                <FooterLogo
                    logoSrc={logos.erasmus}
                    altText="Erasmus+"
                />

                <FooterLogo
                    logoSrc={logos.tiraqueau}
                    altText="Tiraqueau"
                />

                <FooterLogo
                    logoSrc={logos.krotoszyn}
                    altText="Krotoszyn"
                />

                <FooterLogo
                    logoSrc={logos.gat}
                    altText="GAT"
                />
            </footer>
        </div>
    );
}

export default About;