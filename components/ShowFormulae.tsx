// components/SpecialFunctions.tsx
import React from "react";
import CopyableMathBlock from "./CopyableMathBlock";
import { ToastContainer } from "react-toastify";

interface Formula {
    description: string;
    formula: string;
}

interface Formulae {
    title: string;
    formulae: Formula[];
}

interface FormulaeProps {
  functions: Formulae[];
}

const FormulaeSet: React.FC<FormulaeProps> = ({ functions }) => {
    return (
    <div>
        {functions.map(({ title, formulae }) => (
        <div key={title}>
            <h3>{title}</h3>
            {formulae.map(({ formula }, index) => (
            <div key={index}>
                <CopyableMathBlock formula={formula} />
            </div>
            ))}
        </div>
        ))}
    </div>
    );
};

export default FormulaeSet;