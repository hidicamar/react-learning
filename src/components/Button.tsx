interface Props {
    children: string;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
}

const Button = ({ children, variant, onClick }: Props) => {
    return (
        <button
            type="button"
            className="p-4 rounded-lg bg-blue-300 text-blue-800"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
