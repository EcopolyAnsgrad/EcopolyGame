type HomeBlueButtonProps = {
    title: string;
    language: string;
    className?: string; // Optional className prop
};

function HomeBlueButton({ title, language, className }: HomeBlueButtonProps) {
    return (
        <button className={className}>
            <div>{title}</div>
            <div>{language}</div>
            <div className="small-text">
                printable game
            </div>
        </button>
    );
}

export default HomeBlueButton;