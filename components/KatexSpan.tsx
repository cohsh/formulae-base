import React, { useEffect, useRef } from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js';
import 'katex/dist/katex.min.css';

interface KatexSpanProps {
    text: string;
}

const KatexSpan: React.FC<KatexSpanProps> = ({ text }) => {
    const katexRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (katexRef.current) {
            renderMathInElement(katexRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                ],
            });
        }
    }, [text]);

    const formattedText = text
        .split('\n')
        .map(line => `$$${line}$$`)
        .join('\n');

    return <div ref={katexRef} dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export default KatexSpan;