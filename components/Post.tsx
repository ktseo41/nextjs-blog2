import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import { getTimeDiffByUnit } from "../utils";

const useStyles = makeStyles((theme) => {
  return {
    trunc: {
      position: "relative",
      height: `calc((${theme.typography.body2.fontSize} * ${theme.typography.body2.lineHeight}) * 2)`,
      wordBreak: "break-all",
      overflow: "hidden",
    },
    fade: {
      position: "absolute",
      bottom: 0,
      right: 0,
      height: `calc(${theme.typography.body2.fontSize} * ${theme.typography.body2.lineHeight})`,
      width: "3em",
      background: `linear-gradient(90deg, transparent, ${theme.palette.background.paper} 100%)`,
    },
  };
});

export function ImageTopPost({
  title = "Card Title",
  timeToDisplay = 1 * 24 * 60 * 60 * 1000,
  description = "card description. Ipsum nisi sunt dolor adipisicing velit duis velit ut ullamco",
  chips = ["css", "javascript", "web"],
  imageSrc = "https://picsum.photos/344/194",
}: {
  title?: string;
  timeToDisplay?: number;
  description?: string;
  chips?: string[];
  imageSrc?: string;
}) {
  const classes = useStyles();
  return (
    <Card elevation={0}>
      <Link href={`/posts/[id]`} as={`/posts/${title}`}>
        <CardActionArea>
          <Image alt="random" width={344} height={194} src={imageSrc} />
          {/* 기본 값이 16이지만.. */}
          <CardContent style={{ padding: 16 }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption">{getTimeDiffByUnit(timeToDisplay)} days ago</Typography>
            <Typography className={classes.trunc} style={{ marginTop: 8 }} variant="body2">
              {description}
              <Typography variant="body2" component="span" className={classes.fade}></Typography>
            </Typography>
            <CardActions style={{ padding: "8px 0 0 0" }}>
              {chips.map((chip) => {
                return <Chip key={chip} clickable variant="outlined" size="small" label={chip} />;
              })}
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export function ImageRightPost({
  title = "Card Title",
  timeToDisplay = 12,
  description = "card description. Ipsum nisi sunt dolor adipisicing",
  chips = ["css", "javascript", "web"],
  imageSrc = "/bohyeon.jpeg",
}: {
  title?: string;
  timeToDisplay?: number;
  description?: string;
  chips?: string[];
  imageSrc?: string;
}) {
  const classes = useStyles();
  return (
    <Card elevation={0}>
      <Link href={`/posts/[id]`} as={`/posts/${title}`}>
        <CardActionArea>
          <CardContent>
            <Box style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", columnGap: 16 }}>
              <Box>
                <Typography gutterBottom={false} variant="h6">
                  {title}
                </Typography>
                <Typography className={classes.trunc} variant="body2">
                  {description}
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.fade}
                  ></Typography>
                </Typography>
              </Box>
              <Image alt="random2" width={72} height={72} src={imageSrc} />
            </Box>
            <Box display="flex" alignItems="center" style={{ paddingTop: 16 }}>
              <Typography variant="caption">{getTimeDiffByUnit(timeToDisplay)} days ago</Typography>
              <CardActions style={{ padding: 0, marginLeft: 16 }}>
                {chips.map((chip) => {
                  return <Chip key={chip} clickable variant="outlined" size="small" label={chip} />;
                })}
              </CardActions>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
