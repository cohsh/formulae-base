import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Formulae Base" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
    <h1>Formulae Base</h1>
    {children}
    <footer>
      <hr />
      <span>©Kohei Ishii</span>
    </footer>
  </div>
);

export default Layout;
