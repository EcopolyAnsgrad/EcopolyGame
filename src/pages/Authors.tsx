import NavigationButton from "../shared/UI/NavigationButton";
import Michal from "../images/photos/Michal_Bala.jpg";

import "./Authors.css";

type Author = {
    id: number;
    name: string;
    description: string;
    photo?: string;
};

const AUTHORS: Author[] = [
    {
        id: 1,
        name: "Michał Bała",
        description: "Developer and designer of the ECOPOLY project, responsible for implementing the game mechanics and user interface.",
        photo: Michal,
    },
];

function Authors() {
    return (
        <div className="authors-page">
            <NavigationButton
                to="/"
                label="Back to home"
            />

            <main className="authors-content">
                <h1>Authors</h1>

                <div className="authors-grid">
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
                </div>
            </main>
        </div>
    );
}

export default Authors;