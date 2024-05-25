import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import { handleCopyClick } from "../utils/clipboard";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
    const formula = `\\hat{H}\\ket{${constants.TEST_CHAR}_n} = E_n \\ket{${constants.TEST_CHAR}_n}`;
    return (
    <Layout title="Home | Next.js + TypeScript Example">
        <h2>Quantum Mechanics</h2>
        <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
            <BlockMath>
                {formula}
            </BlockMath>
        </div>
        <ToastContainer />
    </Layout>
    )
};

export default IndexPage;