import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
    const formulas = [
        {
            title: "Gamma Function",
            definitions: [
                { description: "Definition", formula: `\\Gamma(z) = \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0` },
                { description: "Alternative Definition", formula: `\\Gamma(n) = (n-1)!` }
            ]
        },
        {
            title: "Beta Function",
            definitions: [
                { description: "Beta Function Definition", formula: `B(z, z')=\\int_0^1 dt t^{z-1}(1-t)^{z'-1},~\\mathrm{Re}(z),\\mathrm{Re}(z')>0` },
                { description: "Relation with Gamma Function", formula: `B(z, z') = \\frac{\\Gamma(z)\\Gamma(z')}{\\Gamma(z+z')}` }
            ]
        },
    ];
    
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h2>Special Functions</h2>
            {formulas.map(({ title, definitions }) => (
                <div key={title}>
                    <h3>{title}</h3>
                    {definitions.map(({ formula }, index) => (
                        <div key={index}>
                            <CopyableMathBlock formula={formula} />
                        </div>
                    ))}
                </div>
            ))}
            <ToastContainer />
        </Layout>
    )
};

export default IndexPage;