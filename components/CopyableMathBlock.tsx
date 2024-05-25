import React from "react";
import { BlockMath } from "react-katex";
import { handleCopyClick } from "../utils/clipboard";
import "katex/dist/katex.min.css";

interface CopyableMathBlockProps {
    formula: string;
}

const CopyableMathBlock: React.FC<CopyableMathBlockProps> = ({ formula }) => {
    return (
    <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
        <BlockMath>{formula}</BlockMath>
    </div>
    );
};

export default CopyableMathBlock;