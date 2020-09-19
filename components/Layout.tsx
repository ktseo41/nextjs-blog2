import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="/noun_Whale Tail_3413920.ico"
          type="image/x-icon"
        />
        <title>bohyeon blog</title>
      </Head>
      <header>
        <h2>bohyeon's blog</h2>
      </header>
      <section className={styles.container}>{children}</section>
    </div>
  );
}
