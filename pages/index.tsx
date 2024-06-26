import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
  <Layout>
    <h2>Samples</h2>
    <ul>
      <li><Link href="/quantum-mechanics">Quantum Mechanics</Link></li>
      <li><Link href="/special-functions">Special Functions</Link></li>
      <li><Link href="/lattices">Lattices</Link></li>
      <li><Link href="/kohn-sham">Kohn-Sham Equation</Link></li>
    </ul>
    </Layout>
    )
};

export default IndexPage;