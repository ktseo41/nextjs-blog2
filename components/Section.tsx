import React from "react";
import { Box, Container, Divider, makeStyles, Typography } from "@material-ui/core";
import { ImageRightPost, ImageTopPost } from "./Post";

export default function Section({
  title = "",
  noTopImagePost = false,
}: {
  title?: string;
  noTopImagePost?: boolean;
}) {
  return (
    <Container disableGutters={true}>
      <Box style={{ padding: "16px 0" }}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      {new Array(5).fill(undefined).map((_, id, { length }) => {
        if (id === 0 && !noTopImagePost)
          return (
            <>
              <ImageTopPost />
              <Divider />
            </>
          );
        if (id === length - 1)
          return (
            <>
              <ImageRightPost />
              <Divider />
              <Box display="flex" justifyContent="center" style={{ padding: 16 }}>
                <Typography>More Posts</Typography>
              </Box>
            </>
          );
        return (
          <>
            <ImageRightPost />
            <Divider />
          </>
        );
      })}
    </Container>
  );
}
