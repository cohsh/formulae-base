import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";

const LatticesPage = () => {
    return (
        <Layout>
            <h2>Lattices</h2>
            <h3>Direct Lattice</h3>
            <CopyableMathBlock>
                {`\\mathbf{A}_d := [\\mathbf{a}_1 \\cdots \\mathbf{a}_d],~(\\mathbf{a}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathcal{A}[\\mathbf{A}_d]:=\\{ \\mathbf{A}_d \\cdot [n_1 \\cdots n_d] \\mid n_i =-N_i,\\cdots, N_i,~ i=1,\\cdots, d \\}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`N:=|\\mathcal{A}[\\mathbf{A}_d]|=\\prod_{i=1}^d(2N_i+1)`}
            </CopyableMathBlock>
            <h3>Reciprocal Lattice</h3>
            <CopyableMathBlock>
                {`\\mathbf{B}_d := [\\mathbf{b}_1 \\cdots \\mathbf{b}_d],~(\\mathbf{b}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathcal{B}[\\mathbf{B}_d]:=\\{ \\mathbf{B}_d \\cdot \\mathbf{n} \\mid \\mathbf{n} \\in \\mathbb{Z}^d \\}`}
            </CopyableMathBlock>
            <h4>Discrete Brillouin Zone</h4>
            <CopyableMathBlock>
                {`\\mathbb{DBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i = \\frac{j}{2N_i},~ i=1,\\cdots, d, ~ j=-N_i, \\cdots, N_i\\}`}
            </CopyableMathBlock>
            <h4>Continuous Brillouin Zone</h4>
            <CopyableMathBlock>
                {`\\mathbb{CBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i \\in \\mathbb{R}^d,~ i=1,\\cdots, d,~s.t.~ |f_i| \\leq \\frac12 \\}`}
            </CopyableMathBlock>
        </Layout>
    )
};

export default LatticesPage;