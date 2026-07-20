type BlueButtonProps = {
    title: string;
    className?: string; // Optional className prop
};

function BlueButton({ title, className }: BlueButtonProps) {
    return (
        <button className={className}>
            <div>{title}</div>
        </button>
    );
}

export default BlueButton;