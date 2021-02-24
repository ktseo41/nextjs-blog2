import { makeStyles } from "@material-ui/core";
import React from "react";
import { getAllPostIds, getPostDatasFromId } from "../../lib/posts";

const useStyles = makeStyles((theme) => {
  return {
    markedBody: {
      padding: 8,
      wordBreak: "break-word",
      backgroundColor: theme.palette.background.paper,
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      "& img": {
        maxWidth: "100%",
        [theme.breakpoints.up('md')]: {
          maxWidth: "70%"
        }
      },
      "& p.caption": {
        textAlign: "center",
        margin: 0,
        fontSize: theme.typography.caption,
        marginBottom: theme.spacing(1),
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
