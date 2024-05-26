import Layout from "../components/Layout";
import FormulaeSet from "../components/ShowFormulae";

const ElectronPhononInteractionsPage = () => {
    const formulae_set = [
        {
            title: "Direct Lattice",
            formulae: [
                { description: "Basis", formula: "\\mathbf{A}_d := [\\mathbf{a}_1 \\cdots \\mathbf{a}_d],~(\\mathbf{a}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)" },
                { description: "Lattice Vectors", formula: "\\mathcal{A}[\\mathbf{A}_d]:=\\{ \\mathbf{A}_d \\cdot [n_1 \\cdots n_d] \\mid n_i =-N_i,\\cdots, N_i,~ i=1,\\cdots, d \\}" },
                { description: "Cardinality", formula: "N:=|\\mathcal{A}[\\mathbf{A}_d]|" }
            ]
        },
        {
            title: "Reciprocal Lattice",
            formulae: [
                { description: "Basis", formula: "\\mathbf{B}_d := [\\mathbf{b}_1 \\cdots \\mathbf{b}_d],~(\\mathbf{b}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)" },
                { description: "Lattice Vectors", formula: "\\mathcal{B}[\\mathbf{B}_d]:=\\{ \\mathbf{B}_d \\cdot \\mathbf{n} \\mid \\mathbf{n} \\in \\mathbb{Z}^d \\}" },
                { description: "Brillouin Zone", formula: "\\mathbb{BZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i = \\frac{j}{2N_i},~ i=1,\\cdots, d, ~ j=-N_i, \\cdots, N_i\\}"}
            ]
        },
        {
            title: "Bloch Electrons",
            formulae: [
                { description: "Hamiltonian", formula: "\\hat{H}_\\mathrm{e} := \\hat{T}_\\mathrm{e} + \\hat{V}_e" },
                { description: "Definition", formula: "\\hat{H}_\\mathrm{e}\\ket{\\psi_{n\\mathbf{k}}}=\\epsilon_{n\\mathbf{k}}\\ket{\\psi_{n\\mathbf{k}}}~(n \\in \\mathbb{N},~ \\mathbf{k} \\in \\mathbb{BZ})" },
                { description: "Bloch Theorem", formula: "\\psi_{n\\mathbf{k}}(\\mathbf{r} + \\mathbf{R})=e^{i\\mathbf{k} \\cdot \\mathbf{R}} \\psi_{n\\mathbf{k}}(\\mathbf{r})" },
                { description: "Bloch Function", formula: "\\psi_{n\\mathbf{k}}(\\mathbf{r})=\\frac{1}{\\sqrt{N}}e^{i\\mathbf{k} \\cdot \\mathbf{r}} u_{n\\mathbf{k}}(\\mathbf{r})" }
            ]
        },
        {
            title: "Coupling Constants",
            formulae: [
                { description: "Derivative", formula: "\\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha}(\\mathbf{q})} := \\sum_{p=1}^N e^{i\\mathbf{q}\\cdot \\mathbf{R}_p} \\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha, p}}" },
                { description: "Variation", formula: "\\Delta_{\\mathbf{q}\\nu}:=l_{\\mathbf{q}\\nu}\\sum_{\\kappa \\alpha}\\sqrt{\\frac{M_0}{M_\\kappa}}e_{\\kappa \\alpha, \\nu}(\\mathbf{q}) \\frac{\\partial}{\\partial \\tau_{\\kappa \\alpha}(\\mathbf{q})}" },
                { description: "Definition", formula: "g_{n_1n_2\\nu}(\\mathbf{k}, \\mathbf{q}):= \\Braket{u_{n_1 \\mathbf{k} + \\mathbf{q}}|\\Delta_{\\mathbf{q}\\nu}\\hat{V}|u_{n_2\\mathbf{k}}}" },
                { description: "Positions", formula: "\\tau_{\\kappa \\alpha, p} := R_{\\alpha, p} + \\tau_{\\kappa\\alpha}" },
                { description: "Normal Displacement", formula: "\\hat{z}_{\\mathbf{q}\\nu}:=l_{\\mathbf{q}\\nu}(\\hat{a}_{\\mathbf{q}\\nu} + \\hat{a}^\\dagger_{-\\mathbf{q}\\nu})" },
                { description: "Displacement", formula: "\\Delta \\hat{\\tau}_{\\kappa \\alpha, p} := \\sqrt{\\frac{M_0}{M_\\kappa}}\\frac{1}{\\sqrt{N}}\\sum_{\\mathbf{q} \\in \\mathbb{BZ}}\\sum_{\\nu = 1}^{dN_\\mathrm{a}} e^{i\\mathbf{q} \\cdot \\mathbf{R}_p}e_{\\kappa \\alpha, \\nu}(\\mathbf{q}) \\hat{z}_{\\mathbf{q}\\nu}" }
            ]
        }
    ];
    
    return (
        <Layout>
            <h2>Electron Phonon Systems</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};


export default ElectronPhononInteractionsPage;