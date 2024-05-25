import React from "react";
import { BlockMath } from "react-katex";
import { handleCopyClick } from "../utils/clipboard";

interface CopyableMathBlockProps {
    formula: string;
}

const CopyableMathBlock: React.FC<CopyableMathBlockProps> = ({ formula }) => {
    return (
    <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
        <BlockMath math={formula} />
    </div>
    );
};

export default CopyableMathBlock;