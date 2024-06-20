interface Props {
    children: string;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button
            type="button"
            className="p-4 text-blue-800 bg-blue-300 rounded-lg"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
