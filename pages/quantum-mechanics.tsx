import Layout from "../components/Layout";
import CopyableMathBlock from "../components/CopyableMathBlock";

const QuantumMechanicsPage = () => {
    return (
        <Layout>
            <h2>Quantum Mechanics</h2>
            <h3>Schrödinger Equations</h3>
            <CopyableMathBlock>
                {`i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}`}
            </CopyableMathBlock>
            <h3>Commutation Relations</h3>
            <CopyableMathBlock>
                {`[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}`}
            </CopyableMathBlock>
            <h3>Heisenberg Pictures (Assume Hamiltonian is time independent.)</h3>
            <CopyableMathBlock>
                {`\\hat{O}_\\mathrm{H}(t) := e^{i \\hat{H} t}\\hat{O}_\\mathrm{S} e^{-i \\hat{H} t}`}
            </CopyableMathBlock>
            <CopyableMathBlock>
                {`i\\frac{\\partial}{\\partial t} \\hat{O}_\\mathrm{H}(t) = [\\hat{O}_\\mathrm{H}(t), \\hat{H}]`}
            </CopyableMathBlock>
        </Layout>
    )
};


export default QuantumMechanicsPage;