import Layout from "../components/Layout";
import FormulaeSet from "../components/ShowFormulae";

const QuantumMechanicsPage = () => {
    const formulae_set = [
        {
            title: "Schrödinger Equations",
            formulae: [
                { description: "Time Dependent", formula: 'i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}' },
                { description: "Time Independent", formula: '\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}' },
            ]
        },
        {
            title: "Commutation Relations",
            formulae: [
                { description: "Definition", formula: '[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1' },
                { description: "Cannonical", formula: '[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}' },
            ]
        },
        {
            title: "Heisenberg Pictures (Assume Hamiltonian is time independent.)",
            formulae: [
                { description: "Heisenberg", formula: '\\hat{O}_\\mathrm{H}(t) := e^{i \\hat{H} t}\\hat{O}_\\mathrm{S} e^{-i \\hat{H} t}' },
                { description: "Heisenberg", formula: 'i\\frac{\\partial}{\\partial t} \\hat{O}_\\mathrm{H}(t) = [\\hat{O}_\\mathrm{H}(t), \\hat{H}]' },
            ]
        }
    ];
    
    return (
        <Layout>
            <h2>Quantum Mechanics</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};


export default QuantumMechanicsPage;