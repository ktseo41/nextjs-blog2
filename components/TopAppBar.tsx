import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar className={classes.toolbar}>
        <Avatar alt="Bohyeon" src="/bohyeon.jpeg" />
        <Typography>보현's blog</Typography>
        <IconButton>
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
