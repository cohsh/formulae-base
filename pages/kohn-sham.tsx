import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";

const LatticesPage = () => {
    return (
        <Layout>
            <h2>Kohn-Sham Equation</h2>
            <CopyableMathBlock>
                {`
                \\left[
                    -\\frac{1}{2} \\nabla^2 + V_\\mathrm{en}(\\mathbf{r})
                    + V_\\mathrm{Hxc}[n](\\mathbf{r})
                    \\right]
                \\psi_i[n](\\mathbf{r})
                =\\epsilon_i[n] \\psi_i[n](\\mathbf{r})
                `}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`
                n(\\mathbf{r}) := \\sum_i \\left|\\psi_i[n](\\mathbf{r})\\right|^2
                `}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`
                V_\\mathrm{en}(\\mathbf{r}) := -\\sum_i Z_i
                v(\\mathbf{r} - \\mathbf{R}_i)
                `}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`
                V_\\mathrm{Hxc}[n](\\mathbf{r}) :=
                \\frac{\\delta E_\\mathrm{Hxc}[n]}{\\delta n}
                `}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`
                E_\\mathrm{Hxc}[n] :=
                E_\\mathrm{H}[n]
                + E_\\mathrm{xc}[n]
                `}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`
                E_\\mathrm{H}[n] := \\frac12 \\int d\\mathbf{r}_1 d\\mathbf{r}_2
                n(\\mathbf{r}_1)v(\\mathbf{r}_1 - \\mathbf{r}_2) n(\\mathbf{r}_2)
                `}
            </CopyableMathBlock>
        </Layout>
    )
};

export default LatticesPage;