import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="shortcut icon"
          href="/noun_Whale Tail_3413920.ico"
          type="image/x-icon"
        />
        <title>bohyeon blog</title>
      </Head>
      <header className={styles.header}>
        <h2>bohyeon's blog</h2>
      </header>
      <section className={styles.body}>{children}</section>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}