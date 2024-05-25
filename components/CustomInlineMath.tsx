import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface CustomInlineMathProps {
    children: string;
}

const CustomInlineMath: React.FC<CustomInlineMathProps> = ({ children }) => {
    return <InlineMath math={children} />;
};

export default CustomInlineMath;