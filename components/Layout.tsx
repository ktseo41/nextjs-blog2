import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import TopAppBar from "./TopAppBar";
import { Container } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    // <div className={styles.container}>
      <Container disableGutters={true}>
        <TopAppBar />
        <Head>
          <link
            rel="shortcut icon"
            href="/noun_Whale Tail_3413920.ico"
            type="image/x-icon"
          />
          <title>bohyeon blog</title>
        </Head>
        <header className={styles.header}>
          <h2>안녕하세요</h2>
        </header>
        <section className={styles.body}>{children}</section>
      </Container>
  );
}