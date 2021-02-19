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
      placeItems: "center",
      textAlign: "center",
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
        <Card elevation={0}>
          <Typography variant="h5">
            안녕하세요!
            <Typography variant="body1">제 블로그에 오신걸 환영합니다!</Typography>
            <Typography variant="body2">
              🚧👷‍♂️ 모바일 화면 우선 개발중으로 PC 화면에서는 깨져보일 수 있습니다.
            </Typography>
          </Typography>
        </Card>
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
