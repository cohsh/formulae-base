import React, { useEffect, useRef } from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js';
import 'katex/dist/katex.min.css';

interface DynamicKatexSpanProps {
    text: string;
    [key: string]: any;
}

const DynamicKatexSpan: React.FC<DynamicKatexSpanProps> = ({ text, ...delegated }) => {
    const katexTextRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (katexTextRef.current) {
            renderMathInElement(katexTextRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                ],
            });
        }
    }, [text]);

    return (
        <span ref={katexTextRef} {...delegated}>
            ${text}$
        </span>
    );
};

export default DynamicKatexSpan;