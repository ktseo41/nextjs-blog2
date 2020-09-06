import React from "react";
import { getAllPostIds, getPostDatasFromId } from "../../lib/posts";

export default function Post({ id, processedContent }) {
  return (
    <div>
      <h3>{id}</h3>
      <div dangerouslySetInnerHTML={{ __html: processedContent }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const processedContent = getPostDatasFromId(id);
  return {
    props: {
      id,
      processedContent,
    },
  };
}
