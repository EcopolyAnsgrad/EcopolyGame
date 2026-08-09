import { Link } from "react-router-dom";

type NavigationButtonProps = {
    to: string;
    label: string;
};

function NavigationButton({to,label,}: NavigationButtonProps) {
    return (
        <Link
            to={to}
            className="navigation-button"
        >
            <button type="button">
                {label}
            </button>
        </Link>
    );
}

export default NavigationButton;