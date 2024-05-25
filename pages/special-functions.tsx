import Layout from "../components/Layout";
import { handleCopyClick } from "../utils/clipboard";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
    const gamma_function_definition = `\\Gamma(z) = \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0`;
    const beta_function_definition = `B(z, z')=\\int_0^1 dt t^{z-1}(1-t)^{z'-1},~\\mathrm{Re}(z),\\mathrm{Re}(z')>0`;

    return (
    <Layout title="Home | Next.js + TypeScript Example">
        <h2>Special Functions</h2>
        <h3>Gamma Function</h3>
        <div onClick={handleCopyClick(gamma_function_definition)} style={{ cursor: "pointer" }}>
            <BlockMath>
                {gamma_function_definition}
            </BlockMath>
        </div>

        <h3>Beta Function</h3>
        <div onClick={handleCopyClick(beta_function_definition)} style={{ cursor: "pointer" }}>
            <BlockMath>
                {beta_function_definition}
            </BlockMath>
        </div>

        <ToastContainer />
    </Layout>
    )
};

export default IndexPage;