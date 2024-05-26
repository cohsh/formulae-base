import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
  <Layout>
    <h2>Samples</h2>
    <ul>
      <li><Link href="/quantum-mechanics">Quantum Mechanics</Link></li>
      <li><Link href="/special-functions">Special Functions</Link></li>
      <li><Link href="/electron-phonon-systems">Electron-Phonon Systems</Link></li>
    </ul>
    </Layout>
    )
};

export default IndexPage;