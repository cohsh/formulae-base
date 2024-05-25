import React from "react";
import { AppProps } from "next/app";
import "katex/dist/katex.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
};

export default MyApp;
