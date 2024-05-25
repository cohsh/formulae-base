import Link from "next/link";
import Layout from "../components/Layout";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Formulae Base</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <BlockMath math={"\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}"} />
  </Layout>
);

export default IndexPage;
