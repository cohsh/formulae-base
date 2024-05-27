import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";

const SpecialFunctionsPage = () => {
    return (
        <Layout>
            <h2>Special Functions</h2>
            <h3>Gamma Function</h3>
            <CopyableMathBlock>
                {`\\Gamma(z) := \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\Gamma(z) := \\lim_{n\\to \\infty} \\frac{n^{z}n!}{\\prod_{j=0}^n(z+j)}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\Gamma(z+1) = z\\Gamma(z),~ \\mathrm{Re}(z) > 0`}
            </CopyableMathBlock>
            <h4>Euler's Reflection Formula</h4>
            <CopyableMathBlock>
                {`\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin{\\pi z}},~ z \\notin \\mathbb{Z}`}
            </CopyableMathBlock>
            <h4>Legendre Duplication Formula</h4>
            <CopyableMathBlock>
                {`\\Gamma(z)\\Gamma(z+\\frac12) = 2^{1-2z}\\pi^\\frac12 \\Gamma(2z)`}
            </CopyableMathBlock>
            <h3>Beta Function</h3>
            <CopyableMathBlock>
                {`\\mathrm{B}(z_1, z_2) := \\int_0^1 dt t^{z_1-1}(1-t)^{z_2-1},~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{B}(z_1, z_2) := 2\\int_0^{\\frac{\\pi}{2}} d\\theta \\sin^{2z_1-1}\\theta \\cos^{2z_2-1} \\theta,~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{B}(z_1, z_2) = \\frac{\\Gamma(z_1)\\Gamma(z_2)}{\\Gamma(z_1 + z_2)}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_2, z_1)`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_1, z_2 + 1) + \\mathrm{B}(z_1 + 1, z_2)`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{B}(1, z_1) = \\frac{1}{z_1}`}
            </CopyableMathBlock>
            <h3>Riemann Zeta Function</h3>
            <CopyableMathBlock>
                {`\\zeta(z) = \\sum_{n=1}^\\infty \\frac{1}{n^z}`}
            </CopyableMathBlock>
            <h3>Error Function</h3>
            <CopyableMathBlock>
                {`\\mathrm{erf}(z) := \\frac{2}{\\pi^{\\frac12}} \\int_0^z dt e^{-t^2}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{erf}(-z) = -\\mathrm{erf}(z)`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\mathrm{erf}(z^*) = \\mathrm{erf}(z)^*`}
            </CopyableMathBlock>
        </Layout>
    )
};

export default SpecialFunctionsPage;