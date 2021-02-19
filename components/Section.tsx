import React from "react";
import { Box, Container, Divider, Typography } from "@material-ui/core";
import { ImageRightPost, ImageTopPost } from "./Post";
import { WikiHeader } from "../interfaces";
import { WikiHeaderKey } from "../constants";

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
  posts?: WikiHeader[];
}) {
  return (
    <Container disableGutters={true}>
      <Box style={{ padding: "16px 0" }}>
        <Typography variant="subtitle1">{sectionTitle}</Typography>
      </Box>
      {posts.map((header, id, { length }) => {
        if (id === 0 && !noTopImagePost)
          return (
            <div key={header.title}>
              <ImageTopPost title={header.title} timeToDisplay={header[sortBy]} />
              <Divider />
            </div>
          );
        if (id === length - 1)
          return (
            <div key={header.title}>
              <ImageRightPost title={header.title} timeToDisplay={header[sortBy]} />
              <Divider />
              <Box display="flex" justifyContent="center" style={{ padding: 16 }}>
                <Typography>More Posts</Typography>
              </Box>
            </div>
          );
        return (
          <div key={header.title}>
            <ImageRightPost title={header.title} timeToDisplay={header[sortBy]} />
            <Divider />
          </div>
        );
      })}
    </Container>
  );
}
