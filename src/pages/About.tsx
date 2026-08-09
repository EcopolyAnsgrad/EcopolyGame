import NavigationButton from "../shared/UI/NavigationButton";

function About() {
    return (
        <div>
            <NavigationButton
                to="/"
                label="Back Home"
            />

            <h1>About</h1>
        </div>
    );
}

export default About;