import NavigationButton from "../shared/UI/NavigationButton";
//import Michal from "../images/photos/Michal_Bala.jpg";

import "./Authors.css";

/*type Author = {
    id: number;
    name: string;
    description: string;
    photo?: string;
};*/

/*const AUTHORS: Author[] = [
    {
        id: 1,
        name: "Michał Bała",
        description: "Developer and designer of the ECOPOLY project, responsible for implementing the game mechanics and user interface.",
        photo: Michal,
    },
];*/

function Authors() {
    return (
        <div className="authors-page">
            <NavigationButton
                to="/"
                label="Back to home"
            />

            <main className="authors-content">
                <h1>Authors</h1>
                    <p>
                        Project was created individually by students of schools in Krotoszyn and Tiraqueau, with the support of their teachers in the form of board games.
                        Each school made their own version of the game which can be found as downloadable assets on the home page in their native languages.

                        Schools cooperation allowed to create a fourth, playable online game that you can experience on this website.
                        The project was co-funded by the European Union through the Erasmus+ program, which provided financial support for the development and implementation of the project.
                    </p>


                {/* <div className="authors-grid">
                    {AUTHORS.map(author => (
                        <article
                            key={author.id}
                            className="author-card"
                        >
                            <div className="author-photo">
                                {author.photo ? (
                                    <img
                                        src={author.photo}
                                        alt={author.name}
                                    />
                                ) : (
                                    <span>
                                        Photo
                                    </span>
                                )}
                            </div>

                            <div className="author-info">
                                <h2>
                                    {author.name}
                                </h2>

                                <p>
                                    {author.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>*/}
            </main>
        </div>
    );
}

export default Authors;