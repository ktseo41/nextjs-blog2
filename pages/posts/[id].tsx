import { makeStyles } from "@material-ui/core";
import React from "react";
import { getAllPostIds, getPostDatasFromId } from "../../lib/posts";

const useStyles = makeStyles((theme) => {
  return {
    markedBody: {
      wordBreak: "break-word",
      "& img": {
        maxWidth: '100%'
      },
    },
  };
});


export default function Post({ id, processedContent }) {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.markedBody}
        dangerouslySetInnerHTML={{ __html: processedContent }}
      ></div>
    </>
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
