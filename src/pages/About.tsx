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
                        This section can contain the final project description,
                        its goals, participating organisations, target groups
                        and information about how the Ecopoly games are used
                        in schools and youth activities.
                    </p>

                    <p>
                        Replace this placeholder text with the official project
                        description when the final copy is available.
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