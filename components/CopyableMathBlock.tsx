import React from "react";
import { handleCopyClick } from "../utils/clipboard";
import KatexSpan from "./KatexSpan";

interface CopyableMathBlockProps {
    children: string;
}

const CopyableMathBlock: React.FC<CopyableMathBlockProps> = ({ children }) => {
    const formula = removeLineBreaks(children);

    return (
    <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
        <KatexSpan text={formula} />
    </div>
    );
};

const removeLineBreaks = (str: string) => str.replace(/\s+/g, ' ').trim();

export default CopyableMathBlock;