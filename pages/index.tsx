import Link from "next/link";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import { handleCopyClick } from "../utils/clipboard";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const IndexPage = () => {
  const formula = `\\hat{H}\\ket{${constants.TEST_CHAR}_n} = E_n \\ket{${constants.TEST_CHAR}_n}`;
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Formulae Base</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <div onClick={handleCopyClick(formula)} style={{ cursor: "pointer" }}>
        <BlockMath>
          {formula}
        </BlockMath>
    </div>
      <div onClick={handleCopyClick(constants.TEST_EQ)} style={{ cursor: "pointer" }}>
        <BlockMath>
          {constants.TEST_EQ}
        </BlockMath>
      </div>
    </Layout>
    )
};

export default IndexPage;