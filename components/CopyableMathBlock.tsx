import React from "react";
import { handleCopyClick } from "../utils/clipboard";
import KatexSpan from "./KatexSpan";

interface CopyableMathBlockProps {
    formula: string;
}

const CopyableMathBlock: React.FC<CopyableMathBlockProps> = ({ formula }) => {
    return (
    <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
        <KatexSpan text={formula} />
    </div>
    );
};

export default CopyableMathBlock;