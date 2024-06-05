import { useState } from "react";

interface Props {
    children: string;
    maxLenght?: number;
}

const ExpandableText = ({ children, maxLenght = 100 }: Props) => {
    const [isExpanded, setExpanded] = useState(false);
    if (children.length <= maxLenght) return <p>{children}</p>;

    const text = isExpanded ? children : children.substring(0, maxLenght);

    return (
        <p>
            {text}

            <button
                className="underline"
                onClick={() => setExpanded(!isExpanded)}
            >
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </p>
    );
};

export default ExpandableText;
