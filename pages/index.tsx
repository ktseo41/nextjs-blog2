import React from "react";
import { getRecentCreatedPosts, getRecentModifiedPosts } from "../lib/posts";
import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import Section from "../components/Section";
import { WikiHeaderWithBody } from "../interfaces";
import { WikiHeaderKey } from "../constants";

const useStyles = makeStyles((theme) => {
  return {
    welcomeBox: {
      height: theme.spacing(19),
      padding: `0 ${theme.spacing(2)}px`,
      placeItems: "center",
      textAlign: "center",
      backgroundColor: theme.palette.background.paper,
      maxWidth: theme.breakpoints.values.lg,
      margin: 'auto'
    },
  };
});

type HomeProps = {
  recentCreatedHeaders: WikiHeaderWithBody[];
  recentModifiedHeaders: WikiHeaderWithBody[];
};

export default function Home({ recentCreatedHeaders, recentModifiedHeaders }: HomeProps) {
  const classes = useStyles();

  return (
    <>
      <Box display="grid" className={classes.welcomeBox}>
        <Typography variant="h5">
          안녕하세요
          <Typography variant="body2">
            <br />
            🚧👷‍♂️ 모바일 화면 우선 개발중으로 PC 화면에서는 깨져보일 수 있습니다.
          </Typography>
        </Typography>
      </Box>
      <Section sectionTitle="최근 작성한 글" posts={recentCreatedHeaders} />
      <Section
        sectionTitle="최근 수정한 글"
        posts={recentModifiedHeaders}
        sortBy={WikiHeaderKey.MODIFIED}
        noTopImagePost={true}
      />
    </>
  );
}

export async function getStaticProps() {
  const recentCreatedHeaders = await getRecentCreatedPosts(5);
  const recentModifiedHeaders = await getRecentModifiedPosts(5);

  return {
    props: {
      recentCreatedHeaders,
      recentModifiedHeaders,
    },
  };
}
