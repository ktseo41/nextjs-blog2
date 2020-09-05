import React, { useRef, useEffect } from "react";
import { getAllPostIds, getPostDatasFromId } from "../../lib/posts";

export default function Post({ id, processedContent }) {
  const content = useRef();
  useEffect(() => {
    content.current.innerHTML = processedContent;
  }, [content.current]);
  return (
    <div>
      <h3>{id}</h3>
      <div ref={content}></div>
    </div>
  );
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
  const { id } = params;
  const processedContent = getPostDatasFromId(id);
  return {
    props: {
      id,
      processedContent,
    },
  };
}
