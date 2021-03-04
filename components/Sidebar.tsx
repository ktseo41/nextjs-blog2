import {
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Close, HeadsetSharp } from "@material-ui/icons";
import React, { Dispatch, SetStateAction } from "react";
import CategoryListItem from "./CategoryListItem";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const useStyles = makeStyles((theme) => {
  return {
    drawerContainer: {
      padding: `0 ${theme.spacing(2)}px`,
      width: theme.breakpoints.width("sm") * 0.5,
      maxWidth: theme.breakpoints.width("sm") * 0.5,
    },
    chipBox: {
      padding: "0px 0px 16px 16px",
      display: "flex",
      flexFlow: "nowrap",
      overflowY: "scroll",
    },
  };
});

export default function Sidebar(props: SidebarProps) {
  const { open, setOpen } = props;
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box className={classes.drawerContainer}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            style={{ padding: "16px 0px", alignSelf: "flex-end" }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
          <Divider />
        </Box>
        <Box>
          <Typography style={{ paddingTop: 16 }} variant="h6">
            Headline 6
          </Typography>
          <List>
            <CategoryListItem icon={<HeadsetSharp />} label="test" />
            <CategoryListItem icon={<HeadsetSharp />} label="test" />
            <CategoryListItem icon={<HeadsetSharp />} label="test" />
          </List>
          <Divider />
          <Box>
            <Typography style={{ padding: "8px 0px" }} variant="subtitle1">
              Subtitle 1
            </Typography>
            <Box className={classes.chipBox}>
              {[
                { label: "example-tag", count: 10 },
                { label: "tag2", count: 9 },
                { label: "tag3", count: 8 },
                { label: "tag4", count: 7 },
                { label: "tag5", count: 6 },
              ].map((eachChip: { label: string; count: number }) => {
                return (
                  <Chip
                    style={{ marginRight: 8 }}
                    key={eachChip.label}
                    label={`${eachChip.label} ${eachChip.count}`}
                  />
                );
              })}
            </Box>
            <Divider />
          </Box>
          <Box>
            <List>
              <CategoryListItem icon={<HeadsetSharp />} label="test" />
              <CategoryListItem icon={<HeadsetSharp />} label="test" />
              <CategoryListItem icon={<HeadsetSharp />} label="test" />
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
