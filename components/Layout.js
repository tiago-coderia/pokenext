import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
}
