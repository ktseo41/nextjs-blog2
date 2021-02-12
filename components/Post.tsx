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

export function ImageTopPost() {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <Image alt="random" width={344} height={194} src={"https://picsum.photos/344/194"} />
        {/* 기본 값이 16이지만.. */}
        <CardContent style={{ padding: 16 }}>
          <Typography variant="h6">Card Title</Typography>
          <Typography variant="caption">2 days ago</Typography>
          <Typography style={{ marginTop: 8 }} variant="body2">
            card description. Ipsum nisi sunt dolor adipisicing velit duis velit ut ullamco
          </Typography>
          <CardActions style={{ padding: "8px 0 0 0" }}>
            <Chip clickable variant="outlined" size="small" label="css" />
            <Chip clickable variant="outlined" size="small" label="javascript" />
            <Chip clickable variant="outlined" size="small" label="web" />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ImageRightPost() {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardContent>
          <Box style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", columnGap: 16 }}>
            <Box>
              <Typography gutterBottom={false} variant="h6">
                Card Title
              </Typography>
              <Typography variant="body2">
                card description. Ipsum nisi sunt dolor adipisicing
              </Typography>
            </Box>
            <Image alt="random2" width={72} height={72} src={"https://picsum.photos/72/72"} />
          </Box>
          <Box display="flex" alignItems="center" style={{ paddingTop: 16 }}>
            <Typography variant="caption">12 days ago</Typography>
            <CardActions style={{ padding: 0, marginLeft: 16 }}>
              <Chip clickable variant="outlined" size="small" label="css" />
              <Chip clickable variant="outlined" size="small" label="javascript" />
              <Chip clickable variant="outlined" size="small" label="web" />
            </CardActions>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
