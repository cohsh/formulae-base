import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import FormulaeSet from "../components/ShowFormulae";

const IndexPage = () => {
    const formulae_set = [
        {
            title: "Gamma Function",
            formulae: [
                { description: "Definition", formula: `\\Gamma(z) ${constants.DEFINE} \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0` },
                { description: "Definition", formula: `\\Gamma(z) ${constants.DEFINE} \\lim_{n\\to \\infty} \\frac{n^{z}n!}{\\prod_{j=0}^n(z+j)}` },
                { description: "Property", formula: `\\Gamma(z+1) = z\\Gamma(z),~ \\mathrm{Re}(z) > 0` },
                { description: "Euler's Reflection Formula", formula: `\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin{\\pi z}},~ z \\notin ${constants.INTEGER}` },
                { description: "Legendre Duplication Formula", formula: `\\Gamma(z)\\Gamma(z+\\frac12) = 2^{1-2z}\\pi^\\frac12 \\Gamma(2z)` },
            ]
        },
        {
            title: "Beta Function",
            formulae: [
                { description: "Definition", formula: `\\mathrm{B}(z_1, z_2) ${constants.DEFINE} \\int_0^1 dt t^{z_1-1}(1-t)^{z_2-1},~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0` },
                { description: "Definition", formula: `\\mathrm{B}(z_1, z_2) ${constants.DEFINE} 2\\int_0^{\\frac{\\pi}{2}} d\\theta \\sin^{2z_1-1}\\theta \\cos^{2z_2-1} \\theta,~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0` },
                { description: "Relation with Gamma Function", formula: `\\mathrm{B}(z_1, z_2) = \\frac{\\Gamma(z_1)\\Gamma(z_2)}{\\Gamma(z_1 + z_2)}` },
                { description: "Property", formula: `\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_2, z_1)` },
                { description: "Property", formula: `\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_1, z_2 + 1) + \\mathrm{B}(z_1 + 1, z_2)` },
                { description: "Property", formula: `\\mathrm{B}(1, z_1) = \\frac{1}{z_1}` },
            ]
        },
        {
            title: "Riemann Zeta Function",
            formulae: [
                { description: "Definition", formula: `\\zeta(z) = \\sum_{n=1}^\\infty \\frac{1}{n^z}` },
            ]
        },
        {
            title: "Error Function",
            formulae: [
                { description: "Definition", formula: `\\mathrm{erf}(z) ${constants.DEFINE} \\frac{2}{\\pi^{\\frac12}} \\int_0^z dt e^{-t^2}` },
                { description: "Property", formula: `\\mathrm{erf}(-z) = -\\mathrm{erf}(z)` },
                { description: "Property", formula: `\\mathrm{erf}(z^*) = \\mathrm{erf}(z)^*` },
            ]
        },
    ];
    
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h2>Special Functions</h2>
            <FormulaeSet functions={formulae_set} />
        </Layout>
    )
};

export default IndexPage;