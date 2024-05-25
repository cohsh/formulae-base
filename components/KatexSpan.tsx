'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import 'katex/dist/katex.min.css';

const DynamicKatexSpan = dynamic(() => import('./DynamicKatexSpan'), { ssr: false });

interface KatexSpanProps {
    text: string;
    [key: string]: any;
}

const KatexSpan: React.FC<KatexSpanProps> = ({ text, ...delegated }) => {
    return <DynamicKatexSpan text={text} {...delegated} />;
};

export default KatexSpan;
