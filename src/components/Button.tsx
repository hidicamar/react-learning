interface Props {
    children: string;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
}

const Button = ({ children, variant, onClick }: Props) => {
    return (
        <button
            type="button"
            className={"btn btn-" + variant}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
