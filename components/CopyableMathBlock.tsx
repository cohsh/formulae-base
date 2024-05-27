import React from "react";
import { handleCopyClick } from "../utils/clipboard";
import KatexSpan from "./KatexSpan";

interface CopyableMathBlockProps {
    children: string;
}

const CopyableMathBlock: React.FC<CopyableMathBlockProps> = ({ children }) => {
    return (
    <div onClick={handleCopyClick(children)} style={{ cursor: "pointer" }}>
        <KatexSpan text={children} />
    </div>
    );
};

export default CopyableMathBlock;