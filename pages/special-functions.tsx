import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
    const formulas = [
        { title: "Gamma Function", formula: `\\Gamma(z) = \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0` },
        { title: "Beta Function", formula: `B(z, z')=\\int_0^1 dt t^{z-1}(1-t)^{z'-1},~\\mathrm{Re}(z),\\mathrm{Re}(z')>0` },
    ];
    
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h2>Special Functions</h2>
            {formulas.map(({ title, formula }) => (
            <div key={title}>
                <h3>{title}</h3>
                <CopyableMathBlock formula={formula} />
            </div>
            ))}

            <ToastContainer />
        </Layout>
    )
};

export default IndexPage;