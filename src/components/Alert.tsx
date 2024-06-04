import { ReactNode } from "react";
import Button from "./Button";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary" role="alert">
            {children}

            <Button onClick={onClose}>close</Button>
        </div>
    );
};

export default Alert;
