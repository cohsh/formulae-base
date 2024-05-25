import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface CustomBlockMathProps {
    children: string;
}

const CustomBlockMath: React.FC<CustomBlockMathProps> = ({ children }) => {
    return <BlockMath math={children} />;
};

export default CustomBlockMath;