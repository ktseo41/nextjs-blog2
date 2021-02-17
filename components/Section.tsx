import React from "react";
import { Box, Container, Divider, makeStyles, Typography } from "@material-ui/core";
import { ImageRightPost, ImageTopPost } from "./Post";

export default function Section({
  title = "",
  noTopImagePost = false,
  posts = [],
}: {
  title?: string;
  noTopImagePost?: boolean;
  posts?: any[];
}) {
  return (
    <Container disableGutters={true}>
      <Box style={{ padding: "16px 0" }}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      {posts.map(({ title, created, modified , tag }, id, { length }) => {
        if (id === 0 && !noTopImagePost)
          return (
            <>
              <ImageTopPost title={title} createdTime={created} />
              <Divider />
            </>
          );
        if (id === length - 1)
          return (
            <>
              <ImageRightPost title={title} createdTime={created} />
              <Divider />
              <Box display="flex" justifyContent="center" style={{ padding: 16 }}>
                <Typography>More Posts</Typography>
              </Box>
            </>
          );
        return (
          <>
            <ImageRightPost title={title} createdTime={created} />
            <Divider />
          </>
        );
      })}
    </Container>
  );
}
