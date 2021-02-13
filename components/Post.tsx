import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

export function ImageTopPost({
  title = "Card Title",
  createdTime = 2,
  modifiedTime,
  description = "card description. Ipsum nisi sunt dolor adipisicing velit duis velit ut ullamco",
  chips = ["css", "javascript", "web"],
  imageSrc = "https://picsum.photos/344/194",
}: {
  title?: string;
  createdTime?: number;
  modifiedTime?: number;
  description?: string;
  chips?: string[];
  imageSrc?: string;
}) {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <Image alt="random" width={344} height={194} src={imageSrc} />
        {/* 기본 값이 16이지만.. */}
        <CardContent style={{ padding: 16 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{createdTime} days ago</Typography>
          <Typography style={{ marginTop: 8 }} variant="body2">
            {description}
          </Typography>
          <CardActions style={{ padding: "8px 0 0 0" }}>
            {chips.map((chip) => {
              return <Chip clickable variant="outlined" size="small" label={chip} />;
            })}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ImageRightPost({
  title = "Card Title",
  createdTime = 12,
  modifiedTime,
  description = "card description. Ipsum nisi sunt dolor adipisicing",
  chips = ["css", "javascript", "web"],
  imageSrc = "/bohyeon.jpeg",
}: {
  title?: string;
  createdTime?: number;
  modifiedTime?: number;
  description?: string;
  chips?: string[];
  imageSrc?: string;
}) {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardContent>
          <Box style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", columnGap: 16 }}>
            <Box>
              <Typography gutterBottom={false} variant="h6">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Image alt="random2" width={72} height={72} src={imageSrc} />
          </Box>
          <Box display="flex" alignItems="center" style={{ paddingTop: 16 }}>
            <Typography variant="caption">{createdTime} days ago</Typography>
            <CardActions style={{ padding: 0, marginLeft: 16 }}>
              {chips.map((chip) => {
                return <Chip clickable variant="outlined" size="small" label={chip} />;
              })}
            </CardActions>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
