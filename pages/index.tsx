import Link from "next/link";
import Layout from "../components/Layout";
import "katex/dist/katex.min.css";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h2>Contents</h2>
    <ul>
      <li><Link href="/quantum-mechanics">Quantum Mechanics</Link></li>
      <li><Link href="/special-functions">Special Functions</Link></li>
    </ul>
    </Layout>
    )
};

export default IndexPage;