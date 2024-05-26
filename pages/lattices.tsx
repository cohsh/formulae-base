import Layout from "../components/Layout";
import FormulaeSet from "../components/ShowFormulae";

const LatticesPage = () => {
    const formulae_set = [
        {
            title: "Direct Lattice",
            formulae: [
                { description: "Basis", formula: "\\mathbf{A}_d := [\\mathbf{a}_1 \\cdots \\mathbf{a}_d],~(\\mathbf{a}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)" },
                { description: "Lattice Vectors", formula: "\\mathcal{A}[\\mathbf{A}_d]:=\\{ \\mathbf{A}_d \\cdot [n_1 \\cdots n_d] \\mid n_i =-N_i,\\cdots, N_i,~ i=1,\\cdots, d \\}" },
                { description: "Cardinality", formula: "N:=|\\mathcal{A}[\\mathbf{A}_d]|=\\prod_{i=1}^d(2N_i+1)" }
            ]
        },
        {
            title: "Reciprocal Lattice",
            formulae: [
                { description: "Basis", formula: "\\mathbf{B}_d := [\\mathbf{b}_1 \\cdots \\mathbf{b}_d],~(\\mathbf{b}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)" },
                { description: "Lattice Vectors", formula: "\\mathcal{B}[\\mathbf{B}_d]:=\\{ \\mathbf{B}_d \\cdot \\mathbf{n} \\mid \\mathbf{n} \\in \\mathbb{Z}^d \\}" },
                { description: "Discrete Brillouin Zone", formula: "\\mathbb{DBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i = \\frac{j}{2N_i},~ i=1,\\cdots, d, ~ j=-N_i, \\cdots, N_i\\}"},
                { description: "Continuous Brillouin Zone", formula: "\\mathbb{CBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i \\in \\mathbb{R}^d,~ i=1,\\cdots, d,~s.t.~ |f_i| \\leq \\frac12 \\}"}
            ]
        },
    ];
    
    return (
        <Layout>
            <h2>Lattices</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};

export default LatticesPage;