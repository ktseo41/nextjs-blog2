import React from "react";
import { Box, Container, Divider, makeStyles, Typography } from "@material-ui/core";
import { ImageRightPost, ImageTopPost } from "./Post";
import { WikiHeaderWithBody } from "../interfaces";
import { WikiHeaderKey } from "../constants";

const useStyles = makeStyles((theme) => {
  return {
    sectionContainer: {
      padding: `0 ${theme.spacing(2)}px`,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
    },
    sectionTitle: {
      padding: "16px 0",
    },
  };
});

export default function Section({
  sectionTitle = "",
  noTopImagePost = false,
  sortBy = WikiHeaderKey.CREATED,
  posts = [],
}: {
  sectionTitle?: string;
  noTopImagePost?: boolean;
  // https://stackoverflow.com/questions/48850720/typescript-how-can-omit-some-items-from-an-enum-in-typescript
  sortBy?: Exclude<WikiHeaderKey, WikiHeaderKey.TAG | WikiHeaderKey.TITLE>;
  posts?: WikiHeaderWithBody[];
}) {
  const classes = useStyles();

  return (
    <Container className={classes.sectionContainer} disableGutters={true}>
      <Container className={classes.sectionTitle}>
        <Typography variant="subtitle1">{sectionTitle}</Typography>
      </Container>
      {posts.map((header, id, { length }) => {
        if (id === 0 && !noTopImagePost)
          return (
            <div key={header.title}>
              <ImageTopPost
                title={header.title}
                description={header.texts}
                timeToDisplay={header[sortBy]}
              />
              <Divider />
            </div>
          );
        if (id === length - 1)
          return (
            <div key={header.title}>
              <ImageRightPost
                title={header.title}
                description={header.texts}
                timeToDisplay={header[sortBy]}
              />
              <Divider />
              <Box display="flex" justifyContent="center" style={{ padding: 16 }}>
                <Typography>{sectionTitle} 더 보기 →</Typography>
              </Box>
            </div>
          );
        return (
          <div key={header.title}>
            <ImageRightPost
              title={header.title}
              description={header.texts}
              timeToDisplay={header[sortBy]}
            />
            <Divider />
          </div>
        );
      })}
    </Container>
  );
}
