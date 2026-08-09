import NavigationButton from "../shared/UI/NavigationButton";

function Authors() {
    return (
        <div>
            <NavigationButton
                to="/"
                label="Back Home"
            />

            <h1>Authors</h1>
            <p>
                This is the Authors page.
            </p>
        </div>
    );
}

export default Authors;