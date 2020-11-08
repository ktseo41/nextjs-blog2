import React from "react";
import { getAllPostIds } from "../lib/posts";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ ids }) {
  return (
    <Layout>
      {ids.map(({ params: { id } }, idx) => {
        return (
          <div key={idx}>
            <Link href={`/posts/${id}`}>
              <a>{id}</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export function getStaticProps() {
  const ids = getAllPostIds();

  return {
    props: {
      ids,
    },
  };
}
