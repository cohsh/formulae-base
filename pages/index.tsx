import Link from "next/link";
import Layout from "../components/Layout";
import * as constants from "../utils/constants";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Formulae Base</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <BlockMath>
      {`\\hat{H}\\ket{${constants.TEST_CHAR}_n} = E_n \\ket{${constants.TEST_CHAR}_n}`}
    </BlockMath>
  </Layout>
);

export default IndexPage;