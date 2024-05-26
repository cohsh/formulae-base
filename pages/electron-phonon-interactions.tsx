import Layout from "../components/Layout";
import FormulaeSet from "../components/ShowFormulae";

const ElectronPhononInteractionsPage = () => {
    const formulae_set = [
        {
            title: "Coupling Constants",
            formulae: [
                { description: "Definition", formula: "g_{n_1n_2\\nu}(\\mathbf{k}, \\mathbf{q}):= \\Braket{n_1, \\mathbf{k} + \\mathbf{q}|\\Delta_{\\mathbf{q}\\nu}\\hat{V}|n_2, \\mathbf{k}}" },
                { description: "Variation", formula: "\\Delta_{\\mathbf{q}\\nu}:=\\sum_{\\kappa \\alpha}e_{\\kappa \\alpha, \\nu}(\\mathbf{q}) \\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha}(\\mathbf{q})}" },
                { description: "Variation", formula: "\\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha}(\\mathbf{q})} := \\sum_{p} e^{i\\mathbf{q}\\cdot \\mathbf{R}_p} \\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha, p}}" }
            ]
        }
    ];
    
    return (
        <Layout>
            <h2>Electron Phonon Interactions</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};


export default ElectronPhononInteractionsPage;