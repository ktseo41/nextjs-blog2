import React from "react";
import { getAllPostIds } from "../lib/posts";
import Link from "next/link";
import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import Section from "../components/Section";

const useStyles = makeStyles((theme) => {
  return {
        welcomeBox: {
          height: theme.spacing(19),
          placeItems: "center",
          textAlign: "center",
        },
      };
;;
});

export default function Home({ ids }) {
  const classes = useStyles();

  return (
    <>
      <Box display="grid" className={classes.welcomeBox}>
        <Card elevation={0}>
          <Typography variant="h5">
            안녕하세요!
            <Typography variant="body1">제 블로그에 오신걸 환영합니다!</Typography>
          </Typography>
        </Card>
      </Box>
      <Section title='section 1' />
      <Section title="section 2" noTopImagePost={true}  />
      {/* {ids.map(({ params: { id } }, idx) => {
        return (
          <div key={idx}>
            <Link href={`/posts/[id]`} as={`/posts/${id}`}>
              <a>{id}</a>
            </Link>
          </div>
        );
      })} */}
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
