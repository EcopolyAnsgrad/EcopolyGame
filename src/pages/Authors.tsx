import NavigationButton from "../shared/UI/NavigationButton";

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
        description:
            "Developer and designer of the ECOPOLY project, responsible for implementing the game mechanics and user interface.",
    },
    {
        id: 2,
        name: "Author 2",
        description:
            "Short description of the author's role in the ECOPOLY project.",
    },
    {
        id: 3,
        name: "Author 3",
        description:
            "Short description of the author's role in the ECOPOLY project.",
    },
    {
        id: 4,
        name: "Author 4",
        description:
            "Short description of the author's role in the ECOPOLY project.",
    },
    {
        id: 5,
        name: "Author 5",
        description:
            "Short description of the author's role in the ECOPOLY project.",
    },
    {
        id: 6,
        name: "Author 6",
        description:
            "Short description of the author's role in the ECOPOLY project.",
    },
    {
        id: 7,
        name: "Author 7",
        description:
            "Short description of the author's role in the ECOPOLY project.",
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