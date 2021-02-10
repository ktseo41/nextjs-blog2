import React from "react";
import { getAllPostIds } from "../lib/posts";
import Link from "next/link";

export default function Home({ ids }) {
  return (
    <>
      {ids.map(({ params: { id } }, idx) => {
        return (
          <div key={idx}>
            <Link href={`/posts/[id]`} as={`/posts/${id}`}>
              <a>{id}</a>
            </Link>
          </div>
        );
      })}
    </>
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
