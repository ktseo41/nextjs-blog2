import React from "react";
import { getAllPostIds } from "../../lib/posts";

export default function Post({ id }) {
  return <div>{id}</div>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
