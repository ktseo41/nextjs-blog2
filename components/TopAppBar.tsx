import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Avatar, ButtonBase, IconButton, Typography, Toolbar, AppBar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Link from "next/link";

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
        <ButtonBase>
            <Link href="/">
              <Typography>보현's blog</Typography>
            </Link>
        </ButtonBase>
        <IconButton>
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
