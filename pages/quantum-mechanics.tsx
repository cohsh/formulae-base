import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import FormulaeSet from "../components/ShowFormulae";

const IndexPage = () => {
    const formulae_set = [
        {
            title: "Schrödinger Equations",
            formulae: [
                { description: "Time Dependent", formula: `i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}` },
                { description: "Time Independent", formula: `\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}` },
            ]
        },
        {
            title: "Commutation Relations",
            formulae: [
                { description: "Definition", formula: `[\\hat{O}_1, \\hat{O}_2] ${constants.DEFINE} \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1` },
                { description: "Cannonical", formula: `[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}` },
            ]
        },
    ];
    
    return (
        <Layout>
            <h2>Quantum Mechanics</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};


export default IndexPage;